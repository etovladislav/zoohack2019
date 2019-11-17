<?php

declare(strict_types=1);

namespace App\Services\Responses;

final class GoogleNeuralAnalyseTextResponse
{
    /** @var array */
    private $categories;
    /** @var string */
    private $entites;

    /**
     * GoogleNeuralAnalyseTextResponse constructor.
     *
     * @param array  $categories
     * @param string $entites
     */
    public function __construct(array $categories, string $entites)
    {
        $this->categories = $categories;
        $this->entites    = $entites;
    }

    /**
     * @return array
     */
    public function getCategories(): array
    {
        return $this->categories;
    }

    /**
     * @return string
     */
    public function getEntites(): string
    {
        return $this->entites;
    }
}