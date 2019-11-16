<?php

namespace App\Providers;

use App\Services\GoogleNeuralService;
use App\Services\GoogleSpeechKitService;
use App\Services\GoogleTranslateService;
use App\Services\Impl\GoogleNeuralServiceImpl;
use App\Services\Impl\GoogleSpeechKitServiceImpl;
use App\Services\Impl\GoogleTranslateServiceImpl;
use App\Services\Impl\SmscApiServiceImpl;
use App\Services\SmsApiService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->bind(GoogleSpeechKitService::class, GoogleSpeechKitServiceImpl::class);
        $this->app->bind(GoogleNeuralService::class, GoogleNeuralServiceImpl::class);
        $this->app->bind(GoogleTranslateService::class, GoogleTranslateServiceImpl::class);
        $this->app->bind(SmsApiService::class, SmscApiServiceImpl::class);
    }
}
