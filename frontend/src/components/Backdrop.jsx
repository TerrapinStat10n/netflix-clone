import React from 'react';
import { connect } from 'react-redux';
import './backdrop.css';

const Backdrop = props => (
    <div className="backdrop" onClick={props.click} />
)

export default connect()(Backdrop);