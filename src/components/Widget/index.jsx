/** @flow */

import React, {Component} from 'react'
import {connect} from "react-redux"
import {fetchFields, setFieldsLoading} from "../../actions/fields"
import {bindActionCreators} from "redux"
import Loader from "../UI/Loader"
import fieldRenderer from "../../helpers/fieldRenderer"
import {makeOrderRequest} from "../../services/OrderService"
import Aux from "../../helpers/Aux"

type Props = {
  dispatch: (client) => null,
  client: object,
  items: object[],
  loading: boolean
}

const successColor = '#35475E'
const errorColor = '#aa0000'

const successMessage = 'pedido enviado com sucesso!'
const errorMessage = 'você não preencheu os dados corretamente!'
const serverErrorMessage = 'ocorreu um erro no servidor! tente novamente mais tarde'

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchFields,
  setFieldsLoading
}, dispatch)

const mapStateToProps = ({fields: {items, loading}}) => ({items, loading})

@connect(mapStateToProps, mapDispatchToProps)
class Widget extends Component<Props> {
  state = {
    message: '',
    color: successColor
  }

  form = null

  componentDidMount() {
    this.props.fetchFields(this.props.client)
    this.setState(state => ({cachedState: {...state}}))
  }

  resetState = async () => {
    await this.setState(({cachedState}) => ({...cachedState}))
  }

  onSubmit = async ev => {
    ev.preventDefault()

    const FD = new FormData(ev.target)

    await this.resetState()

    const fields = this.props.items.map(field => field.id)
    const hasAllFields = fields.reduce((carry, item) => !!(FD.get(item).replace(/\s+/, '')), true)

    if (!hasAllFields) {
      await this.setState({
        message: errorMessage,
        color: errorColor
      })
      return
    }

    try {
      this.props.setFieldsLoading(true)

      await makeOrderRequest(FD, this.props.client)

      this.setState({
        message: successMessage,
        color: successColor
      }, () => {
        setTimeout(() => {
          this.setState({
            message: ''
          })
        }, 5000)
      })

      document.getElementById('sysb-order-request-form').reset()
    } catch (e) {
      this.setState({
        message: serverErrorMessage,
        color: errorColor
      })
      console.log(e)
    } finally {
      this.props.setFieldsLoading(false)
    }
  }

  render() {
    const {items: fields, loading} = this.props
    const {message, color} = this.state

    return (
      <Aux>
        <div
          style={{
            display: loading ? 'block' : 'none'
          }}
        >
          <Loader/>
        </div>

        <form
          id='sysb-order-request-form'
          style={{
            display: loading ? 'none' : 'block'
          }}
          onSubmit={this.onSubmit}
          ref={ref => this.form = ref}>
          <h1 className="order-title">Novo Pedido</h1>

          {!!fields.length ?
            fields.map(fieldRenderer) :
            (
              <div className="text-center">nenhum campo cadastrado...</div>
            )}

          {!!message && (
            <div className="text-center" style={{color}}>{message}</div>
          )}

          {!!fields.length && (
            <div className="text-right">
              <button className="btn btn-primary send-order-request">Enviar</button>
            </div>
          )}
        </form>
      </Aux>
    )
  }
}

export default Widget