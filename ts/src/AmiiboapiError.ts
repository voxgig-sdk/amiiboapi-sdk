
import { Context } from './Context'


class AmiiboapiError extends Error {

  isAmiiboapiError = true

  sdk = 'Amiiboapi'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  AmiiboapiError
}

