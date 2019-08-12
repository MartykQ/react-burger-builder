import React from 'react';
import styles from './BurgerIng.module.css';
import PropTypes from 'prop-types';


class BurgerIng extends React.Component {


    render() {

        let ingredient = null;

        switch(this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={styles.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={styles.BreadTop}>
                        <div className={styles.Seeds1}></div>
                        <div className={styles.Seeds2}></div>
                    </div>
                );
                break;
            case ('meet'):
                ingredient = <div className={styles.Meat}></div>;
                break;
            case ('cheese'):
                ingredient = <div className={styles.Cheese}></div>
                break;
            case ('salad'):
                ingredient = <div className={styles.Salad}></div>
                break;
            case ('beacon'):
                ingredient = <div className={styles.Bacon}></div>
                break;
            default:
                ingredient = null;
        }

    return ingredient;
    }
};


BurgerIng.propTypes = {
    type: PropTypes.string.isRequired,
    
}
export default BurgerIng;