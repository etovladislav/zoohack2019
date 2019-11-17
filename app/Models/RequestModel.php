<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

final class RequestModel extends Model
{
    protected $table = 'requests';
    protected $fillable = ['*'];
    protected $casts = [
        'categories' => 'array',
    ];
}