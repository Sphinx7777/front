import {productsApi} from '../api/api';

const SET_ALL_PRODUCTS = '/usersReducer///SET_ALL_PRODUCTS';


const productsReducer = (state = {products:[]}, action) => {
	switch (action.type) {

		case SET_ALL_PRODUCTS: {
			return {
				...state,...state.products=action.allProducts
			}
		}
		default:
			return state;
	}
};

const setAllProducts = (allProducts) => ({
		type: SET_ALL_PRODUCTS, allProducts
});

export const getAllProducts = (url) => {
	return async (dispatch)=> {
		const response = await productsApi.getProducts(url);
		dispatch(setAllProducts(response))
	}
};



export default productsReducer;