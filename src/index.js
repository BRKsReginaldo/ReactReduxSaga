import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import {Provider} from "react-redux"
import {configureStore, runSaga} from './store'
import '../styles/app.styl'

window.config = config
window.ApiUrl = process.env.NODE_ENV === 'production' ? window.config.url.production : window.config.url.development

const store = configureStore()
runSaga()

if (document.getElementById('order-widget')) {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('order-widget')
  )
}