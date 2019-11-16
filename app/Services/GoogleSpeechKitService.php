<?php

declare(strict_types=1);

namespace App\Services;

use App\Services\Responses\GoogleSpeechToTextResponse;

interface GoogleSpeechKitService
{
    public function speechToText(string $audioPath, ?string $language): GoogleSpeechToTextResponse;
}