<?php

declare(strict_types=1);

namespace App\Services;

use App\Services\Responses\GoogleNeuralAnalyseTextResponse;

interface GoogleNeuralService
{
    public function analyseText(string $text): GoogleNeuralAnalyseTextResponse;
}