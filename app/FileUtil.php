<?php

declare(strict_types=1);

namespace App;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Ramsey\Uuid\Uuid;

final class FileUtil
{

    public static function saveFromUrl(UploadedFile $file): string
    {
        $fileName = Uuid::uuid4()->toString() . '.flac';
        Storage::disk('public')->put($fileName, $file);
        return $fileName;
    }
}
