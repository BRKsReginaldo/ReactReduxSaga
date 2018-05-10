import {SwitchCase} from "../../helpers/logics"

export default function (state = 0, {type}) {
  return SwitchCase(type, {
    'INCREMENT': () => state + 1,
    'DECREMENT': () => state - 1,
    default: () => state
  })
}