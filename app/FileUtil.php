<?php
declare(strict_types=1);

namespace App;

use Ramsey\Uuid\Uuid;

final class FileUtil
{
    public static function saveFromUrl(string $url): array
    {
        sleep(5);
        $fileName = Uuid::uuid4()->toString();
        $filepath = storage_path('app/public/' . $fileName . '.flac');
        $fp = fopen($filepath, 'w+');
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_FILE, $fp);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_exec($ch);
        curl_close($ch);
        fclose($fp);

        return ["$filepath/$fileName.flac", "$filepath/$fileName.mp3"];
    }
}
