import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';


const sideDrawer = (props) => {
    
    let styleClasses = [styles.SideDrawer, styles.Close];
    if (props.open) {
        styleClasses = [styles.SideDrawer, styles.Open]
    }
    return(
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={styleClasses.join(' ')}>
                <div className={styles.Logo}>
                    <Logo height="50px"/>
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </React.Fragment>
    );
}

export default sideDrawer;