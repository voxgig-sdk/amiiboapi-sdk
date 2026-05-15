<?php
declare(strict_types=1);

// Amiiboapi SDK utility: feature_add

class AmiiboapiFeatureAdd
{
    public static function call(AmiiboapiContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
