<?php

declare(strict_types=1);

namespace App\Services;

interface GoogleTranslateService
{

    public function translate(string $text, string $language): string;
}