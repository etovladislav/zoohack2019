@component('mail::message')
# Новая заявка

Поступила новая заявка <br>
{{$text}}

@component('mail::button', ['url' => $url])
Посмотреть
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
