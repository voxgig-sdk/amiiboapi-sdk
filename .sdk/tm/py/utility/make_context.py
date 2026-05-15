# Amiiboapi SDK utility: make_context

from core.context import AmiiboapiContext


def make_context_util(ctxmap, basectx):
    return AmiiboapiContext(ctxmap, basectx)
