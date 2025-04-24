import { render, screen, fireEvent } from '@testing-library/react';
import DetailCard from '@/app/organims/detail-product-card/detail-product-card';
import { Product } from '@/shared/models/products/products';

// Mock de los componentes hijos
jest.mock('@/app/atoms/button/button', () => 
  ({ text, onClickUpdate }: { text: string; onClickUpdate: (e: React.MouseEvent<HTMLButtonElement>) => void }) => (
    <button data-testid="update-button" onClick={onClickUpdate}>
      {text}
    </button>
  )
);

jest.mock('@/app/atoms/chip/chip', () => 
  ({ text }: { text: string }) => <div data-testid="chip">{text}</div>
);

describe('DetailCard Component', () => {
  const mockProduct: Product = {
    id: 1,
    title: 'Producto de Prueba',
    price: 99.99,
    description: 'Descripción detallada del producto',
    category: 'Electrónica',
    image: 'imagen.jpg'
  };

  const mockOnClickUpdate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debe renderizar correctamente todas las propiedades del producto', () => {
    render(<DetailCard product={mockProduct} onClickUpdate={mockOnClickUpdate} />);
    
    // Verificar título
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    
    // Verificar categoría
    expect(screen.getByText(mockProduct.category)).toBeInTheDocument();
    
    // Verificar precio (chip)
    const chipElement = screen.getByTestId('chip');
    expect(chipElement).toHaveTextContent(mockProduct.price.toString());
    
    // Verificar descripción
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    
    // Verificar botón
    expect(screen.getByTestId('update-button')).toHaveTextContent('Actualizar');
  });

  it('debe llamar onClickUpdate cuando se hace clic en el botón', () => {
    render(<DetailCard product={mockProduct} onClickUpdate={mockOnClickUpdate} />);
    
    const button = screen.getByTestId('update-button');
    fireEvent.click(button);
    
    expect(mockOnClickUpdate).toHaveBeenCalledTimes(1);
  });

  it('debe tener las clases CSS correctas', () => {
    const { container } = render(<DetailCard product={mockProduct} onClickUpdate={mockOnClickUpdate} />);
    
    // Contenedor principal
    const mainDiv = container.firstChild;
    expect(mainDiv).toHaveClass('sm:flex ','w-auto', 'md:w-[860px]', 'max-w-4xl ','h-auto', 'min-h-96');
    
    // Título
    expect(screen.getByText(mockProduct.title)).toHaveClass('text-black', 'text-2xl');
  });

});