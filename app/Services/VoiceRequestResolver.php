<?php

declare(strict_types=1);

namespace App\Services;

interface VoiceRequestResolver
{

    public function execute(string $phone, string $requestAudioRecord) : void ;
}