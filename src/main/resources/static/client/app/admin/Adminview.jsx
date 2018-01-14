import React, { Component } from 'react';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import BankTable from './BankTable.jsx'
import BankForm from './BankForm.jsx'

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

    deleteBank(bank) {
        fetch (bank._links.self.href,
            { method: 'DELETE',
                credentials: 'same-origin'})
            .then(
                res => this.loadBanksFromServer()
            )
            .then(() => {
                Alert.success('Bank deleted', {
                    position: 'bottom-left',
                    effect: 'slide'
                });
            })
            .catch( err => console.error(err))
    }


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
                <Alert stack={true} timeout={2000} />
            </div>
        );
    }
}

export default Adminview ;
