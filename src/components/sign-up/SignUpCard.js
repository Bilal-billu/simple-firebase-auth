import React from 'react'

export default function SignUpCard({ item }) {
  const min_max = (item.min&&item.max)?true: false
  var inputClasses='m-3 col-8 col-sm-7 col-md-6 col-lg-5 p-1';
  return (
    <div className='d-flex justify-content-center align-items-center align-content-center'>
      <label className='col-4 col-sm-3 col-md-3 h5' htmlFor={item.id}>{item.label}:</label>
      {min_max?
      <input id={item.id} type={item.type} value={item.value}
      min={item.min} max={item.max} className={inputClasses}
      onChange={(e) => {
        item.onChangeVal(e.target.value)
      }} />
      :
      <input id={item.id} type={item.type} value={item.value} className={inputClasses}
        onChange={(e) => {
          item.onChangeVal(e.target.value)
        }} />
      }
    </div>
  )
}

SignUpCard.defaultProps = {
  item: {
    label: "None",
    type: "text",
    id: "none",
    value: "None",
    onChangeVal: () => {
      console.log("None...")
    }
  }
}
