import * as axios from "axios";


const axiosInstans = axios.create({
	baseURL: `http://localhost:4000/shop/`
});


export const productsApi = {

	getProducts(url) {
		return axiosInstans.get(url)
	},

	createProduct(url, newProduct) {
		return axiosInstans.post(url, newProduct)
	},

	deleteProduct(url, id) {
		return axiosInstans.delete(`${url}/${id}`)
	},

	updateProduct(url, id, updateData) {
		return axiosInstans.put(`${url}/${id}`,updateData)
	},
};



