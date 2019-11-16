<?php

declare(strict_types=1);

namespace App\Services\Responses;

final class GoogleSpeechToTextResponse
{
    /** @var string */
    private $transcription;
    /** @var float */
    private $confidence;

    /**
     * GoogleSpeechToTextResponse constructor.
     *
     * @param string $transcription
     * @param float  $confidence
     */
    public function __construct(string $transcription, float $confidence)
    {
        $this->transcription = $transcription;
        $this->confidence    = $confidence;
    }

    /**
     * @return string
     */
    public function getTranscription(): string
    {
        return $this->transcription;
    }

    /**
     * @return float
     */
    public function getConfidence(): float
    {
        return $this->confidence;
    }
}