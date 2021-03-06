import React from 'react';
import styles from './layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';


class Layout extends React.Component {

    state = {
        showSideDrawer: false,
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false,
        })
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer,}
        })
    }

    render() {

        return (
        <React.Fragment>
            <Toolbar draweToggleClicked={this.sideDrawerToggleHandler}/>
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