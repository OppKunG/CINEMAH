import React, { Component } from "react";
import accountpic from '../img/account.png'
import checkpic from '../img/check.png'
import ticketpic from '../img/ticket.png'
import barcodepic from '../img/barcode.png'

class Ticket extends Component {
    render() {
        return (
            <div className="condiv ticket">
                <obj className="menu1"></obj>
                <obj className="menu2"></obj>
                <obj className="menu3"></obj>
                <h1 className="tickettopic">C I N E M A H</h1>
                <img src={accountpic} alt="account.png" className="accountpic" />
                <h1 className="accountname">K</h1>
                <h1 className="name">testttt_1</h1>
                <obj className="boxlogout"></obj>
                <h1 className="logout">Sign out</h1>
                <h2 className="hometopic">HOME</h2>
                <h2 className="movietopic">MOVIE</h2>
                <h2 className="historytopic">HISTORY</h2>
                <img src={checkpic} alt="check.png" className="checkpic" />
                <h3 className="status">Success</h3>
                <h3 className="thankyou">Thank you for you Purchase</h3>
                <h3 className="timestamp">Time stamp 00.00 (GMT+7)</h3>
                <obj className="endline"></obj>
                <obj className="boxreturn"></obj>
                <h3 className="return">Back to HOME</h3>
                <obj className="bgticket"></obj>
                <h3 className="moviename">No Time to Die</h3>
                <h4 className="seat">Seat</h4>
                <h4 className="seatuser">E5</h4>
                <h4 className="price">Price</h4>
                <h4 className="priceuser">250 THB</h4>
                <h4 className="date">Date</h4>
                <h4 className="dateuser">31 OCT</h4>
                <h4 className="time">Time</h4>
                <h4 className="timeuser">17.30</h4>
                <img src={barcodepic} alt="barcode.png" className="barcodepic" />
                <img src={ticketpic} alt="ticket.png" className="ticketpic" />
            </div>
        );
    }
}

export default Ticket;