<?php

declare(strict_types=1);

namespace App\Services\Impl;

use App\Services\GoogleTranslateService;
use Google\Cloud\Translate\V2\TranslateClient;

final class GoogleTranslateServiceImpl implements GoogleTranslateService
{

    public function translate(string $text, string $language): string
    {
        $client = new TranslateClient();
        $res    = $client->translate(
            $text,
            [
                'target' => 'en',
            ]
        );
        return $res['text'];
    }
}