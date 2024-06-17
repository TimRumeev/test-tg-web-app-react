import React from "react";

export const Button = (props) => {
	return(
		<Button {...props} className={"button " + props.className}/>
	);

}

export default Button;