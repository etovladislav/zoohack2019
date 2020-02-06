@component('mail::message')
# Новая заявка

Поступила новая заявка

@component('mail::button', ['url' => $url])
Посмотреть
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
