import React from 'react';


export const Product = ({onClick,products}) => {
	return(
		<>
		{products.map(product =>
				<li
					onClick={()=>onClick(product._id)}
					key={product._id}
				>
					{product.name}
					id={product._id}
				</li>
			)}
			</>
	)
};