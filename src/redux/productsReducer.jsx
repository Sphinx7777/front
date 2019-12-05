import {productsApi} from '../api/api';

const SET_ALL_PRODUCTS = '/usersReducer///SET_ALL_PRODUCTS';
const CREATE_NEW_PRODUCT = '/usersReducer///CREATE_NEW_PRODUCT';


const productsReducer = (state = {products:[]}, action) => {
	switch (action.type) {
		case SET_ALL_PRODUCTS: {
			return {
				...state,products:action.allProducts
			}
		}
		case CREATE_NEW_PRODUCT: {
			return {
				...state,...state.products.push(action.newProducts)
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

export const getAllProducts = (url) => {
	return async (dispatch)=> {
		const response = await productsApi.getProducts(url);
		dispatch(setAllProducts(response.data))
	}
};
export const createNewProduct = (url,newProduct) => {
	return async (dispatch)=> {
		const response = await productsApi.createProducts(url,newProduct);
		if(response.status === 200){
			dispatch(setNewProduct(response.data))
		}else {
			console.error(new Error('some error'))
		}
	}
};



export default productsReducer;