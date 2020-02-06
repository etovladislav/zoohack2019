<?php

declare(strict_types=1);

namespace App\Services\Impl;

use App\FileUtil;
use App\Mail\NewRequest;
use App\Models\SettingModel;
use App\Repositories\RequestsRepository;
use App\Services\GoogleNeuralService;
use App\Services\GoogleSpeechKitService;
use App\Services\GoogleTranslateService;
use App\Services\RegionByPhoneNumberDetector;
use App\Services\TextCategoryDetector;
use App\Services\VoiceRequestResolver;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Mail;

final class VoiceRequestResolverImpl implements VoiceRequestResolver
{
    /** @var GoogleTranslateService */
    private $translator;
    /** @var GoogleSpeechKitService */
    private $speechToText;
    /** @var GoogleNeuralService */
    private $textAnalyser;
    /** @var RequestsRepository */
    private $repository;
    /** @var RegionByPhoneNumberDetector */
    private $regionDetector;
    /** @var TextCategoryDetector */
    private $textCategoryDetector;

    /**
     * VoiceRequestResolverImpl constructor.
     *
     * @param GoogleTranslateService $translator
     * @param GoogleSpeechKitService $speechToText
     * @param GoogleNeuralService $textAnalyser
     * @param RequestsRepository $repository
     * @param RegionByPhoneNumberDetector $regionDetector
     * @param TextCategoryDetector $textCategoryDetector
     */
    public function __construct(
        GoogleTranslateService $translator,
        GoogleSpeechKitService $speechToText,
        GoogleNeuralService $textAnalyser,
        RequestsRepository $repository,
        RegionByPhoneNumberDetector $regionDetector,
        TextCategoryDetector $textCategoryDetector
    )
    {
        $this->translator = $translator;
        $this->speechToText = $speechToText;
        $this->textAnalyser = $textAnalyser;
        $this->repository = $repository;
        $this->regionDetector = $regionDetector;
        $this->textCategoryDetector = $textCategoryDetector;
    }

    public function execute(string $phone, string $requestAudioRecord): void
    {
        list($flacFile, $mp3File) = FileUtil::saveFromUrl($requestAudioRecord);
        $storagePath = storage_path('app/public');
        exec("ffmpeg -i $storagePath/$flacFile $storagePath/$mp3File");
        $text = $this->speechToText->speechToText($storagePath . '/' . $flacFile, null);
        $enText = $this->translator->translate($text->getTranscription(), 'en');
        $analysedText = $this->textAnalyser->analyseText($enText);
        $categories = $analysedText->getCategories();
        $region = $this->regionDetector->execute($phone);
        $internalCategories = $this->textCategoryDetector->execute($enText);
        $textLocation = $analysedText->getEntites();
        foreach ($internalCategories as $item) {
            $categories['categories'][] = ['name' => $item, 'confidence' => 0.8];
        }
        $model = $this->repository->save(
            $phone,
            $region['country_name'] . ', ' . $region['location'],
            $text->getTranscription(),
            $text->getConfidence() * 100,
            $categories,
            $mp3File,
            $textLocation
        );
        Mail::to(SettingModel::query()->first()->email)->send(
            new NewRequest(
                'www.problem-support.com/card/' . $model->id, $text->getTranscription()
            )
        );
    }
}
