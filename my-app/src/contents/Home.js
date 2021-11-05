import React, { Component } from "react";

import Loginitems from '../components/Loginitems'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <login>
                    <ul>
                        <Loginitems item="Login" tolink="/sign"></Loginitems>
                    </ul>
                </login>            
            </div>
        );
    }
}

export default Home;