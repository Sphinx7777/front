import React from 'react';
import style from './product.module.scss'


export const Product = ({products, createNewProduct, deleteProduct, updateProduct}) => {

	return (
		<>
			{products.map(product =>
				<li key={product._id} className={style.product}>
					<div className={style.productItem}>
						Название : <b>{product.name}</b>
					</div>
					<div className={style.productItem}>
						Цена : <b>{product.price}</b>
					</div>
					<div className={style.productItem}>
						Описание : <b>{product.description}</b>
					</div>
					<div className={style.productItem}>
						Количество : <b>{product.quantityOfGoods}</b>
					</div>
					<button className={style.productBtn}
									onClick={createNewProduct}>
						Добавить
					</button>
					<button className={style.productBtn}
									onClick={() => updateProduct(product._id)}>
						Редактировать
					</button>
					<button className={style.productBtn}
									onClick={() => deleteProduct(product._id)}>
						Удалить
					</button>
				</li>
			)}
		</>
	)
};