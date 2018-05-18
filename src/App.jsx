/** @flow */

import React, {Component} from 'react'
import Widget from "./components/Widget"

type Props = {

}

class App extends Component<Props> {

  render() {
    const client = document.getElementById('order-widget').getAttribute('sysb-client')

    return (
      <Widget client={client}/>
    )
  }
}

export default App