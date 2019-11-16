<?php

declare(strict_types=1);

namespace App\Services\Responses;

final class GoogleNeuralAnalyseTextResponse
{
    /** @var array */
    private $categories;

    /**
     * GoogleNeuralAnalyseTextResponse constructor.
     *
     * @param array $categories
     */
    public function __construct(array $categories) { $this->categories = $categories; }

    /**
     * @return array
     */
    public function getCategories(): array
    {
        return $this->categories;
    }
}