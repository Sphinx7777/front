import {productsApi} from '../api/api';

const SET_ALL_PRODUCTS = '/usersReducer///SET_ALL_PRODUCTS';
const CREATE_NEW_PRODUCT = '/usersReducer///CREATE_NEW_PRODUCT';
const DELETE_PRODUCT = '/usersReducer///DELETE_PRODUCT';

const initialState = {
	products: []
};


const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ALL_PRODUCTS: {
			return {
				...state, products: action.allProducts
			}
		}
		case CREATE_NEW_PRODUCT: {
			return {
				...state,
				...state.products.push(action.newProducts),
				products: state.products.slice()
			}
		}
		case DELETE_PRODUCT: {
			return {
				...state,
				products:state.products.filter(product => product.id !== action.id)
			}
		}
		default:
			return state;
	}
};

const setAllProducts = (allProducts) => ({
	type: SET_ALL_PRODUCTS, allProducts
});
const setNewProduct = (newProducts) => ({
	type: CREATE_NEW_PRODUCT, newProducts
});
const setDeleteProduct = (id) => ({
	type: DELETE_PRODUCT, id
});

export const getAllProducts = (url) => {
	return async (dispatch) => {
		const response = await productsApi.getProducts(url);
		if (response.status === 200) {
			dispatch(setAllProducts(response.data));
		} else {
			console.error(new Error(`some error ${response.message}`))
		}
	}
};
export const createNewProduct = (url, newProduct) => {
	return async (dispatch) => {
		const response = await productsApi.createProduct(url, newProduct);
		if (response.status === 200) {
			dispatch(setNewProduct(response.data));
		} else {
			console.error(new Error(`some error ${response.message}`))
		}

	}
};

export const deleteProduct = (url, id) => {
	return async (dispatch) => {
		const response = await productsApi.deleteProduct(url, id);
		if (response.status === 200) {
			dispatch(setDeleteProduct(id));
		} else {
			console.error(new Error(`some error ${response.message}`))
		}

	}
};


export default productsReducer;