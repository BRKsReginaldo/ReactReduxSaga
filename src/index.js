import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import {Provider} from "react-redux"
import {configureStore, runSaga} from './store'
import '../styles/app.styl'

const store = configureStore()
runSaga()

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)