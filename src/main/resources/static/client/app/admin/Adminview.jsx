import React, { Component } from 'react';
import SkyLight from 'react-skylight';

class Adminview extends React.Component {
    constructor(props) {
        super(props);
        this.deleteBank = this.deleteBank.bind(this);
        this.createBank = this.createBank.bind(this);
        this.updateBank = this.updateBank.bind(this);
        this.state = {
            banks: [],
        };
    }

    componentDidMount() {
        this.loadBanksFromServer();
    }

    // Load students from database
    loadBanksFromServer() {
        fetch('http://localhost:8080/api/banks',
            {credentials: 'same-origin'})
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    banks: responseData._embedded.banks,
                });
            });
    }
    // Delete student
    deleteBank(bank) {
        fetch (bank._links.self.href,
            { method: 'DELETE',
                credentials: 'same-origin'})
            .then(
                res => this.loadBanksFromServer()
            )
            .catch( err => console.error(err))
    }

    // Create new student
    createBank(bank) {
        fetch('http://localhost:8080/api/banks',
            {   method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bank)
            })
            .then(
                res => this.loadBanksFromServer()
            )
            .catch( err => console.error(err))
    }

    // Update student
    updateBank(bank) {
        fetch(bank.link,
            {   method: 'PUT',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bank)
            })
            .then(
                res => this.loadBanksFromServer()
            )
            .catch( err => console.error(err))
    }

    render() {
        return (
            <div>
                <BankTable banks={this.state.banks} deleteBank={this.deleteBank}  updateBank={this.updateBank} />
                <BankForm createBank={this.createBank}/>
            </div>
        );
    }
}

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
                <table>
                    <thead>
                    <tr>
                        <th>Name</th><th> </th>
                    </tr>
                    </thead>
                    <tbody>{banks}</tbody>
                </table>
            </div>);
    }
}

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
                    <button onClick={this.deleteBank}>Delete</button>
                </td>
                <td>
                    <BankUpdateForm updateBank={this.props.updateBank} bank={this.props.bank}/>
                </td>
            </tr>
        );
    }
}

class BankForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {bankName: ''};
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
        var newBank = {name: this.state.bankName};
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
                                    <input type="text" placeholder="Name" className="form-control"  name="bankName" onChange={this.handleChange}/>
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


export default Adminview ;
