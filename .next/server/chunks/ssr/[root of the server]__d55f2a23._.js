module.exports = {

"[project]/src/app/atoms/checkbox/checkbox.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Checkbox)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function Checkbox({ onChangecheck, id }) {
    const [isChecked, setIsChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleCheckboxChange = (e)=>{
        setIsChecked(e.target.checked);
        onChangecheck(e.target.checked);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        id: `checkbox-${id}`,
        "data-testid": `checkbox-${id}`,
        type: "checkbox",
        checked: isChecked,
        onChange: handleCheckboxChange,
        className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-0"
    }, void 0, false, {
        fileName: "[project]/src/app/atoms/checkbox/checkbox.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/atoms/label/label.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Label({ text, id }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        htmlFor: `checkbox-${id}`,
        "data-testid": `checkbox-${id}`,
        className: "w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300",
        children: text
    }, void 0, false, {
        fileName: "[project]/src/app/atoms/label/label.tsx",
        lineNumber: 3,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/app/molecules/check-label/check-label.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CheckLabel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$atoms$2f$checkbox$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/atoms/checkbox/checkbox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$atoms$2f$label$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/atoms/label/label.tsx [app-ssr] (ecmascript)");
;
;
;
function CheckLabel({ text, id, onChangecheck }) {
    const handelChange = (checked)=>{
        onChangecheck(checked, text);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "</ul>w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center ps-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$atoms$2f$checkbox$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onChangecheck: (check)=>handelChange(check),
                        id: id
                    }, void 0, false, {
                        fileName: "[project]/src/app/molecules/check-label/check-label.tsx",
                        lineNumber: 12,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$atoms$2f$label$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        text: text,
                        id: id
                    }, void 0, false, {
                        fileName: "[project]/src/app/molecules/check-label/check-label.tsx",
                        lineNumber: 13,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/molecules/check-label/check-label.tsx",
                lineNumber: 11,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/molecules/check-label/check-label.tsx",
            lineNumber: 10,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/molecules/check-label/check-label.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[project]/src/core/apis/products/useProductsApi.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useProductsApi": (()=>useProductsApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)"); // Importa desde el mismo módulo
;
const baseApi = ("TURBOPACK compile-time value", "https://fakestoreapi.com") || "https://fakestoreapi.com";
const useProductsApi = ()=>{
    /**
   * Fetches a list of products from the API.
   * 
   * @returns {Promise<ApiResponse<Product[]>>} A promise that resolves to the API response containing an array of products.
   */ const listProduct = ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${baseApi}/products`);
    };
    /**
   * Fetches a single product by its ID from the API.
   * 
   * @param {number} id - The ID of the product to fetch.
   * @returns {Promise<ApiResponse<Product>>} A promise that resolves to the API response containing the product.
   */ const getProductById = (id)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${baseApi}/products/${id}`);
    };
    /**
   * Creates a new product in the API.
   * 
   * @param {Product} product - The product data to create.
   * @returns {Promise<ApiResponse<Product>>} A promise that resolves to the API response containing the created product.
   */ const create = (product)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${baseApi}/products`, product);
    };
    /**
   * Updates an existing product in the API.
   * 
   * @param {number} id - The ID of the product to update.
   * @param {Product} product - The updated product data.
   * @returns {Promise<ApiResponse<Product>>} A promise that resolves to the API response containing the updated product.
   */ const update = (id, product)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`${baseApi}/products/${id}`, product);
    };
    return {
        listProduct,
        getProductById,
        create,
        update
    };
};
}}),
"[project]/src/core/apis/index.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/src/core/apis/index.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$apis$2f$products$2f$useProductsApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/apis/products/useProductsApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$apis$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/core/apis/index.ts [app-ssr] (ecmascript) <locals>");
}}),
"[project]/src/core/state/products/useProductsState.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "initialState": (()=>initialState),
    "useProductsObservable": (()=>useProductsObservable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rxjs/dist/cjs/index.js [app-ssr] (ecmascript)");
;
const initialState = {
    product: [],
    productById: {},
    category: [],
    filterCategories: [],
    listing: false,
    load: false,
    creating: false,
    updating: false,
    removing: false,
    error: ""
};
const todoSubject = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BehaviorSubject"](initialState);
const useProductsObservable = ()=>{
    /**
   * Updates the state with a list of products.
   * @param product - Array of products to set in the state.
   */ const listProduct = (product)=>{
        setNextState({
            product,
            error: ""
        });
    };
    /**
   * Updates the state with a single product by its ID.
   * @param product - The product to set in the state.
   */ const productById = (product)=>{
        setNextState({
            productById: product,
            error: ""
        });
    };
    /**
   * Updates the state with a list of categories.
   * @param category - Array of categories to set in the state.
   */ const categories = (category)=>{
        setNextState({
            category,
            error: ""
        });
    };
    /**
   * Removes a category from the filter categories in the state.
   * @param name - The name of the category to remove.
   */ const deleteFilterCategories = (name)=>{
        const filterCategories = [
            ...todoSubject.getValue().filterCategories
        ].filter((category)=>category.category !== name);
        setNextState({
            filterCategories,
            error: ""
        });
    };
    /**
   * Adds a category to the filter categories in the state.
   * @param name - The name of the category to add.
   */ const addFilterCategories = (name)=>{
        const filterCategories = [
            ...todoSubject.getValue().filterCategories,
            {
                category: name
            }
        ];
        setNextState({
            filterCategories,
            error: ""
        });
    };
    /**
   * Updates the state to indicate whether products are being listed.
   * @param flag - Boolean flag indicating the listing state.
   */ const listing = (flag)=>{
        setNextState({
            listing: flag
        });
    };
    /**
   * Updates the state to indicate whether the application is loading.
   * @param flag - Boolean flag indicating the loading state.
   */ const load = (flag)=>{
        setNextState({
            load: flag
        });
    };
    /**
   * Adds a new product to the state.
   * @param newProduct - The new product to add.
   */ const create = (newProduct)=>{
        const product = [
            ...todoSubject.getValue().product,
            newProduct
        ];
        setNextState({
            product,
            error: ""
        });
    };
    /**
   * Updates the state to indicate whether a product is being created.
   * @param flag - Boolean flag indicating the creating state.
   */ const creating = (flag)=>{
        setNextState({
            creating: flag
        });
    };
    /**
   * Updates a product in the state by its ID.
   * @param id - The ID of the product to update.
   * @param productUpdate - The updated product data.
   */ const update = (id, productUpdate)=>{
        let product = [
            ...todoSubject.getValue().product
        ];
        const updateListProduct = product.map((item)=>{
            if (item.id === id) {
                return {
                    ...productUpdate
                };
            }
            return item;
        });
        console.log("updateListProduct", updateListProduct);
        setNextState({
            productById: productUpdate,
            product: updateListProduct,
            error: ""
        });
    };
    /**
   * Updates the state to indicate whether a product is being updated.
   * @param flag - Boolean flag indicating the updating state.
   */ const updating = (flag)=>{
        setNextState({
            updating: flag
        });
    };
    /**
   * Updates the state with an error message.
   * @param message - The error message to set.
   */ const error = (message)=>{
        setNextState({
            error: message
        });
    };
    /**
   * Updates the state with the provided payload.
   * @param payload - The payload to merge into the current state.
   */ const setNextState = (payload)=>{
        const state = todoSubject.getValue();
        todoSubject.next({
            ...state,
            ...payload
        });
    };
    const getObservable = ()=>{
        return todoSubject;
    };
    return {
        listProduct,
        load,
        productById,
        categories,
        deleteFilterCategories,
        addFilterCategories,
        listing,
        create,
        creating,
        update,
        updating,
        error,
        getObservable
    };
};
}}),
"[project]/src/shared/handle-axios/handle-axiosApi.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "handleAxiosApi": (()=>handleAxiosApi)
});
async function handleAxiosApi(axiosPromises) {
    axiosPromises = Array.isArray(axiosPromises) ? axiosPromises : [
        axiosPromises
    ];
    if (axiosPromises.length === 1) {
        const { data } = await axiosPromises[0];
        return data;
    }
    return Promise.all(axiosPromises.map(async (promise)=>{
        const { data } = await promise;
        return data;
    }));
}
}}),
"[project]/src/shared/providers/categories.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "adapterAllCategories": (()=>adapterAllCategories)
});
function adapterAllCategories(products) {
    const categories = products.reduce((acc, product)=>{
        const existingCategory = acc.find((item)=>item.category === product.category);
        if (!existingCategory) {
            acc.push({
                category: product.category
            });
        }
        return acc;
    }, []);
    console.log("categories", categories);
    return categories;
}
}}),
"[project]/src/core/repositories/products/useProductsRepository.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useProductsRepository": (()=>useProductsRepository)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$apis$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/core/apis/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$apis$2f$products$2f$useProductsApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/apis/products/useProductsApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$state$2f$products$2f$useProductsState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/state/products/useProductsState.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$handle$2d$axios$2f$handle$2d$axiosApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/handle-axios/handle-axiosApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$categories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/providers/categories.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const useProductsRepository = ()=>{
    const todoApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$apis$2f$products$2f$useProductsApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProductsApi"])();
    const todoObservable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$state$2f$products$2f$useProductsState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProductsObservable"])();
    /**
   * Fetches the list of products from the API and updates the observable state.
   * @async
   * @throws {AxiosError} If the API call fails.
   */ const listProduct = async ()=>{
        try {
            todoObservable.listing(true);
            const product = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$handle$2d$axios$2f$handle$2d$axiosApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleAxiosApi"])(todoApi.listProduct());
            todoObservable.categories((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$categories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adapterAllCategories"])(product));
            todoObservable.listProduct(product);
        } catch (error) {
            todoObservable.error(error.message);
        } finally{
            todoObservable.listing(false);
        }
    };
    /**
   * Fetches a product by its ID from the API and updates the observable state.
   * @async
   * @param {number} id - The ID of the product to fetch.
   * @throws {AxiosError} If the API call fails.
   */ const getProductById = async (id)=>{
        try {
            todoObservable.load(true);
            const product = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$handle$2d$axios$2f$handle$2d$axiosApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleAxiosApi"])(todoApi.getProductById(id));
            todoObservable.productById(product);
        } catch (error) {
            todoObservable.load(false);
            todoObservable.error(error.message);
        } finally{
            todoObservable.load(false);
        }
    };
    /**
   * Deletes a filter category by its name and updates the observable state.
   * @async
   * @param {string} name - The name of the category to delete.
   * @throws {AxiosError} If the operation fails.
   */ const deleteFilterCategory = async (name)=>{
        try {
            todoObservable.listing(true);
            await todoObservable.deleteFilterCategories(name);
        } catch (error) {
            todoObservable.error(error.message);
        } finally{
            todoObservable.listing(false);
        }
    };
    /**
   * Adds a filter category by its name and updates the observable state.
   * @async
   * @param {string} name - The name of the category to add.
   * @throws {AxiosError} If the operation fails.
   */ const addFilterCategory = async (name)=>{
        try {
            todoObservable.listing(true);
            await todoObservable.addFilterCategories(name);
        } catch (error) {
            todoObservable.error(error.message);
        } finally{
            todoObservable.listing(false);
        }
    };
    /**
   * Creates a new product and updates the observable state.
   * @async
   * @param {Product} product - The product to create.
   * @throws {AxiosError} If the API call fails.
   */ const create = async (product)=>{
        try {
            todoObservable.creating(true);
            const createdTodo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$handle$2d$axios$2f$handle$2d$axiosApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleAxiosApi"])(todoApi.create(product));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('¡Producto creado correctamente!', {
                position: "top-right",
                autoClose: 3000
            });
            todoObservable.create(createdTodo);
        } catch (error) {
            todoObservable.error(error.message);
        } finally{
            todoObservable.creating(false);
        }
    };
    /**
   * Updates an existing product by its ID and updates the observable state.
   * @async
   * @param {number} id - The ID of the product to update.
   * @param {Product} product - The updated product data.
   * @throws {AxiosError} If the API call fails.
   */ const update = async (id, product)=>{
        try {
            todoObservable.updating(true);
            const updatedProduct = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$handle$2d$axios$2f$handle$2d$axiosApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleAxiosApi"])(todoApi.update(id, product));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('¡Producto actualizado correctamente!', {
                position: "top-right",
                autoClose: 3000
            });
            todoObservable.update(id, updatedProduct);
        } catch (error) {
            todoObservable.error(error.message);
        } finally{
            todoObservable.updating(false);
        }
    };
    /**
   * Retrieves the observable state for products.
   * @returns {Observable} The observable state for products.
   */ const getProductsObservable = ()=>todoObservable.getObservable();
    return {
        listProduct,
        getProductById,
        deleteFilterCategory,
        addFilterCategory,
        create,
        update,
        getProductsObservable
    };
};
}}),
"[project]/src/app/organims/filter-categories/filter-categories.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FilterCategories)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$molecules$2f$check$2d$label$2f$check$2d$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/molecules/check-label/check-label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$repositories$2f$products$2f$useProductsRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/repositories/products/useProductsRepository.ts [app-ssr] (ecmascript)");
;
;
;
;
function FilterCategories() {
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const subscription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$repositories$2f$products$2f$useProductsRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProductsRepository"])().getProductsObservable().subscribe((value)=>{
            setCategory(value.category);
        });
        return ()=>subscription.unsubscribe();
    }, []);
    const handleChange = (check, name)=>{
        const repository = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$repositories$2f$products$2f$useProductsRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProductsRepository"])();
        check ? repository.addFilterCategory(name) : repository.deleteFilterCategory(name);
    };
    if (!category) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: " grid  md:grid-cols-4 place-items-center justify-around gap-4 mt-10",
        children: category.map((cat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$molecules$2f$check$2d$label$2f$check$2d$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                text: cat.category,
                id: cat.category,
                onChangecheck: (check, name)=>handleChange(check, name)
            }, index, false, {
                fileName: "[project]/src/app/organims/filter-categories/filter-categories.tsx",
                lineNumber: 32,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/organims/filter-categories/filter-categories.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/app/atoms/chip/chip.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Chip)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Chip({ text }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "bg-green-200 text-black rounded-sm p-0.5",
        children: [
            "$",
            text
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/atoms/chip/chip.tsx",
        lineNumber: 3,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/shared/providers/shorter.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "wordShortener": (()=>wordShortener)
});
const wordShortener = (paragraph, max)=>{
    const paragraphShortener = paragraph.slice(0, max);
    return `${paragraphShortener}...`;
};
}}),
"[project]/src/app/organims/product-card/product-card.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProductCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$atoms$2f$chip$2f$chip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/atoms/chip/chip.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$shorter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/providers/shorter.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$routers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/providers/routers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/layout.tsx [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$roboto_b6f019fa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__roboto$3e$__ = __turbopack_context__.i("[next]/internal/font/google/roboto_b6f019fa.js [app-ssr] (ecmascript) <export default as roboto>");
'use client';
;
;
;
;
;
;
;
function ProductCard({ id, image, title, category, price, description }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleCardClick = ()=>{
        router.push(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$routers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].DETAIL(String(id)));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-testid": "product-card",
        onClick: handleCardClick,
        className: "flex flex-col justify-between w-[250px] h-[350px] bg-white m-[20px] rounded-lg cursor-pointer shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "Image flex justify-center items-center w-full pt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: image,
                    alt: "imgProduct",
                    width: 50,
                    height: 100,
                    quality: 100,
                    "data-testid": "image-view",
                    style: {
                        objectFit: 'cover'
                    },
                    className: "w-auto rounded-lg",
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/src/app/organims/product-card/product-card.tsx",
                    lineNumber: 26,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/organims/product-card/product-card.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-auto flex flex-col gap-2 px-5 pb-7",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: `text-base ${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$roboto_b6f019fa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__roboto$3e$__["roboto"].variable} font-sans font-bold`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$shorter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wordShortener"])(title, 20)
                        }, void 0, false, {
                            fileName: "[project]/src/app/organims/product-card/product-card.tsx",
                            lineNumber: 41,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/organims/product-card/product-card.tsx",
                        lineNumber: 40,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "Size flex justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "Sex text-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: category
                                }, void 0, false, {
                                    fileName: "[project]/src/app/organims/product-card/product-card.tsx",
                                    lineNumber: 45,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/organims/product-card/product-card.tsx",
                                lineNumber: 44,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1 text-sm font-sans",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$atoms$2f$chip$2f$chip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    text: price.toString()
                                }, void 0, false, {
                                    fileName: "[project]/src/app/organims/product-card/product-card.tsx",
                                    lineNumber: 48,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/organims/product-card/product-card.tsx",
                                lineNumber: 47,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/organims/product-card/product-card.tsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "Price flex w-full h-[70px] my-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `text-xs ${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$roboto_b6f019fa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__roboto$3e$__["roboto"].variable} font-sans`,
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$shorter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wordShortener"])(description, 120)
                        }, void 0, false, {
                            fileName: "[project]/src/app/organims/product-card/product-card.tsx",
                            lineNumber: 52,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/organims/product-card/product-card.tsx",
                        lineNumber: 51,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/organims/product-card/product-card.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/organims/product-card/product-card.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/shared/providers/filterProducts.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "adapterProductByCategory": (()=>adapterProductByCategory)
});
function adapterProductByCategory(productsList, filterCategories) {
    if (filterCategories.length === 0) {
        return productsList;
    }
    return productsList.filter((product)=>filterCategories.some((category)=>product.category === category.category));
}
}}),
"[project]/src/app/organims/container-cards/container-cards.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ContainerCards)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$organims$2f$product$2d$card$2f$product$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/organims/product-card/product-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$repositories$2f$products$2f$useProductsRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/repositories/products/useProductsRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$filterProducts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/providers/filterProducts.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
function ContainerCards() {
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const subscription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$repositories$2f$products$2f$useProductsRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProductsRepository"])().getProductsObservable().subscribe((value)=>{
            setProducts((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$filterProducts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adapterProductByCategory"])(value.product, value.filterCategories));
        });
        return ()=>subscription.unsubscribe();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full h-auto grid grid-cols-1 place-items-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6",
        children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$organims$2f$product$2d$card$2f$product$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                ...product,
                key: product.id,
                __source: {
                    fileName: "[project]/src/app/organims/container-cards/container-cards.tsx",
                    lineNumber: 25,
                    columnNumber: 17
                },
                __self: this
            }))
    }, void 0, false, {
        fileName: "[project]/src/app/organims/container-cards/container-cards.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/shared/providers/colorButton.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "dictionaryColor": (()=>dictionaryColor)
});
const baseClasses = 'py-2.5 px-5 me-2 mb-2 mt-2.5 text-sm font-medium focus:outline-none rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-100';
/**
 * An object that defines CSS class strings for different button color themes.
 * Each property represents a color theme and contains a string of concatenated
 * CSS classes for styling buttons.
 *
 * @property {string} blue - CSS classes for a blue-themed button, including background,
 *                           text color, hover, and focus styles.
 * @property {string} white - CSS classes for a white-themed button, including background,
 *                            text color, hover, and focus styles.
 * @property {string} black - CSS classes for a black-themed button, including background,
 *                            text color, hover, and focus styles.
 */ const colorButton = {
    blue: `${baseClasses} bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500`,
    white: `${baseClasses} bg-black text-white hover:bg-gray-800 focus:ring-gray-500`,
    black: `${baseClasses} bg-white text-black hover:bg-gray-100 focus:ring-gray-500`
};
const dictionaryColor = (color)=>{
    return colorButton[color] || colorButton.white;
};
}}),
"[project]/src/app/atoms/button/button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Button)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$colorButton$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/providers/colorButton.ts [app-ssr] (ecmascript)");
;
;
function Button({ text, color, onClickUpdate }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: (event)=>onClickUpdate?.(event),
        type: "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$colorButton$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dictionaryColor"])(color || "white"),
        children: text
    }, void 0, false, {
        fileName: "[project]/src/app/atoms/button/button.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/app/dasboard/home/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Home component serves as the main dashboard page for the application.
 * It initializes the product repository and fetches the list of products
 * when the component is mounted. The page includes a filter section and
 * a container for displaying product cards.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered Home component.
 *
 * @remarks
 * - This component uses the `useProductsRepository` hook to interact with the product repository.
 * - The `useEffect` hook ensures that the product list is fetched when the component is mounted.
 *
 * @dependencies
 * - `FilterCategories`: A component for filtering product categories.
 * - `ContainerCards`: A component for displaying a list of product cards.
 * - `useProductsRepository`: A custom hook for managing product-related operations.
 *
 */ __turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$organims$2f$filter$2d$categories$2f$filter$2d$categories$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/organims/filter-categories/filter-categories.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$organims$2f$container$2d$cards$2f$container$2d$cards$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/organims/container-cards/container-cards.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$repositories$2f$products$2f$useProductsRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/repositories/products/useProductsRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$atoms$2f$button$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/atoms/button/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$routers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/providers/routers.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function Home() {
    const initProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$repositories$2f$products$2f$useProductsRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProductsRepository"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (initProducts.getProductsObservable().getValue().product.length === 0) {
            initProducts.listProduct();
        }
    }, []);
    const handleCardClick = ()=>{
        router.push(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$routers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].CREATE);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full place-items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "max-w-4xl mt-24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$organims$2f$filter$2d$categories$2f$filter$2d$categories$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/dasboard/home/page.tsx",
                        lineNumber: 52,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/dasboard/home/page.tsx",
                    lineNumber: 51,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "w-full p-5 flex justify-end",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$atoms$2f$button$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        text: "New Product",
                        color: "blue",
                        onClickUpdate: handleCardClick
                    }, void 0, false, {
                        fileName: "[project]/src/app/dasboard/home/page.tsx",
                        lineNumber: 55,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/dasboard/home/page.tsx",
                    lineNumber: 54,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$organims$2f$container$2d$cards$2f$container$2d$cards$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/dasboard/home/page.tsx",
                    lineNumber: 57,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dasboard/home/page.tsx",
            lineNumber: 50,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dasboard/home/page.tsx",
        lineNumber: 49,
        columnNumber: 9
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__d55f2a23._.js.map