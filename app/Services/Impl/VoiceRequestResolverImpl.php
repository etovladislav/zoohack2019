<?php

declare(strict_types=1);

namespace App\Services\Impl;

use App\FileUtil;
use App\Repositories\RequestsRepository;
use App\Services\GoogleNeuralService;
use App\Services\GoogleSpeechKitService;
use App\Services\GoogleTranslateService;
use App\Services\RegionByPhoneNumberDetector;
use App\Services\TextCategoryDetector;
use App\Services\VoiceRequestResolver;

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
     * @param GoogleTranslateService      $translator
     * @param GoogleSpeechKitService      $speechToText
     * @param GoogleNeuralService         $textAnalyser
     * @param RequestsRepository          $repository
     * @param RegionByPhoneNumberDetector $regionDetector
     * @param TextCategoryDetector        $textCategoryDetector
     */
    public function __construct(
        GoogleTranslateService $translator,
        GoogleSpeechKitService $speechToText,
        GoogleNeuralService $textAnalyser,
        RequestsRepository $repository,
        RegionByPhoneNumberDetector $regionDetector,
        TextCategoryDetector $textCategoryDetector
    ) {
        $this->translator           = $translator;
        $this->speechToText         = $speechToText;
        $this->textAnalyser         = $textAnalyser;
        $this->repository           = $repository;
        $this->regionDetector       = $regionDetector;
        $this->textCategoryDetector = $textCategoryDetector;
    }

    public function execute(string $phone, string $requestAudioRecord): void
    {
        $filePath           = FileUtil::saveFromUrl($requestAudioRecord);
        $text               = $this->speechToText->speechToText(storage_path('app/public') . '/' . $filePath, null);
        $enText             = $this->translator->translate($text->getTranscription(), 'en');
        $analysedText       = $this->textAnalyser->analyseText($enText);
        $categories         = $analysedText->getCategories();
        $region             = $this->regionDetector->execute($phone);
        $internalCategories = $this->textCategoryDetector->execute($enText);
        $textLocation       = $analysedText->getEntites();
        foreach ($internalCategories as $item) {
            $categories['categories'][] = ['name' => $item, 'confidence' => 0.8];
        }
        $this->repository->save(
            $phone,
            $region['country_name'] . ', ' . $region['location'],
            $text->getTranscription(),
            $text->getConfidence() * 100,
            $categories,
            $filePath,
            $textLocation
        );
    }
}