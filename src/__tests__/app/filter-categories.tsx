import { render, screen, act } from '@testing-library/react';
import { useProductsRepository } from '@/core/repositories/products/useProductsRepository';
import { BehaviorSubject } from 'rxjs';
import { Categories } from '@/shared/models/products/products';
import FilterCategories from '@/app/organims/filter-categories/filter-categories';

// Mock del componente CheckLabel
jest.mock('@/app/molecules/check-label/check-label', () => 
  ({ text, onChangecheck }: { text: string; onChangecheck: (check: boolean, name: string) => void }) => (
    <button 
      data-testid={`check-label-${text}`}
      onClick={() => onChangecheck(true, text)}
    >
      {text}
    </button>
  )
);

// Mock del repositorio
jest.mock('@/core/repositories/products/useProductsRepository');

describe('FilterCategories Component', () => {
  let categoriesSubject: BehaviorSubject<{ category: Categories[] }>;
  const mockAddFilterCategory = jest.fn();
  const mockDeleteFilterCategory = jest.fn();
  const mockGetProductsObservable = jest.fn();

  const testCategories: Categories[] = [
    { category: 'Electrónica'},
    { category: 'Ropa' },
    { category: 'Hogar'}
  ];

  beforeEach(() => {
    categoriesSubject = new BehaviorSubject<{ category: Categories[] }>({ category: [] });
    mockGetProductsObservable.mockReturnValue(categoriesSubject);
    
    (useProductsRepository as jest.Mock).mockImplementation(() => ({
      getProductsObservable: mockGetProductsObservable,
      addFilterCategory: mockAddFilterCategory,
      deleteFilterCategory: mockDeleteFilterCategory
    }));

    jest.clearAllMocks();
  });

  it('debe suscribirse al observable al montar', () => {
    render(<FilterCategories />);
    expect(mockGetProductsObservable).toHaveBeenCalledTimes(1);
  });

  it('debe mostrar las categorías recibidas', async () => {
    render(<FilterCategories />);
    
    // Actuar con la emisión de categorías
    await act(() => {
      categoriesSubject.next({ category: testCategories });
    });

    // Verificar que todas las categorías se renderizan
    testCategories.forEach((cat) => {
      expect(screen.getByTestId(`check-label-${cat.category}`)).toBeInTheDocument();
    });
  });

  it('debe llamar a addFilterCategory cuando se selecciona una categoría', async () => {
    render(<FilterCategories />);
    
    await act(() => {
      categoriesSubject.next({ category: testCategories });
    });

    // Simular selección de categoría
    const electronicCategory = screen.getByTestId('check-label-Electrónica');
    await act(() => {
      electronicCategory.click();
    });

    expect(mockAddFilterCategory).toHaveBeenCalledWith('Electrónica');
  });

  it('debe limpiar la suscripción al desmontar', () => {
    const { unmount } = render(<FilterCategories />);
    expect(categoriesSubject.observers.length).toBe(1);
    
    unmount();
    expect(categoriesSubject.observers.length).toBe(0);
  });

  it('no debe romperse si el observable emite datos sin categorías', async () => {
    render(<FilterCategories />);
    
    await act(() => {
      categoriesSubject.next({} as any); // Datos inválidos
    });

    // No debería haber check-labels renderizados
    expect(screen.queryAllByTestId(/checkbox-/)).toHaveLength(0);
  });
});