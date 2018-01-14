import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"
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