import {all} from 'redux-saga/effects'
import count from "./count"

export default function* () {
  yield all([
    count()
  ])
}