import React, { Component } from 'react';
import axios from 'axios';
import './Tickers.css';
import Cryptocyrrency from './Cryptocurrency';



class Tickers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: "bitcoin",
                    name: "Bitcoin",
                    symbol: "BTC",
                    price_nok: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0"
                },
                {
                    id: "ethereum",
                    name: "Ethereum",
                    symbol: "ETH",
                    nok: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0"
                },
                {
                    id: "litecoin",
                    name: "Litecoin",
                    symbol: "LTC",
                    price_nok: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0"
                },
            ]
        };
    }

    fetchCryptocurrencyData() {
        axios.get('https://api.coinmarketcap.com/v1/ticker/?convert=NOK&limit=10')
                .then(response => {
                    var wanted = ['bitcoin', 'ethereum', 'litecoin'];
                    var result = response.data.filter(currency => wanted.includes(currency.id));
                    this.setState({ data: result});
                })
                .catch(err => console.log(err));
    }

    componentDidMount() {
        this.fetchCryptocurrencyData(); 
        this.interval = setInterval(() => this.fetchCryptocurrencyData(), 60 * 1000);
    }

    render() {
        var tickers = this.state.data.map((currency) =>
            <Cryptocyrrency data={currency} key={currency.id} />
        );
        return (
            <div className="tickers-container">
                <ul className="tickers">{tickers}</ul>
                <p> Updates every minute. Thanks <a href="coinmarketcap.com">coinmarketcap.com</a></p>
            </div>
        );
    }
}


export default Tickers; 