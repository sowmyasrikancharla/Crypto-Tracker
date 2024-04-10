// Write your JS code here
// Write your code here
import {Component} from 'react'
import './index.css'

class CryptocurrencyItem extends Component {
  render() {
    const {cryptoDetails} = this.props
    const {currencyName, currencyLogo, euroValue, usdValue, id} = cryptoDetails
    return (
      <li className="row">
        <div className="logo-type">
          <img src={currencyLogo} className="logo" alt={currencyName} />
          <p className="text"> {currencyName}</p>
        </div>
        <div className="text-USD">
          <p>{usdValue}</p>
        </div>
        <div className="text-euro">
          <p>{euroValue}</p>
        </div>
      </li>
    )
  }
}

export default CryptocurrencyItem
