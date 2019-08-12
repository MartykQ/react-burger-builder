import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Beacon', type: 'beacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];


const buildControls = (props) => (
    <div className={styles.BuildControls}>
        <p>Current price <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map((element) => {
            return <BuildControl
                key={element.label}
                label={element.label}
                type = {element.type}
                added = {() => props.ingredientAded(element.type)} 
                removed = {() => props.ingredientRemoved(element.type)}
                disabled={props.disabled[element.type]} />
        })}
        <button
         className={styles.OrderButton}
         disabled={!props.purchasable}
         onClick={props.ordered}
         >ORDER NOW</button>

    </div>

)

export default buildControls;