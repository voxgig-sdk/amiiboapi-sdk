<?php
declare(strict_types=1);

// Amiiboapi SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class AmiiboapiFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new AmiiboapiBaseFeature();
            case "test":
                return new AmiiboapiTestFeature();
            default:
                return new AmiiboapiBaseFeature();
        }
    }
}
