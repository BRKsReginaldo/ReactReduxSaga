import * as types from '../actionTypes/fields'

export const fetchFields = client => ({type: types.fetchFields, payload: client})
export const setFields = fields => ({type: types.setFields, payload: fields})
export const setFieldsLoading = loading => ({type: types.setFieldsLoading, payload: loading})