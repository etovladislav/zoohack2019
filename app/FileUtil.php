<?php

declare(strict_types=1);

namespace App;

use Illuminate\Support\Facades\Storage;
use Ramsey\Uuid\Uuid;

final class FileUtil
{

    public static function saveFromUrl(string $url): string
    {
        $file     = file_get_contents($url);
        $fileName = Uuid::uuid4()->toString() . '.flac';
        Storage::disk('public')->put($fileName, $file);
        return $fileName;
    }
}