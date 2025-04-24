/**
 * An object containing route definitions for the application.
 * 
 * @property {string} HOME - The route for the home dashboard page.
 * @property {string} CREATE - The route for the create product page.
 * @property {(id: string) => string} DETAIL - A function that generates the route for the detail product page, 
 *                                            given a specific product ID.
 */
const ROUTES = {
    HOME: '/dasboard/home',
    CREATE: '/dasboard/create-product',
    DETAIL: (id: string) => `/dasboard/detail-product/${id}`,
};

export default ROUTES;