import React, { Component } from 'react';
import { Button, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"
import SkyLight from 'react-skylight';

class BankUpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bankName:   this.props.bank.name,
            bankPhone:  this.props.bank.phone,
            bankHQ:     this.props.bank.headquarters
        };
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
        var updBank = {
            link:           this.props.bank._links.self.href,
            name:           this.state.bankName,
            phone:          this.state.bankPhone,
            headquarters:   this.state.bankHQ};
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
                                <div className="col-md-4">
                                    <input type="text" placeholder="Phone" className="form-control"  name="bankPhone" value={this.state.bankPhone} onChange={this.handleChange}/>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" placeholder="Headquarters" className="form-control"  name="bankHQ" value={this.state.bankHQ} onChange={this.handleChange}/>
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