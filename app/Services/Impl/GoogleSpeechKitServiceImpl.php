<?php

declare(strict_types=1);

namespace App\Services\Impl;

use App\Services\GoogleSpeechKitService;
use App\Services\Responses\GoogleSpeechToTextResponse;
use Google\Cloud\Speech\V1\RecognitionAudio;
use Google\Cloud\Speech\V1\RecognitionConfig;
use Google\Cloud\Speech\V1\RecognitionConfig\AudioEncoding;
use Google\Cloud\Speech\V1\SpeechClient;

final class GoogleSpeechKitServiceImpl implements GoogleSpeechKitService
{

    public function speechToText(string $audioPath, ?string $language): GoogleSpeechToTextResponse
    {
        $file         = storage_path("app/$audioPath");
        $encoding     = AudioEncoding::FLAC;
        $languageCode = $language ?? 'ru-RU';
        $content      = file_get_contents($file);
        $audio        = (new RecognitionAudio())->setContent($content);
        $config       =
            (new RecognitionConfig())->setEncoding($encoding)->setAudioChannelCount(2)->setLanguageCode($languageCode);
        $client       = new SpeechClient();
        try {
            $response   = $client->recognize($config, $audio);
            $transcript = '';
            $confidence = 0.0;
            foreach ($response->getResults() as $result) {
                $alternatives = $result->getAlternatives();
                $mostLikely   = $alternatives[0];
                $transcript   .= ' ' . $mostLikely->getTranscript();
                $confidence   = $mostLikely->getConfidence();
            }
            return new GoogleSpeechToTextResponse($transcript, $confidence);
        } finally {
            $client->close();
        }
    }
}