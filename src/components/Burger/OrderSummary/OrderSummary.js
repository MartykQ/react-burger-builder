import React from 'react';
import Button from '../../UI/Button/Button';


const orderSummary = (props) => {

    let ingredientSummary = Object.keys(props.ingredients)
        .map(ingKey => {
            return <li key={ingKey}>{ingKey}: {props.ingredients[ingKey]}</li>
        })
    
    return ( 
    <React.Fragment>
        <h3>Your Order</h3>
        <p>Burger with the following ingredients: </p>
        <ul>
            {ingredientSummary}
        </ul>

        <p><strong>TOTAL PRICE: {props.price.toFixed(2)}</strong></p>

        <p> Continue to checkout </p>

        <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
        <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>

    </React.Fragment>
)}

export default orderSummary;