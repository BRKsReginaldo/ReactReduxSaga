import {isFunction} from 'lodash'

/**
 *  usage:
 *   SwitchCase(jhon, {
 *    jhon: 'doe' || () => 'doe',
 *    default: 'some default value' || () => 'some default value'
 *   })
 */
export const SwitchCase = (value, options) => {
  if (!value) return false
  if (!options[value]) {
    if (options.default) return isFunction(options.default) ? options.default() : options.default
    return false
  }

  if (isFunction(options[value])) return options[value]()

  return options[value]
}