import {SwitchCase} from "../../helpers/logics"
import {setFields, setFieldsLoading} from "../../actionTypes/fields"

const initialState = {
  loading: false,
  items: []
}

export default function fields(state = initialState, action) {
  return SwitchCase(action.type, {
    [setFields]() {
      return {...state, items: action.payload}
    },
    [setFieldsLoading]() {
      return {...state, loading: action.payload}
    },
    default: () => state
  })
}