<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NewRequest extends Mailable
{
    use Queueable, SerializesModels;

    private $url;

    private $text;

    /**
     * NewRequest constructor.
     *
     * @param $url
     * @param $text
     */
    public function __construct($url, $text)
    {
        $this->url  = $url;
        $this->text = $text;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from(env('MAIL_USERNAME'))->markdown(
            'emails.new_request',
            [
                'url'  => $this->url,
                'text' => $this->text,
            ]
        );
    }
}
