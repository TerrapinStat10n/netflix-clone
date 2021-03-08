import React from 'react';
import { connect } from 'react-redux';
import "./drawerToggleButton.css";


const drawerToggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
    </button>

);

export default connect()(drawerToggleButton);