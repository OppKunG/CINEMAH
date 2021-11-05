import React, { Component } from 'react'
import Backitems from './Backitems'

class Backbar extends Component {
    render() {
        return (
            <back>
                <ul>
                    <Backitems item="Home" tolink="/" ></Backitems>
                </ul>
            </back>
        );
    }
}

export default Backbar;