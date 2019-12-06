import React from 'react';
import './App.module.scss';
import {connect} from "react-redux";
import {createNewProduct, getAllProducts, deleteProduct, updateProduct} from "./redux/productsReducer";
import {Product} from "./components/product/product";
import style from "./App.module.scss";

const productURL = 'products';

class App extends React.Component {

	_createNewProduct = () => {
		const newProduct = {
			name: 'пиво',
			price: 50,
			description: 'светлое',
			quantityOfGoods: 30
		};
		this.props.createNewProduct(productURL, newProduct)
	};

	_deleteProduct =id => this.props.deleteProduct(productURL, id);


	_updateProduct = (id) => {
		const updateData = {
			name: 'колбаса',
			price: 45
		};
		this.props.updateProduct(productURL, id, updateData)
	};

	componentDidMount() {
		this.props.getAllProducts(productURL)
	}

	render() {
		const {products} = this.props;
		return (
			<div className={style.app}>
				<ul className={style.productWrapper}>
					<Product
						createNewProduct={this._createNewProduct}
						deleteProduct={this._deleteProduct}
						updateProduct={this._updateProduct}
						products={products}
					/>
				</ul>
			</div>
		);
	}
}

export default connect(
	state => ({
			products: state.allProducts.products,
		}
	), {
		getAllProducts, createNewProduct, deleteProduct, updateProduct
	}
)(App);
