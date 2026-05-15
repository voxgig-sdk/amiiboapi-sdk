<?php
declare(strict_types=1);

// Amiiboapi SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class AmiiboapiMakeContext
{
    public static function call(array $ctxmap, ?AmiiboapiContext $basectx): AmiiboapiContext
    {
        return new AmiiboapiContext($ctxmap, $basectx);
    }
}
