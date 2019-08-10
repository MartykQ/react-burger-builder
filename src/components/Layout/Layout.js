import React from 'react';
import styles from './layout.module.css';


const layout = (props) => (
    <React.Fragment>
        <div className={styles.layoutMain}>
            Toolbar, SideDrawer, Sidebar
        </div>
        <main>
            {props.children}
        </main>
        <p>Stopka</p>
    </React.Fragment>
)

export default layout;