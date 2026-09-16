# Amiiboapi SDK feature factory

from amiiboapi_sdk.feature.base_feature import AmiiboapiBaseFeature
from amiiboapi_sdk.feature.ratelimit_feature import AmiiboapiRatelimitFeature
from amiiboapi_sdk.feature.retry_feature import AmiiboapiRetryFeature
from amiiboapi_sdk.feature.test_feature import AmiiboapiTestFeature
from amiiboapi_sdk.feature.timeout_feature import AmiiboapiTimeoutFeature


_FEATURES = {
    "base": lambda: AmiiboapiBaseFeature(),
    "ratelimit": lambda: AmiiboapiRatelimitFeature(),
    "retry": lambda: AmiiboapiRetryFeature(),
    "test": lambda: AmiiboapiTestFeature(),
    "timeout": lambda: AmiiboapiTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
