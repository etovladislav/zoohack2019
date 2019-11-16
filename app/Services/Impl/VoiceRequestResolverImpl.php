<?php

declare(strict_types=1);

namespace App\Services\Impl;

use App\FileUtil;
use App\Repositories\RequestsRepository;
use App\Services\GoogleNeuralService;
use App\Services\GoogleSpeechKitService;
use App\Services\GoogleTranslateService;
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

    /**
     * VoiceRequestResolverImpl constructor.
     *
     * @param GoogleTranslateService $translator
     * @param GoogleSpeechKitService $speechToText
     * @param GoogleNeuralService    $textAnalyser
     * @param RequestsRepository     $repository
     */
    public function __construct(
        GoogleTranslateService $translator,
        GoogleSpeechKitService $speechToText,
        GoogleNeuralService $textAnalyser,
        RequestsRepository $repository
    ) {
        $this->translator   = $translator;
        $this->speechToText = $speechToText;
        $this->textAnalyser = $textAnalyser;
        $this->repository   = $repository;
    }

    public function execute(string $phone, string $requestAudioRecord): void
    {
        $filePath   = FileUtil::saveFromUrl($requestAudioRecord);
        $text       = $this->speechToText->speechToText(storage_path('app/public') . '/' . $filePath, null);
        $enText     = $this->translator->translate($text->getTranscription(), 'en');
        $categories = $this->textAnalyser->analyseText($enText)->getCategories();
        $this->repository->save(
            $phone,
            'Moscow',
            $text->getTranscription(),
            $text->getConfidence(),
            $categories,
            $filePath
        );
    }
}