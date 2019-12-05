import React,{useEffect} from 'react';
import './App.css';
import {connect} from "react-redux";
import {getAllProducts} from "./redux/productsReducer";

const App = ({products,getAllProducts}) => {


	useEffect(()=>{
	if(!products.length){
		getAllProducts('products')
	}
},[products,getAllProducts]);

	return (
		<div className="App">
			<ul>
				<li>ssds</li>
			</ul>
		</div>
	);
};

export default connect(
	state => ({
			products: state.allProducts.products
		}
	),
	{getAllProducts}
)(App);
