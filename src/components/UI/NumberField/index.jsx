import React from 'react'

const NumberField = ({field}) => (
  <div className="form-group">
    <label>{field.name}</label>
    <input type="number" className="form-control" placeholder={field.label} name={field.id}/>
  </div>
)

export default NumberField