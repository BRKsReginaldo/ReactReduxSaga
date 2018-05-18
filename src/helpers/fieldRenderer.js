import {SwitchCase} from "./logics"
import React from 'react'
import TextField from '../components/UI/TextField'
import TextArea from '../components/UI/TextArea'
import NumberField from "../components/UI/NumberField"


export default function (field) {
  return SwitchCase(field.type, {
    textarea: () => <TextArea key={field.id} field={field}/>,
    number: () => <NumberField key={field.id} field={field}/>,
    default: () => <TextField key={field.id} field={field}/>
  })
}