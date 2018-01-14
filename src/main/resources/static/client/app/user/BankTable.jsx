import React, { Component } from 'react';
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
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Name</th><th>Phone number</th><th>Headquarters</th>
                    </tr>
                    </thead>
                    <tbody>{banks}</tbody>
                </table>
            </div>);
    }
}
export default BankTable;