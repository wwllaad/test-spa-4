import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"

import Bank from './Bank.jsx'

class BankTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var banks = this.props.banks.map(bank =>
            <Bank key={bank._links.self.href} bank={bank}/>
        );

        return (

            <div>
                <table class="table" className="table table-striped">
                    <thead class="thead-dark">
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