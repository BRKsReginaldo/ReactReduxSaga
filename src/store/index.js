import createSagaMiddleware from 'redux-saga'
import {compose, applyMiddleware, createStore} from 'redux'
import reducers from '../reducers'
import sagas from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const enhanceStore = window.hasOwnProperty('__REDUX_DEVTOOLS_EXTENSION_COMPOSE__') ? window.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

export const configureStore = () => {
  return createStore(reducers, enhanceStore(
    applyMiddleware(sagaMiddleware)
  ))
}

export const runSaga = () => {
  sagaMiddleware.run(sagas)
}

export default {configureStore, runSaga}