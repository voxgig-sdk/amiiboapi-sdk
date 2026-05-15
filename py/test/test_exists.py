# ProjectName SDK exists test

import pytest
from amiiboapi_sdk import AmiiboapiSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = AmiiboapiSDK.test(None, None)
        assert testsdk is not None
