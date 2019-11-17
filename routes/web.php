<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'IndexController@index');
Route::get('/voximplant', 'IndexController@vox');
Route::get('/requests', 'RequestsController@findAll');
Route::post('/answer', 'SmsController@sendSms');
