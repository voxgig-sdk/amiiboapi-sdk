package = "voxgig-sdk-amiiboapi"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/amiiboapi-sdk.git"
}
description = {
  summary = "Amiiboapi SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["amiiboapi_sdk"] = "amiiboapi_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
