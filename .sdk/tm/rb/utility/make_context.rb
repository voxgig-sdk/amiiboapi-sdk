# Amiiboapi SDK utility: make_context
require_relative '../core/context'
module AmiiboapiUtilities
  MakeContext = ->(ctxmap, basectx) {
    AmiiboapiContext.new(ctxmap, basectx)
  }
end
