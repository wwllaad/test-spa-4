import React, { Component } from 'react';
// import '../../../css/App.css';
// import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.css"
// import Alert from 'react-s-alert';
// import 'react-s-alert/dist/s-alert-default.css';
// import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import SkyLight from 'react-skylight';

class BankUpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {bankName: this.props.bank.name};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState(
            {[event.target.name]: event.target.value}
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        var updBank = {link: this.props.bank._links.self.href ,name: this.state.bankName};
        this.props.updateBank(updBank);
        this.refs.editDialog.hide();
    }

    render() {
        return (
            <div>
                <SkyLight hideOnOverlayClicked ref="editDialog">
                    <div className="panel panel-default">
                        <div className="panel-heading">Edit bank</div>
                        <div className="panel-body">
                            <form className="form">
                                <div className="col-md-4">
                                    <input type="text" placeholder="Bank Name" className="form-control"  name="bankName" value={this.state.bankName} onChange={this.handleChange}/>
                                </div>
                                <div className="col-md-2">
                                    <button className="btn btn-primary" onClick={this.handleSubmit}>Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </SkyLight>
                <div>
                    <button className="btn btn-primary btn-xs" onClick={() => this.refs.editDialog.show()}>Edit</button>
                </div>
            </div>
        );
    }
}
export default BankUpdateForm;