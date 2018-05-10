import createSagaMiddleware from 'redux-saga'
import {compose, applyMiddleware, createStore} from 'redux'
import reducers from '../reducers'
import sagas from '../sagas'

const sagaMiddleware = createSagaMiddleware()

export const configureStore = () => {
  return createStore(reducers, compose(
    applyMiddleware(sagaMiddleware)
  ))
}

export const runSaga = () => {
  sagaMiddleware.run(sagas)
}

export default {configureStore, runSaga}