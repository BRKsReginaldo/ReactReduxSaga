import {all} from 'redux-saga/effects'
import fields from "./fields"

export default function* () {
  yield all([
    fields()
  ])
}