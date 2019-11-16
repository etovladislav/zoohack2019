<?php

declare(strict_types=1);

namespace App\Repositories\Impl;

use App\Models\RequestModel;
use App\Repositories\RequestsRepository;
use Illuminate\Support\Collection;

final class RequestRepositoryImpl implements RequestsRepository
{

    public function save(
        string $phone,
        string $location,
        string $text,
        float $textConfidence,
        array $categories,
        string $voice
    ): void {
        $model                  = new RequestModel();
        $model->phone           = $phone;
        $model->location        = $location;
        $model->text            = $text;
        $model->text_confidence = $textConfidence;
        $model->categories      = $categories;
        $model->voice           = $voice;
        $model->save();
    }

    public function findAll(): Collection
    {
        return RequestModel::all();
    }
}