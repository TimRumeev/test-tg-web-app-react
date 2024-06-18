import React, { useState } from "react";
import Button from "../Button/Button";
import "./ProductItem.css"

const ProductItem = ({product, className, onAdd}) => {
	
	const [buttonText, setButtonText] = useState('Добавить в корзину')
	

	const onAddHandler = (e) => {
		onAdd(product)
		e.target.style.backgroundColor = "gray";
		setButtonText('Добавлено')
	}
	

	return(
		<div className={"product " + className}>
			<div className={"img"} />
			<div className={"title"}>{product.title}</div>
			<div className={"description"}>{product.description}</div>
			<div className={"price"}>
				<span>Стоимость: <b>{product.price}</b></span>
			</div>
			<Button className={"add-btn"} onClick={onAddHandler}>
				{buttonText}
			</Button>
		</div>
	)
}


export default ProductItem