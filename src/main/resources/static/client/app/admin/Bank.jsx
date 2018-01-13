import React, { Component } from 'react';
// import '../../../css/App.css';
// import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.css"
// import Alert from 'react-s-alert';
// import 'react-s-alert/dist/s-alert-default.css';
// import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import BankUpdateForm from './BankUpdateForm.jsx'

class Bank extends React.Component {
    constructor(props) {
        super(props);
        this.deleteBank = this.deleteBank.bind(this);

    }
    deleteBank() {
        this.props.deleteBank(this.props.bank);
    }

    render() {
        return (
            <tr>
                <td>{this.props.bank.name}</td>
                <td>
                    <button className="btn btn-danger btn-xs" onClick={this.deleteBank}>Delete</button>
                </td>
                <td>
                    <BankUpdateForm updateBank={this.props.updateBank} bank={this.props.bank}/>
                </td>
            </tr>
        );
    }
}


export default Bank;