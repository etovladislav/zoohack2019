<?php

declare(strict_types=1);

namespace App\Services;

interface SmsApiService
{
    public function sendSms($phone, $text): void;
}