import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { productSchema } from '@/shared/providers/validatorsForm';
import { ProductFormData } from '@/shared/models/organims/organims';
import { CreateProductForm } from '@/app/organims/form-create-product/form-create-product';

// Mock de zodResolver y productSchema
jest.mock('@hookform/resolvers/zod');
jest.mock('@/shared/providers/validatorsForm', () => ({
  productSchema: {
    parse: jest.fn(),
    safeParse: jest.fn().mockImplementation((data) => ({ success: true, data })),
  },
}));

describe('CreateProductForm', () => {
  const mockOnSubmit = jest.fn();
  const mockOnChangeImg = jest.fn();
  const initialData = {
    id: 1,
    title: 'Producto existente',
    price: 99.99,
    description: 'Descripción existente',
    category: 'Electrónica',
    image: 'imagen-existente.jpg',
  };

  beforeEach(() => {
    (zodResolver as jest.Mock).mockReturnValue(jest.fn());
    jest.clearAllMocks();
  });

  it('debe renderizar correctamente con valores por defecto', () => {
    render(<CreateProductForm onSubmit={mockOnSubmit} />);

    expect(screen.getByTestId('title')).toHaveValue('');
    expect(screen.getByTestId('price')).toHaveValue(0.1);
    expect(screen.getByTestId('description')).toHaveValue('');
    expect(screen.getByTestId('category')).toHaveValue('');
    expect(screen.getByTestId('image-url')).toHaveValue('');
  });

  it('debe cargar datos iniciales cuando se proporcionan', () => {
    render(<CreateProductForm initialData={initialData} onSubmit={mockOnSubmit} />);

    expect(screen.getByTestId('title')).toHaveValue(initialData.title);
    expect(screen.getByTestId('price')).toHaveValue(initialData.price);
    expect(screen.getByTestId('description')).toHaveValue(initialData.description);
    expect(screen.getByTestId('category')).toHaveValue(initialData.category);
    expect(screen.getByTestId('image-url')).toHaveValue(initialData.image);
  });

  it('debe llamar onSubmit con los datos correctos', async () => {
    render(<CreateProductForm onSubmit={mockOnSubmit} />);

    const title = screen.getByTestId('title');
    const price = screen.getByTestId('price');
    const description = screen.getByTestId('description');
    const category = screen.getByTestId('category');
    const imageUrl = screen.getByTestId('image-url');

    await act(async () => {
      // Simular entrada de datos
      fireEvent.change(title, { target: { value: 'Nuevo producto' } });
      fireEvent.change(price, { target: { value: '199.99' } });
      fireEvent.change(description, { target: { value: 'Nueva descripción' } });
      fireEvent.change(category, { target: { value: 'Hogar' } });
      fireEvent.change(imageUrl, { target: { value: 'nueva-imagen.jpg' } });
    });

    await waitFor(() => {
      expect(imageUrl).toHaveValue('nueva-imagen.jpg');
      expect(title).toHaveValue('Nuevo producto');
      expect(price).toHaveValue(199.99);
      expect(description).toHaveValue('Nueva descripción');
      expect(category).toHaveValue('Hogar');
    });

    // Enviar formulario
    fireEvent.click(screen.getByTestId('button-submit'));
  });

  it('debe llamar onChangeImg cuando cambia la imagen', async () => {
    render(<CreateProductForm onSubmit={mockOnSubmit} onChangeImg={mockOnChangeImg} />);

    const newImageUrl = 'https://example.com/nueva-imagen.jpg';
    fireEvent.change(screen.getByTestId('image-url'), { target: { value: newImageUrl } });

    expect(mockOnChangeImg).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: newImageUrl }),
      })
    );
  });

  it('debe deshabilitar el botón cuando isLoading es true', () => {
    render(<CreateProductForm onSubmit={mockOnSubmit} isLoading={true} />);

    const submitButton = screen.getByTestId('button-submit');
    expect(submitButton).toBeDisabled();
    expect(submitButton).toHaveClass('disabled:opacity-50');
    expect(submitButton).toHaveClass('disabled:cursor-not-allowed');
  });
});
