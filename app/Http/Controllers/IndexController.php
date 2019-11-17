<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Services\GoogleNeuralService;
use App\Services\RegionByPhoneNumberDetector;
use App\Services\VoiceRequestResolver;
use Illuminate\Http\Request;
use Psr\Log\LoggerInterface;

final class IndexController extends Controller
{
    public function index(
        RegionByPhoneNumberDetector $detector,
        GoogleNeuralService $googleNeuralService
    ) {
        return view('index');
    }

    public function vox(
        Request $request,
        VoiceRequestResolver $requestResolver,
        LoggerInterface $logger
    ): void {
        $requestResolver->execute($request->get('phone'), $request->get('media'));
    }
}