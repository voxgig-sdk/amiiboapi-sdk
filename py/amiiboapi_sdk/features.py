# Amiiboapi SDK feature factory

from amiiboapi_sdk.feature.base_feature import AmiiboapiBaseFeature
from amiiboapi_sdk.feature.test_feature import AmiiboapiTestFeature


def _make_feature(name):
    features = {
        "base": lambda: AmiiboapiBaseFeature(),
        "test": lambda: AmiiboapiTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
