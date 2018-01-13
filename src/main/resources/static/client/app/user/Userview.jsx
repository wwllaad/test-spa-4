import React, { Component } from 'react';
import Bank from './Bank.jsx'
import BankTable from './BankTable.jsx'

class Userview extends React.Component {
    constructor(props) {
        super(props);
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
    render() {
        return (
            <div>
                <BankTable banks={this.state.banks}/>
            </div>
        );
    }
}
export default Userview;
