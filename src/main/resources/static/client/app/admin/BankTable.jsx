import React, { Component } from 'react';
// import '../../../css/App.css';
// import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.css"
// import Alert from 'react-s-alert';
// import 'react-s-alert/dist/s-alert-default.css';
// import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import Bank from './Bank.jsx'

class BankTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var banks = this.props.banks.map(bank =>
            <Bank key={bank._links.self.href} bank={bank} deleteBank={this.props.deleteBank} updateBank={this.props.updateBank} />
        );

        return (

            <div>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                    </thead>
                    <tbody>{banks}</tbody>
                </table>
            </div>);
    }
}

export default BankTable;