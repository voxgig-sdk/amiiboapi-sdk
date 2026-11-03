package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewAmiiboEntityFunc func(client *AmiiboapiSDK, entopts map[string]any) AmiiboapiEntityBase

var NewAmiiboseriesEntityFunc func(client *AmiiboapiSDK, entopts map[string]any) AmiiboapiEntityBase

var NewCharacterEntityFunc func(client *AmiiboapiSDK, entopts map[string]any) AmiiboapiEntityBase

var NewGameseriesEntityFunc func(client *AmiiboapiSDK, entopts map[string]any) AmiiboapiEntityBase

var NewTypeEntityFunc func(client *AmiiboapiSDK, entopts map[string]any) AmiiboapiEntityBase

