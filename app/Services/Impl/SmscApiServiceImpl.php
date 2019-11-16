<?php

declare(strict_types=1);

namespace App\Services\Impl;

use App\Services\SmsApiService;
use GuzzleHttp\Client;

class SmscApiServiceImpl implements SmsApiService
{
    private const URL = "https://smsc.ru/sys/send.php";
    private $login;
    private $password;
    private $errors = [
        1 => 'Ошибка в параметрах.',
        2 => 'Неверный логин или пароль.',
        3 => 'Недостаточно средств на счете Клиента.',
        4 => 'IP-адрес временно заблокирован из-за частых ошибок в запросах. Подробнее',
        5 => 'Неверный формат даты.',
        6 => 'Сообщение запрещено (по тексту или по имени отправителя).',
        7 => 'Неверный формат номера телефона.',
        8 => 'Сообщение на указанный номер не может быть доставлено.',
        9 => 'Try again later',
    ];

    /**
     * UniSenderSmsApiServiceImpl constructor.
     */
    public function __construct()
    {
        $this->login    = config('sms_service.login');
        $this->password = config('sms_service.password');
    }

    /**
     * Call api method
     *
     * @param $phone
     * @param $text
     *
     * @return mixed|\Psr\Http\Message\ResponseInterface
     */
    public function sendSms($phone, $text): void
    {
        $client = new Client();
        $params = [
            'form_params' => [
                'login'   => $this->login,
                'psw'     => $this->password,
                'phones'  => $phone,
                'mes'     => mb_convert_encoding($text, "UTF-8"),
                'charset' => 'utf-8',
            ],
        ];

        $response = $client->request('POST', self::URL, $params);
    }
}
