<?php

declare(strict_types=1);

namespace App\Services;

use Illuminate\Http\UploadedFile;

interface VoiceRequestResolver
{

    public function execute(string $phone, UploadedFile $requestAudioRecord) : void ;
}
