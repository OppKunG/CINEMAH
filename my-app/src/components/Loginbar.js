import React, { Component } from 'react'
import Loginitems from './Loginitems'

class Loginbar extends Component {
    render() {
        return (
            <login>
                <ul>
                    <Loginitems item="Sign" tolink="/sign"></Loginitems>
                </ul>
            </login>
        );
    }
}

export default Loginbar;