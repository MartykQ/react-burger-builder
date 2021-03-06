import React from 'react';
import styles from './layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends React.Component {

    state = {
        showSideDrawer: true,
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false,
        })
    }

    render() {

        return (
        <React.Fragment>
            <Toolbar />
            <SideDrawer
                open={this.state.showSideDrawer}
                closed={this.sideDrawerClosedHandler}/>
                
            <main className={styles.Content}>
                {this.props.children}
            </main>
            <p>Stopka</p>
        </React.Fragment>
        );
    }
}  



export default Layout;