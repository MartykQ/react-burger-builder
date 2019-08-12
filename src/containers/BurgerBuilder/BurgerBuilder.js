import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {

    salad: 5,
    cheese: 4,
    meat: 3,
    beacon: 7,
}


class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 1,
            beacon: 2,
            cheese: 3,
            meat: 4,
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        console.log(type);
        console.log("adding ings");
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;

        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
        

    }

    removeIngredientHandler = (type) => {
        console.log(type);
        console.log("adding ings");
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;

        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;

        const priceDeduction = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
        

    }
    
    render() {
        return (
            <React.Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                />
            </React.Fragment>
        )
    }
}

export default BurgerBuilder;
