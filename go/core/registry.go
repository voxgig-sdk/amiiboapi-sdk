package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewAmiiboEntityFunc func(client *AmiiboapiSDK, entopts map[string]any) AmiiboapiEntity

var NewAmiiboseriesEntityFunc func(client *AmiiboapiSDK, entopts map[string]any) AmiiboapiEntity

var NewCharacterEntityFunc func(client *AmiiboapiSDK, entopts map[string]any) AmiiboapiEntity

var NewGameseriesEntityFunc func(client *AmiiboapiSDK, entopts map[string]any) AmiiboapiEntity

var NewTypeEntityFunc func(client *AmiiboapiSDK, entopts map[string]any) AmiiboapiEntity

