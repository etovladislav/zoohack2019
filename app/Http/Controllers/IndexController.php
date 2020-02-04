<?php

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

    public function settingGet()
    {
        return SettingModel::query()->first();
    }

    public function setting(
        Request $request
    ) {
        $model = SettingModel::query()->first();
        if ($request->hasFile('file')) {
            Storage::disk('public')->put('file.mp3', $request->file('file'));

            $request->file('file')->storeAs(storage_path('app/public'), 'file.mp3');
        }
        if ($model === null) {
            $model = new SettingModel();
        }
        $model->email = $request->get('email');
        $model->save();
        return response()->json(['response' => 'Настройки успешно загружены, товарищ']);
    }
}
