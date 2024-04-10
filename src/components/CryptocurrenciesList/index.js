// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoData: [], isLoading: true}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      currencyLogo: eachItem.currency_logo,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
      id: eachItem.id,
    }))
    this.setState({cryptoData: formattedData, isLoading: false})
  }

  render() {
    const {cryptoData, isLoading} = this.state
    console.log(cryptoData)
    return (
      <div>
        <h1 className="head">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image-set"
        />
        <div className="table-con">
          <div className="head-row">
            <h2 className="table-head head1">Coin Type</h2>
            <h2 className="table-head head2">USD</h2>
            <h2 className="table-head head3 ">EURO</h2>
          </div>
          {isLoading ? (
            <div data-testid="loader">
              <Loader
                type="TailSpin"
                color="#00BFFF"
                height={50}
                width={50}
                className="load"
              />
            </div>
          ) : (
            cryptoData.map(item => (
              <CryptocurrencyItem cryptoDetails={item} key={item.id} />
            ))
          )}
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
