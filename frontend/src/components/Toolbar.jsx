import React from 'react';
import { connect } from 'react-redux';
import DrawerToggleButton from './DrawerToggleButton';
import './toolbar.css';

const Toolbar = (props) => (
    <header className="toolbar">
        <nav classname="toolbar_navigation">
            <div className="drawer">
                <DrawerToggleButton click={props.drawerClickHandler} />
                <div className="toolbar__logo">
                    <a href="/">
                        <img className="img-drop" src="http://localhost:3000/logo.png" alt="logo" />
                    </a>
                </div>
            </div>
        </nav>
    </header>
);

export default connect()(Toolbar);