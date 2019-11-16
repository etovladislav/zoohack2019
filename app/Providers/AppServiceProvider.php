<?php

namespace App\Providers;

use App\Services\GoogleNeuralService;
use App\Services\GoogleSpeechKitService;
use App\Services\Impl\GoogleNeuralServiceImpl;
use App\Services\Impl\GoogleSpeechKitServiceImpl;
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
    }
}
