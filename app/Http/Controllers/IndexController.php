<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Services\GoogleNeuralService;
use App\Services\GoogleSpeechKitService;

final class IndexController extends Controller
{

    public function index(
        GoogleSpeechKitService $googleSpeechKitService,
        GoogleNeuralService $googleNeuralService
    ) {
//        $text = $googleSpeechKitService->speechToText('test.flac', null)->getTranscription();
        $googleNeuralService->analyseText('Привет как дела я в Москве');
    }
}