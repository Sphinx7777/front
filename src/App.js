import React from 'react';
import './App.css';
import {connect} from "react-redux";
import {createNewProduct, getAllProducts, deleteProduct} from "./redux/productsReducer";
import {Product} from "./components/product";

const productURL = 'products';

class App extends React.Component {

	onClick = (id) => {
		this.props.deleteProduct(productURL,id)
	};

	componentDidMount() {
		this.props.getAllProducts(productURL)
	}

	// newProduct = ()=> {
	// 	const url = 'products';
	// 	const newProduct = {
	// 		name: 'aaa',
	// 		price: 10,
	// 		description: 'rrr',
	// 		quantityOfGoods: 20
	// 	};
	// 	this.props.createNewProduct(url, newProduct)
	// };

	render() {

		return (
			<div className="App">
				<ul>
					<Product products={this.props.products} onClick={this.onClick} />
				</ul>
			</div>
		);
	}
}

export default connect(

	state => ({
			products: state.allProducts.products,
		}
	),
	{
		getAllProducts,
		createNewProduct,
		deleteProduct
	}
)(App);
