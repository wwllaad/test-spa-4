import React, { Component } from 'react';

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