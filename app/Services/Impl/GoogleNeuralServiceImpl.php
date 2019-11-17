<?php

declare(strict_types=1);

namespace App\Services\Impl;

use App\Services\GoogleNeuralService;
use App\Services\Responses\GoogleNeuralAnalyseTextResponse;
use Google\Cloud\Language\Annotation;
use Google\Cloud\Language\LanguageClient;

final class GoogleNeuralServiceImpl implements GoogleNeuralService
{

    public function analyseText(string $text): GoogleNeuralAnalyseTextResponse
    {
        $client = new LanguageClient();
        /** @var Annotation $annotations */
        $annotation = $client->classifyText($text . '. ' . $text);
        $entities   = $client->analyzeEntities($text);
        $enRes      = null;
        if (!empty($entities->entitiesByType('ADDRESS'))) {
            $enRes = $entities->entitiesByType('ADDRESS')[0]['name'];
        } else {
            $enRes = '';
            foreach ($entities->entitiesByType('LOCATION') as $re) {
                $enRes .= ', ' . $re['name'];
            }
        }
        return new GoogleNeuralAnalyseTextResponse($annotation->info(), $enRes);
    }
}