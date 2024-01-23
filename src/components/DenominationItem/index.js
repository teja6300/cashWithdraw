// Write your code here
import './index.css'

const DenominationItem = props => {
  const {item, denominationValue} = props
  const {value} = item

  const onDenominationValue = () => {
    denominationValue(value)
  }

  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-button"
        onClick={onDenominationValue}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
