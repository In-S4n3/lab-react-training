import React from 'react'

function CreditCard(props) {
  return (
    <div style={{border: "1px solid black", borderRadius:"15px", backgroundColor: props.bgColor}}>
      <div className="" style={{ color: props.color, padding:"5px 55px", float:"right"}}>
        {props.type}
      </div>
      <div className="" style={{ color: props.color , padding:"5px 55px "}}>
        {props.number}
      </div>
      <div className="" style={{ color: props.color , padding:"5px 55px ", display:"inline", float:"left"}}>
        {props.expirationMonth}/{props.expirationYear}
      </div>
      <div className="" style={{ color: props.color , padding:"5px 55px ",  display:"inline", float:"left"}}>
        {props.bank}
      </div>
      <div className="" style={{ color: props.color , padding:"5px 55px "}}>
        {props.owner}
      </div>
    </div>
  )
}


export default CreditCard;