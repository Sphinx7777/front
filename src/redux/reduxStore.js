import {applyMiddleware, combineReducers,createStore} from "redux";
import productsReducer from "./productsReducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {composeWithDevTools} from "redux-devtools-extension";


const reducers = combineReducers(
	{
		allProducts: productsReducer,
		form: formReducer
	});

const store = createStore(
	reducers,
	composeWithDevTools(
		applyMiddleware(thunkMiddleware))
	);


export default store;


