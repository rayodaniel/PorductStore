import { render, screen, act } from '@testing-library/react';
import { useProductsRepository } from '@/core/repositories/products/useProductsRepository';
import { adapterProductByCategory } from '@/shared/providers/filterProducts';
import { BehaviorSubject } from 'rxjs';
import { Product } from '@/shared/models/products/products';
import ContainerCards from '@/app/organims/container-cards/container-cards';

// Mocks
jest.mock('@/core/repositories/products/useProductsRepository');
jest.mock('@/shared/providers/filterProducts');
jest.mock('@/app/organims/product-card/product-card', () => 
  (props: Product) => <div data-testid={`product-card-${props.id}`}>{props.title}</div>
);

describe('ContainerCards Component', () => {
  let productsSubject: BehaviorSubject<any>;
  const mockGetProductsObservable = jest.fn();
  const mockAdapter = jest.fn();

  const mockProducts: Product[] = [
    { id: 1, title: 'Producto 1', category: 'Electrónica', price: 100, description: 'Desc 1', image: 'img1.jpg' },
    { id: 2, title: 'Producto 2', category: 'Ropa', price: 200, description: 'Desc 2', image: 'img2.jpg' }
  ];

  beforeEach(() => {
    productsSubject = new BehaviorSubject({ 
      product: mockProducts,
      filterCategories: []
    });
    
    mockGetProductsObservable.mockReturnValue(productsSubject);
    mockAdapter.mockImplementation((products) => products); // Por defecto no filtra
    
    (useProductsRepository as jest.Mock).mockImplementation(() => ({
      getProductsObservable: mockGetProductsObservable
    }));
    
    (adapterProductByCategory as jest.Mock).mockImplementation(mockAdapter);
    
    jest.clearAllMocks();
  });

  it('debe suscribirse al observable al montar', () => {
    render(<ContainerCards />);
    expect(mockGetProductsObservable).toHaveBeenCalledTimes(1);
  });

  it('debe renderizar productos correctamente', async () => {
    render(<ContainerCards />);
    
    // Actuar con la emisión de productos
    await act(() => {
      productsSubject.next({ 
        product: mockProducts,
        filterCategories: []
      });
    });

    // Verificar que todas las tarjetas se renderizan
    mockProducts.forEach(product => {
      expect(screen.getByTestId(`product-card-${product.id}`)).toBeInTheDocument();
      expect(screen.getByText(product.title)).toBeInTheDocument();
    });
  });

  it('debe aplicar el adaptador de categorías', async () => {
    const filteredProducts = [mockProducts[0]]; // Solo electrónica
    mockAdapter.mockReturnValue(filteredProducts);
    
    render(<ContainerCards />);
    
    await act(() => {
      productsSubject.next({ 
        product: mockProducts,
        filterCategories: ['Electrónica']
      });
    });

    // Verificar que solo se renderiza el producto filtrado
    expect(screen.getByTestId('product-card-1')).toBeInTheDocument();
    expect(screen.queryByTestId('product-card-2')).not.toBeInTheDocument();
    
    // Verificar que se llamó al adaptador
    expect(mockAdapter).toHaveBeenCalledWith(mockProducts, ['Electrónica']);
  });

  it('debe limpiar la suscripción al desmontar', () => {
    const { unmount } = render(<ContainerCards />);
    expect(productsSubject.observers.length).toBe(1);
    
    unmount();
    expect(productsSubject.observers.length).toBe(0);
  });

  it('debe mostrar grid responsive correctamente', () => {
    const { container } = render(<ContainerCards />);
    
    const grid = container.firstChild;
    expect(grid).toHaveClass('grid');
    expect(grid).toHaveClass('grid-cols-1');
    expect(grid).toHaveClass('md:grid-cols-3');
    expect(grid).toHaveClass('lg:grid-cols-4');
    expect(grid).toHaveClass('xl:grid-cols-4');
    expect(grid).toHaveClass('2xl:grid-cols-6');
  });

  it('no debe romperse si el observable emite datos vacíos', async () => {
    render(<ContainerCards />);
    
    await act(() => {
      productsSubject.next({ 
        product: [],
        filterCategories: []
      });
    });

    // No debería haber tarjetas renderizadas
    expect(screen.queryAllByTestId(/product-card-/)).toHaveLength(0);
  });
});