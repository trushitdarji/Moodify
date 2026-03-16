import React from 'react'

const FormGroup = ({lable , placeholder , value , onChange}) => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor={lable}>{lable}</label>
        <input
          value={value}
          onChange={onChange}
        type="text" id={lable} name={lable} placeholder={placeholder} />
      </div>
    </div>
  )
}

export default FormGroup
