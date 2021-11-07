import React, { Component } from "react";
import signpic from '../img/Ellipse.png'

class Sign extends Component {
    render() {
        return (
            <div className="condiv sign">
                <img src={signpic} alt="Ellipse.png" className="signpic" />
                <h1 className="signtopic">C I N E M A H</h1>
                <h2 className="welcome">WELCOME !!</h2>
                <p className="comment1">please sign in before using</p>
                <p className="comment2">if you don’t have an account sign up free!</p>
                <p className="user">Username or email</p>
                <obj className="boxuser"></obj>
                <p className="pass">Password</p>
                <obj className="boxpass"></obj>
                <obj className="boxsignin"></obj>
                <btn className="signin">Sign in</btn>
                <btn className="signup">Sign Up</btn>
            </div>
        );
    }
}

export default Sign;