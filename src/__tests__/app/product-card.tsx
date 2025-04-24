import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import { wordShortener } from '@/shared/providers/shorter';
import Image from 'next/image';
import ProductCard from '@/app/organims/product-card/product-card';
import ROUTES from '@/shared/providers/routers';

// Mocks
jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}));
jest.mock('next/image');


jest.mock('@/shared/providers/shorter', () => ({
  wordShortener: jest.fn((text) => text) // Mock inicial que devuelve el texto sin cambios
}));

jest.mock('@/app/atoms/chip/chip', () => 
  ({ text }: { text: string }) => <div data-testid="chip">{text}</div>)

describe('ProductCard Component', () => {
  const mockPush = jest.fn();
  const mockProduct = {
    id: 1,
    image: '/test-image.jpg',
    title: 'Producto de prueba con un título muy largo que debe ser acortado',
    category: 'Electrónica',
    price: 99.99,
    description: 'Descripción detallada del producto que también será acortada para mostrarse en la tarjeta'
  };

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush
    });
    
    // Resetear mocks
    jest.clearAllMocks();
    
    // Configurar mock para wordShortener
    (wordShortener as jest.Mock).mockImplementation((text) => text);
  });

  it('debe renderizar correctamente todas las props del producto', () => {
    render(<ProductCard {...mockProduct} />);
    
    // Verificar imagen
    const image = screen.getByTestId('image-view');
    expect(image).toHaveAttribute('src', mockProduct.image);
    expect(image).toHaveAttribute('alt', 'imgProduct');
    
    // Verificar título
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    
    // Verificar categoría
    expect(screen.getByText(mockProduct.category)).toBeInTheDocument();
    
    // Verificar precio (chip)
    expect(screen.getByTestId('chip')).toHaveTextContent(mockProduct.price.toString());
    
    // Verificar descripción
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
  });

  it('debe llamar al router con la ruta correcta al hacer click', () => {
    render(<ProductCard {...mockProduct} />);
    
    const card = screen.getByTestId('product-card'); // O el elemento contenedor apropiado
    fireEvent.click(card);
    
    expect(mockPush).toHaveBeenCalledWith(ROUTES.DETAIL(String(mockProduct.id)));
  });

  it('debe usar wordShortener para el título y descripción', () => {
    // Configurar mock para wordShortener
    (wordShortener as jest.Mock)
      .mockImplementationOnce((text) => text.slice(0, 20) + '...') // Para el título
      .mockImplementationOnce((text) => text.slice(0, 120) + '...'); // Para la descripción
    
    render(<ProductCard {...mockProduct} />);
    
    expect(wordShortener).toHaveBeenCalledWith(mockProduct.title, 20);
    expect(wordShortener).toHaveBeenCalledWith(mockProduct.description, 120);
    
    // Verificar que se muestra el texto acortado
    const shortenedTitle = mockProduct.title.slice(0, 20) + '...';
    const shortenedDesc = mockProduct.description.slice(0, 120) + '...';
    
    expect(screen.getByText(shortenedTitle)).toBeInTheDocument();
    expect(screen.getByText(shortenedDesc)).toBeInTheDocument();
  });

  it('debe tener las clases CSS correctas', () => {
    const { container } = render(<ProductCard {...mockProduct} />);
    
    // Contenedor principal
    const card = container.firstChild;
    expect(card).toHaveClass(
      'flex',
      'flex-col',
      'justify-between',
      'w-[250px]',
      'h-[350px]',
      'bg-white',
      'm-[20px]',
      'rounded-lg',
      'cursor-pointer',
      'shadow-md'
    );
    
    // Sección de imagen
    const imageSection = screen.getByRole('img').parentElement;
    expect(imageSection).toHaveClass(
      'flex',
      'justify-center',
      'items-center',
      'w-full',
      'pt-5'
    );
  });

  it('debe renderizar el componente Chip con el precio correcto', () => {
    render(<ProductCard {...mockProduct} />);
    
    const chip = screen.getByTestId('chip');
    expect(chip).toHaveTextContent(mockProduct.price.toString());
  });
});