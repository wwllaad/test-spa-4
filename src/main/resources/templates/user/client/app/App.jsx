import React, { Component } from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
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
    render() {
        return (
            <div>
                <BankTable banks={this.state.banks}/>
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
            <Bank key={bank._links.self.href} bank={bank}/>
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
            </div>
        );
    }
}

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
export default App;

// import React from 'react';
//
// class AwesomeComponent extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {likesCount : 0};
//         this.onLike = this.onLike.bind(this);
//     }
//
//     onLike () {
//         let newLikesCount = this.state.likesCount + 1;
//         this.setState({likesCount: newLikesCount});
//     }
//
//     render() {
//         return (
//             <div>
//                 Likes : <span>{this.state.likesCount}</span>
//                 <div><button onClick={this.onLike}>Like Me</button></div>
//             </div>
//         );
//     }
//
// }
//
// export default AwesomeComponent;