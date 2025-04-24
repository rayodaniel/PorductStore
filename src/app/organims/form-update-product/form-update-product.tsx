import { ProductFormData, ProductFormProps } from '@/shared/models/organims/organims';
import { productSchema } from '@/shared/providers/validatorsForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';



export function UpdateProductForm({ initialData, onSubmit, isLoading }: ProductFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: initialData || {
      id: 0,
      title: '',
      price: 0.1,
      description: '',
      category: '',
      image: ''
    }
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  return (
    <div className='md:w-[370px] w-[100%] px-7'>

    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register('id')} />

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Título del producto
        </label>
        <input type="text" id="first_name" className=" " />
        <input
          id="title"
          type="text"
          {...register('title')}
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
            errors.title ? 'border-red-500' : 'border'
          }`}
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
          Precio
        </label>
        <input
          id="price"
          type="number"
          step="0.01"
          {...register('price', { valueAsNumber: true })}
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
            errors.price ? 'border-red-500' : 'border'
          }`}
        />
        {errors.price && (
          <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Descripción
        </label>
        <textarea
          id="description"
          rows={4}
          {...register('description')}
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
            errors.description ? 'border-red-500' : 'border'
          }`}
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          Categoría
        </label>
        <input
          id="category"
          {...register('category')}
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
            errors.category ? 'border-red-500' : 'border'
          }`}
        />
        {errors.category && (
          <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          URL de la imagen
        </label>
        <input
          id="image"
          type="url"
          {...register('image')}
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
            errors.image ? 'border-red-500' : 'border'
          }`}
        />
        {errors.image && (
          <p className="mt-1 text-sm text-red-600">{errors.image.message}</p>
        )}
      </div>

      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex mt-1.5 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            Guardar cambios
        </button>
      </div>
    </form>
    </div>

  );
}