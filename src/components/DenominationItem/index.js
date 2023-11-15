// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updatedBalance} = props
  const {value} = denominationDetails

  const onClickDenomination = () => {
    updatedBalance(value)
  }

  return (
    <li className="denomination-item">
      <button className="button" type="button" onClick={onClickDenomination}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
