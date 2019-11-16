<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Services\GoogleNeuralService;
use App\Services\GoogleSpeechKitService;
use App\Services\GoogleTranslateService;

final class IndexController extends Controller
{

    public function index(
        GoogleSpeechKitService $googleSpeechKitService,
        GoogleNeuralService $googleNeuralService,
        GoogleTranslateService $googleTranslateService
    ) {
        //        $text = $googleSpeechKitService->speechToText('test.flac', null)->getTranscription();
        //        $googleNeuralService->analyseText(
        //            'Hello in the forest fire fire. I need a help. We are in dangerous situation. Hello in the forest fire fire. I need a help. We are in dangerous situation'
        //        );
        $googleTranslateService->translate('Привет я михон', 'ru');
    }
}