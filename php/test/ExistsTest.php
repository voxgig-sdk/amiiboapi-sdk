<?php
declare(strict_types=1);

// Amiiboapi SDK exists test

require_once __DIR__ . '/../amiiboapi_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = AmiiboapiSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
