export const router = jest.mock('next/navigation', () => ({
    useRouter: jest.fn(() => ({
      push: jest.fn(),
      replace: jest.fn(),
      refresh: jest.fn()
    }))
  }));


export   const mockCreate = jest.fn(() => ({
    // Simulamos una Promise que tiene método finally
    then: jest.fn().mockImplementation((callback) => {
      callback({ success: true });
      return {
        catch: jest.fn(),
        finally: jest.fn((finallyCallback) => {
          finallyCallback();
          return this;
        })
      };
    }),
    catch: jest.fn(),
    finally: jest.fn()
  }));
  
  exports = {
    useProductsRepository: () => ({
      create: mockCreate
    }),
    mockCreate
  };