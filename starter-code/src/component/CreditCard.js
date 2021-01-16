import React from 'react'

function CreditCard(props) {
  return (
    <div>
      <div className="" style={{ backgroundColor: props.bgColor, color: props.color }}>
        {props.type}
      </div>
      <div className="" style={{ backgroundColor: props.bgColor, color: props.color }}>
        {props.number}
      </div>
      <div className="" style={{ backgroundColor: props.bgColor, color: props.color }}>
        {props.expirationMonth}/{props.expirationYear}
      </div>
      <div className="" style={{ backgroundColor: props.bgColor, color: props.color }}>
        {props.bank}
      </div>
      <div className="" style={{ backgroundColor: props.bgColor, color: props.color }}>
        {props.owner}
      </div>
    </div>
  )
}


export default CreditCard;