<?php

declare(strict_types=1);

namespace App\Services\Impl;

use App\Services\RegionByPhoneNumberDetector;
use GuzzleHttp\Client;

final class RegionByPhoneNumberDetectorImpl implements RegionByPhoneNumberDetector
{

    public function execute(string $phone): array
    {
        $client   = new Client();
        $response = $client->get(
            "http://apilayer.net/api/validate?access_key=d37953e3ac31d7eb73019af23600a2e2&number=$phone&country_code=RU&format=1"
        )->getBody()->getContents();
        dd($response);
    }
}