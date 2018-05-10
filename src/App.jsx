/** @flow */

import React, {Component} from 'react'
import {connect} from "react-redux"
import {bindActionCreators, compose} from "redux"
import {decrement, increment, incrementAsync} from "./actions/count"

const mapStateToProps = ({count}) => ({count})
const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
}, dispatch)

type Props = {
  count: number,
  increment: () => null,
  incrementAsync: () => null,
  decrement: () => null
}

@compose(
  connect(mapStateToProps, mapDispatchToProps)
)
class App extends Component<Props> {
  componentDidMount() {

window.inc = this.props.increment
  }

  render() {
    return (
      <div>
        <h1>Cliques: {this.props.count}</h1>

        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <button onClick={() => this.props.increment()}>Incrementar</button>
          <button onClick={() => this.props.incrementAsync()}>Incrementar Async</button>
          <button onClick={() => this.props.decrement()}>Decrementar</button>
        </div>
      </div>
    )
  }
}

export default App