import * as z from 'zod';

/**
 * Schema definition for validating a product object using Zod.
 * 
 * This schema ensures that the product object adheres to the following rules:
 * 
 * - `id`: Must be a number.
 * - `title`: Must be a string with a minimum length of 1 character and a maximum length of 25 characters.
 *   - Error messages:
 *     - "El título es requerido" if the title is empty.
 *     - "El título no puede exceder los 25 caracteres" if the title exceeds 25 characters.
 * - `price`: Must be a number with a minimum value of 0.1.
 *   - Error message:
 *     - "El precio mínimo es 0.1" if the price is less than 0.1.
 * - `description`: Must be a string with a minimum length of 10 characters and a maximum length of 150 characters.
 *   - Error messages:
 *     - "La descripción debe tener al menos 10 caracteres" if the description is too short.
 *     - "La descripción no puede exceder los 150 caracteres" if the description is too long.
 * - `category`: Must be a string with a minimum length of 1 character and a maximum length of 20 characters.
 *   - Error messages:
 *     - "La categoría es requerida" if the category is empty.
 *     - "La categoría no puede exceder los 20 caracteres" if the category exceeds 20 characters.
 * - `image`: Must be a valid URL string.
 *   - Error message:
 *     - "Debe ser una URL válida" if the image is not a valid URL.
 */
export const productSchema = z.object({
    id: z.number(),
    title: z.string().min(1, 'El título es requerido').max(25, 'El título no puede exceder los 25 caracteres'),
    price: z.number().min(0.1, 'El precio mínimo es 0.1'),
    description: z.string().min(10, 'La descripción debe tener al menos 10 caracteres').max(150, 'La descripción no puede exceder los 150 caracteres'),
    category: z.string().min(1, 'La categoría es requerida').max(20, 'La categoría no puede exceder los 20 caracteres'),
    image: z.string().url('Debe ser una URL válida')
  });