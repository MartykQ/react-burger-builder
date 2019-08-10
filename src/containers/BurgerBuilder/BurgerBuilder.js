import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';


class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 1,
            beacon: 1,
            cheese: 14,
            meat: 2,
        }
    }

    render() {
        return (
            <React.Fragment>
                <Burger ingredients={this.state.ingredients} />
                <div>BuildArea</div>
            </React.Fragment>
        )
    }
}

export default BurgerBuilder;
