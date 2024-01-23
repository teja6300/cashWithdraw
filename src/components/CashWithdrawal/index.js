// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    value: 2000,
  }

  denominationValue = value => {
    this.setState(prevState => ({value: prevState.value - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {value} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="app-container">
        <div className="card-container">
          <div className="name-container">
            <div className="initial-container">
              <p className="initial">{initial}</p>
            </div>
            <h1 className="name">{name}</h1>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <p className="balance">
              {value}
              <br />
              <span className="currency">In Rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="note">CHOOSE SUM (IN RUPEES)</p>
          <ul className="item-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                item={eachItem}
                key={eachItem.id}
                denominationValue={this.denominationValue}
              />
            ))}
            )
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
