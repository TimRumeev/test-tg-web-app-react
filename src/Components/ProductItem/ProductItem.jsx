import React from "react";
import Button from "../Button/Button";
import "./ProductItem.css"

const ProductItem = ({product, className, onAdd}) => {
	
	

	const onAddHandler = (e) => {
		onAdd(product)
		e.target.style.backgroundColor = "gray";
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
				Добавить в коризну
			</Button>
		</div>
	)
}


export default ProductItem