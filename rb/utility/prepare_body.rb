# Amiiboapi SDK utility: prepare_body
require_relative 'media'
module AmiiboapiUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return AmiiboapiUtilities.raw_body(ctx.reqdata) if AmiiboapiUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
