<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\RequestModel;
use App\Services\SmsApiService;
use Illuminate\Http\Request;

final class SmsController extends Controller
{
    public function sendSms(
        Request $request,
        SmsApiService $apiService
    ): void {
        RequestModel::where('id', $request->get('id'))->update(['answer' => $request->get('text')]);
        $apiService->sendSms($request->get('phone'), $request->get('text'));
    }
}