<?php
declare(strict_types=1);

// Amiiboapi SDK utility: prepare_body

class AmiiboapiPrepareBody
{
    public static function call(AmiiboapiContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
