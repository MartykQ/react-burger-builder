import React from 'react';

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
        <p> Continue to checkout </p>
        
    </React.Fragment>
)}

export default orderSummary;