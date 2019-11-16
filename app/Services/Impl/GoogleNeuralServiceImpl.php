<?php

declare(strict_types=1);

namespace App\Services\Impl;

use App\Services\GoogleNeuralService;
use App\Services\Responses\GoogleNeuralAnalyseTextResponse;
use Google\Cloud\Language\Annotation;
use Google\Cloud\Language\LanguageClient;
use Illuminate\Support\Facades\Log;

final class GoogleNeuralServiceImpl implements GoogleNeuralService
{

    public function analyseText(string $text): GoogleNeuralAnalyseTextResponse
    {
        $client = new LanguageClient();
        /** @var Annotation $annotations */
        $annotation = $client->classifyText($text . '. ' . $text);
        Log::info(
            'Test',
            [
                'text' => $text,
                'resp' => $annotation->categories(),
            ]
        );
        return new GoogleNeuralAnalyseTextResponse($annotation->info());
    }
}