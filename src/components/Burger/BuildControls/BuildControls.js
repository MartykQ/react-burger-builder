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
        {controls.map((element) => {
            return <BuildControl
                key={element.label}
                label={element.label}
                type = {element.type}
                added = {() => props.ingredientAded(element.type)} 
                removed = {() => props.ingredientRemoved(element.type)} />
        })}



    </div>

)

export default buildControls;