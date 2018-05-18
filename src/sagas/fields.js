import {fetchFields} from "../actionTypes/fields"
import {setFields, setFieldsLoading} from '../actions/fields'
import {takeEvery, put, call} from 'redux-saga/effects'
import * as OrderService from '../services/OrderService'

export function* fetchFieldsHandler({payload: client}) {
  // Start loading fields
  yield put(setFieldsLoading(true))

  // Fetch fields from api
  const res = yield call(OrderService.fetchFields, client)

  // Set fields on store
  yield put(setFields(res.fields))

  // Stop loading fields
  yield put(setFieldsLoading(false))
}

export default function* () {
  yield takeEvery(fetchFields, fetchFieldsHandler)
}