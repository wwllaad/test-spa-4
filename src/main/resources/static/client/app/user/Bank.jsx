import React, { Component } from 'react';
// import '../../../css/App.css';
// import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.css"
// import Alert from 'react-s-alert';
// import 'react-s-alert/dist/s-alert-default.css';
// import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class Bank extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.bank.name}</td>
            </tr>
        );
    }
}

export default Bank;