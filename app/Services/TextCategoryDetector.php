<?php

declare(strict_types=1);

namespace App\Services;

interface TextCategoryDetector
{

    public function execute(string $text): array;
}