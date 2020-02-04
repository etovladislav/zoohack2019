<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\RequestModel;
use Illuminate\Support\Collection;

interface RequestsRepository
{

    public function save(
        string $phone,
        string $location,
        string $text,
        float $textConfidence,
        array $categories,
        string $voice,
        string $textLocation
    ): RequestModel;

    public function findAll() : Collection;
}