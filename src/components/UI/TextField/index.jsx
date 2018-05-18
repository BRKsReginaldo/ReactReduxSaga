import React from 'react'

const TextField = ({field}) => (
  <div className="form-group">
    <label>{field.name}</label>
    <input type="text" className="form-control" placeholder={field.label} name={field.id}/>
  </div>
)

export default TextField