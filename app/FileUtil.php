<?php
declare(strict_types=1);
namespace App;
use Illuminate\Support\Facades\Storage;
use Ramsey\Uuid\Uuid;
final class FileUtil
{
    public static function saveFromUrl(string $url): string
    {
        $file     = file_get_contents(html_entity_decode($url) . '&api_key=749c3091-f103-4871-9229-a8b05425cb88');
        $fileName = Uuid::uuid4()->toString() . '.flac';
        Storage::disk('public')->put($fileName, $file);
        return $fileName;
    }
}
