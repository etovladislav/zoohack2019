<?php

namespace App\Providers;

use App\Repositories\Impl\RequestRepositoryImpl;
use App\Repositories\RequestsRepository;
use App\Services\GoogleNeuralService;
use App\Services\GoogleSpeechKitService;
use App\Services\GoogleTranslateService;
use App\Services\Impl\GoogleNeuralServiceImpl;
use App\Services\Impl\GoogleSpeechKitServiceImpl;
use App\Services\Impl\GoogleTranslateServiceImpl;
use App\Services\Impl\RegionByPhoneNumberDetectorImpl;
use App\Services\Impl\SmscApiServiceImpl;
use App\Services\Impl\TextCategoryDetectorImpl;
use App\Services\Impl\VoiceRequestResolverImpl;
use App\Services\RegionByPhoneNumberDetector;
use App\Services\SmsApiService;
use App\Services\TextCategoryDetector;
use App\Services\VoiceRequestResolver;
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
        $this->app->bind(VoiceRequestResolver::class, VoiceRequestResolverImpl::class);
        $this->app->bind(RequestsRepository::class, RequestRepositoryImpl::class);
        $this->app->bind(RegionByPhoneNumberDetector::class, RegionByPhoneNumberDetectorImpl::class);
        $this->app->bind(TextCategoryDetector::class, TextCategoryDetectorImpl::class);
    }
}
