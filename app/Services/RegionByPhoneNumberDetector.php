<?php

declare(strict_types=1);

namespace App\Services;

interface RegionByPhoneNumberDetector
{

    public function execute(string $phone): array;
}