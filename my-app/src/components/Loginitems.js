import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Loginitems extends Component {
    render() {
        return (
            <li id={this.props.item}>
                <Link to={this.props.tolink} >{this.props.item}</Link>
            </li>
        );
    }
}

export default Loginitems;