import { productSchema } from '@/shared/providers/validatorsForm';
import {SubmitHandler } from 'react-hook-form';
import * as z from 'zod';

export type ProductFormData = z.infer<typeof productSchema>;

export interface ProductFormProps {
  initialData?: ProductFormData;
  onSubmit: SubmitHandler<ProductFormData>;
  onChangeImg?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading?: boolean;
}