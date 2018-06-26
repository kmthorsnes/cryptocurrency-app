import React, { Component } from 'react';
    import './Cryptocurrency.css';

    class Cryptocurrency extends Component {


    render() {
        var {
            id,
            name,
            symbol,
            price_nok,
            percent_change_1h,
            percent_change_24h,
            percent_change_7d,
        } = this.props.data;
        return (
            <li className={"cryptocurrency " + id}>
                <p className="cryptocurrency-name">{name} ({symbol})</p>
                <h1>{ (+price_nok).toFixed(2)} NOK </h1>
                <p>{percent_change_1h}% 1hr</p>
                <p>{percent_change_24h}% 24hr</p>
                <p>{percent_change_7d}% 7dhr</p>
                </li>

        );
    }
}

export default Cryptocurrency;