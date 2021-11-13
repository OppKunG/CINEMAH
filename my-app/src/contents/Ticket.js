import React, { Component } from "react";
import ticketpic from '../img/ticket.png'
import barcodepic from '../img/barcode.png'
import accountpic from '../img/account.png'

class Ticket extends Component {
    render() {
        return (
            <div className="condiv ticket">
                <h1 className="tickettopic">C I N E M A H</h1>
                <img src={accountpic} alt="barcode.png" className="accountpic" />
                <h1 className="accountname">K</h1>
                <h1 className="name">testttt_1</h1>
                <h1 classname="logout">Sign out</h1>
                <h2 className="hometopic">HOME</h2>
                <h2 className="movietopic">MOVIE</h2>
                <h2 className="historytopic">HISTORY</h2>
                <obj className="bgticket"></obj>
                <h3 className="moviename">No Time to Die</h3>
                <h4 className="seat">Seat</h4>
                <h4 className="seatuser">E5</h4>
                <h4 className="date">Date</h4>
                <h4 className="dateuser">31 OCT</h4>
                <img src={barcodepic} alt="barcode.png" className="barcodepic" />
                <img src={ticketpic} alt="ticket.png" className="ticketpic" />
            </div>
        );
    }
}

export default Ticket;