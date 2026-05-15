<?php
declare(strict_types=1);

// Amiiboapi SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

AmiiboapiUtility::setRegistrar(function (AmiiboapiUtility $u): void {
    $u->clean = [AmiiboapiClean::class, 'call'];
    $u->done = [AmiiboapiDone::class, 'call'];
    $u->make_error = [AmiiboapiMakeError::class, 'call'];
    $u->feature_add = [AmiiboapiFeatureAdd::class, 'call'];
    $u->feature_hook = [AmiiboapiFeatureHook::class, 'call'];
    $u->feature_init = [AmiiboapiFeatureInit::class, 'call'];
    $u->fetcher = [AmiiboapiFetcher::class, 'call'];
    $u->make_fetch_def = [AmiiboapiMakeFetchDef::class, 'call'];
    $u->make_context = [AmiiboapiMakeContext::class, 'call'];
    $u->make_options = [AmiiboapiMakeOptions::class, 'call'];
    $u->make_request = [AmiiboapiMakeRequest::class, 'call'];
    $u->make_response = [AmiiboapiMakeResponse::class, 'call'];
    $u->make_result = [AmiiboapiMakeResult::class, 'call'];
    $u->make_point = [AmiiboapiMakePoint::class, 'call'];
    $u->make_spec = [AmiiboapiMakeSpec::class, 'call'];
    $u->make_url = [AmiiboapiMakeUrl::class, 'call'];
    $u->param = [AmiiboapiParam::class, 'call'];
    $u->prepare_auth = [AmiiboapiPrepareAuth::class, 'call'];
    $u->prepare_body = [AmiiboapiPrepareBody::class, 'call'];
    $u->prepare_headers = [AmiiboapiPrepareHeaders::class, 'call'];
    $u->prepare_method = [AmiiboapiPrepareMethod::class, 'call'];
    $u->prepare_params = [AmiiboapiPrepareParams::class, 'call'];
    $u->prepare_path = [AmiiboapiPreparePath::class, 'call'];
    $u->prepare_query = [AmiiboapiPrepareQuery::class, 'call'];
    $u->result_basic = [AmiiboapiResultBasic::class, 'call'];
    $u->result_body = [AmiiboapiResultBody::class, 'call'];
    $u->result_headers = [AmiiboapiResultHeaders::class, 'call'];
    $u->transform_request = [AmiiboapiTransformRequest::class, 'call'];
    $u->transform_response = [AmiiboapiTransformResponse::class, 'call'];
});
