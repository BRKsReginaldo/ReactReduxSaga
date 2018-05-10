import {put, takeEvery} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {incrementAsync, increment} from '../actionTypes/count'

export function* incrementAsyncHandler() {
  yield delay(1000)
  yield put({type: increment})
}

export default function* () {
  yield takeEvery(incrementAsync, incrementAsyncHandler)
}