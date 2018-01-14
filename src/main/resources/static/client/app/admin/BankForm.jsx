import React, { Component } from 'react';
import { Button, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"
import SkyLight from 'react-skylight';

class BankForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {bankName: '', bankPhone: '', bankHQ: ''};
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
        console.log("Bank Name: " + this.state.bankName);
        var newBank = {
                        name:         this.state.bankName,
                        phone:        this.state.bankPhone,
                        headquarters: this.state.bankHQ
                        };
        this.props.createBank(newBank);
        this.refs.simpleDialog.hide();
    }

    render() {
        return (
            <div>
                <SkyLight hideOnOverlayClicked ref="simpleDialog">
                    <div className="panel panel-default">
                        <div className="panel-heading">Create bank</div>
                        <div className="panel-body">
                            <form className="form">
                                <div className="col-md-4">
                                    <input type="text" placeholder="Bank Name" className="form-control"  name="bankName" onChange={this.handleChange}/>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" placeholder="Phone" className="form-control"  name="bankPhone" onChange={this.handleChange}/>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" placeholder="Headquarters" className="form-control"  name="bankHQ" onChange={this.handleChange}/>
                                </div>
                                <div className="col-md-2">
                                    <button className="btn btn-primary" onClick={this.handleSubmit}>Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </SkyLight>
                <div className="col-md-2">
                    <button className="btn btn-primary" onClick={() => this.refs.simpleDialog.show()}>Add new bank</button>
                </div>
            </div>
        );
    }
}

export default BankForm;