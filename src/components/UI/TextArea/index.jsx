import React from 'react'

const TextArea = ({field}) => (
  <div className="form-group">
    <label>{field.name}</label>
    <textarea className="form-control" placeholder={field.label} name={field.id}/>
  </div>
)

export default TextArea