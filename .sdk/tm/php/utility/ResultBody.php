<?php
declare(strict_types=1);

// Amiiboapi SDK utility: result_body

class AmiiboapiResultBody
{
    public static function call(AmiiboapiContext $ctx): ?AmiiboapiResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
