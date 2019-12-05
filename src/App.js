import React, {Component} from 'react';
import './App.css';
import {connect} from "react-redux";
import {createNewProduct, getAllProducts} from "./redux/productsReducer";

class App extends Component {
	componentDidMount() {
		this.props.getAllProducts('products')
	}

	newProduct = ()=> {
		const url = 'products';
		const newProduct = {
			name: 'bbb',
			price: 10,
			description: 'ccc',
			quantityOfGoods: 20
		};
		this.props.createNewProduct(url, newProduct)
	};

	render() {

		return (
			<div className="App">
				<ul>
					<li onDoubleClick={this.newProduct}>ssds</li>
				</ul>
			</div>
		);
	}
}

export default connect(
	state => ({
			products: state.allProducts.products
		}
	),
	{
		getAllProducts,
		createNewProduct
	}
)(App);
