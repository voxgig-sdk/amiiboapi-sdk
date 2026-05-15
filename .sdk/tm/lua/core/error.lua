-- Amiiboapi SDK error

local AmiiboapiError = {}
AmiiboapiError.__index = AmiiboapiError


function AmiiboapiError.new(code, msg, ctx)
  local self = setmetatable({}, AmiiboapiError)
  self.is_sdk_error = true
  self.sdk = "Amiiboapi"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function AmiiboapiError:error()
  return self.msg
end


function AmiiboapiError:__tostring()
  return self.msg
end


return AmiiboapiError
