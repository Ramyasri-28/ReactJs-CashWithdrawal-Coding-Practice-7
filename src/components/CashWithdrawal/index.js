// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {count: 2000}

  updatedBalance = value => {
    this.setState(previousBal => ({count: previousBal.count - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {count} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="app-container">
        <div className="cash-withdrawal-container">
          <div className="user-details-container">
            <div className="initial-container">
              <p className="initial"> {initial} </p>
            </div>
            <p className="name"> {name} </p>
          </div>
          <div className="balance-container">
            <p className="your-balance"> Your Balance </p>
            <p className="balance">
              {count} <br />
              <span className="currency"> In Rupees </span>
            </p>
          </div>
          <p className="withdraw"> Withdraw </p>
          <p className="choose-sum"> CHOOSE SUM (IN RUPEES) </p>
          <ul className="denominations-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                denominationDetails={eachDenomination}
                key={eachDenomination.id}
                updatedBalance={this.updatedBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
