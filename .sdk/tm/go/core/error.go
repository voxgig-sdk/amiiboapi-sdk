package core

type AmiiboapiError struct {
	IsAmiiboapiError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewAmiiboapiError(code string, msg string, ctx *Context) *AmiiboapiError {
	return &AmiiboapiError{
		IsAmiiboapiError: true,
		Sdk:              "Amiiboapi",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *AmiiboapiError) Error() string {
	return e.Msg
}
