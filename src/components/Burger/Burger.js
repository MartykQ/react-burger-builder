import React from 'react';
import styles from './Burger.module.css';
import BurgerIng from './BurgerIng/BurgerIng';

const burger = (props) => {

    const trans_ingredients = Object.keys(props.ingredients)
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])].map((_, i) => {
                return <BurgerIng key={ingKey+i} type={ingKey} />
            })
        })

    return (
        <div className={styles.Burger}>
            <BurgerIng type="bread-top" />
            {trans_ingredients}
            <BurgerIng type="bread-bottom" />
        </div>
    );
}

export default burger;