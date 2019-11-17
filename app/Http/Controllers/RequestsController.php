<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\RequestModel;
use App\Repositories\RequestsRepository;

final class RequestsController
{

    public function findAll(
        RequestsRepository $repository
    ) {
        return $repository->findAll();
    }

    public function findById(
        string $id
    ) {
        return RequestModel::find($id);
    }
}