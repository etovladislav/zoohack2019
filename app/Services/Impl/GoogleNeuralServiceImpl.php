<?php

declare(strict_types=1);

namespace App\Services\Impl;

use App\Services\GoogleNeuralService;
use App\Services\Responses\GoogleNeuralAnalyseTextResponse;
use Google\Cloud\Language\LanguageClient;

final class GoogleNeuralServiceImpl implements GoogleNeuralService
{

    public function analyseText(string $text): GoogleNeuralAnalyseTextResponse
    {
        $client     = new LanguageClient();
        $annotation = $client->analyzeSentiment($text);
        dd($annotation);
    }
}