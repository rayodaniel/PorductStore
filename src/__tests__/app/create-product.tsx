import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ROUTES from '@/shared/providers/routers';
import Create from '@/app/templates/create-product/create-product';
import { mockCreate } from '@/__mocks__/next/router';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(() => ({
        push: jest.fn(),
        replace: jest.fn(),
        refresh: jest.fn(),
    })),
}));

jest.mock('next/image');

describe('Create Component', () => {
    const mockPush = jest.fn();

    beforeEach(() => {
        (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
        jest.mock('@/core/repositories/products/useProductsRepository', () => ({
            useProductsRepository: () => ({
                mockCreate: jest.fn(() => ({
                    then: jest.fn((callback: any) => {
                        callback({ success: true });
                        return {
                            catch: jest.fn(),
                            finally: jest.fn((finallyCallback: any) => {
                                finallyCallback();
                            }),
                        };
                    }),
                    catch: jest.fn(),
                    finally: jest.fn(),
                })),
            }),
        }));
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders the Create component correctly', () => {
        render(<Create />);
        expect(screen.getByRole('button')).toBeInTheDocument(); // Assuming the form has a submit button
    });

    it('updates the image when onChangeImg is triggered', async () => {
        await act(async () => {
            render(<Create />);
        });

        const input = screen.getByTestId('image-url');
        await act(async () => {
            fireEvent.change(input, {
                target: {
                    value:
                        'https://images.pexels.com/photos/31557354/pexels-photo-31557354.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                },
            });
        });

        const image = screen.getByTestId('image-view');
        expect(image).toHaveAttribute(
            'src',
            'https://images.pexels.com/photos/31557354/pexels-photo-31557354.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        );
    });

    it('calls createProduct and validate error', async () => {
        await act(async () => {
            render(<Create />);
        });

        const submitButton = screen.getByTestId('button-submit'); // Assuming the form has a submit button

        await act(async () => {
            fireEvent.click(submitButton);
        });

        const requiredMessages = screen.getAllByText(/requerido|required/i);
        expect(requiredMessages.length).toBeGreaterThan(0);
    });

    it('calls createProduct and success create', async () => {
        const mockPush = jest.fn();
        (useRouter as jest.Mock).mockReturnValue({ push: mockPush });

        await act(async () => {
            render(<Create />);
        });

        const submitButton = screen.getByTestId('button-submit'); // Assuming the form has a submit button
        const inputTitle = screen.getByTestId('title');
        const inputPrice = screen.getByTestId('price');
        const inputDescription = screen.getByTestId('description');
        const inputCategory = screen.getByTestId('category');
        const inputImg = screen.getByTestId('image-url');

        await act(async () => {
            fireEvent.change(inputTitle, { target: { value: 'Test Product' } });
            fireEvent.change(inputPrice, { target: { value: '100' } });
            fireEvent.change(inputDescription, { target: { value: 'Test Description ' } });
            fireEvent.change(inputCategory, { target: { value: 'Test Category' } });
            fireEvent.change(inputImg, {
                target: {
                    value:
                        'https://images.pexels.com/photos/31557354/pexels-photo-31557354.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                },
            });
        });

        await act(async () => {
            fireEvent.click(submitButton);
        });


    });
});
