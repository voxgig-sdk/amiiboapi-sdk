<?php
declare(strict_types=1);

// Amiiboapi SDK base feature

class AmiiboapiBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(AmiiboapiContext $ctx, array $options): void {}
    public function PostConstruct(AmiiboapiContext $ctx): void {}
    public function PostConstructEntity(AmiiboapiContext $ctx): void {}
    public function SetData(AmiiboapiContext $ctx): void {}
    public function GetData(AmiiboapiContext $ctx): void {}
    public function GetMatch(AmiiboapiContext $ctx): void {}
    public function SetMatch(AmiiboapiContext $ctx): void {}
    public function PrePoint(AmiiboapiContext $ctx): void {}
    public function PreSpec(AmiiboapiContext $ctx): void {}
    public function PreRequest(AmiiboapiContext $ctx): void {}
    public function PreResponse(AmiiboapiContext $ctx): void {}
    public function PreResult(AmiiboapiContext $ctx): void {}
    public function PreDone(AmiiboapiContext $ctx): void {}
    public function PreUnexpected(AmiiboapiContext $ctx): void {}
}
