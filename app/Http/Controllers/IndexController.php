<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\SettingModel;
use App\Services\GoogleNeuralService;
use App\Services\RegionByPhoneNumberDetector;
use App\Services\VoiceRequestResolver;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Psr\Log\LoggerInterface;

final class IndexController extends Controller
{
    public function index(
        RegionByPhoneNumberDetector $detector,
        GoogleNeuralService $googleNeuralService
    ) {
        return view('index');
    }

    public function vox(
        Request $request,
        VoiceRequestResolver $requestResolver,
        LoggerInterface $logger
    ): void {
        $requestResolver->execute($request->get('phone'), $request->get('media'));
    }

    public function setting(
        Request $request
    ): void {
        $model = SettingModel::query()->first();
        if ($request->hasFile('file')) {
            $request->file('file')->storePubliclyAs('path', 'file.mp3');
        }
        if ($model === null) {
            $model = new SettingModel();
        }
        $model->email = $request->get('email');
        $model->save();
        return response()->json(['response' => 'Настройки успешно загружены, товарищ']);
    }
}
