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

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->group(
    static function () {
        Route::get('/voximplant', 'IndexController@vox');
        Route::get('/requests', 'RequestsController@findAll');
        Route::get('/requests/{id}', 'RequestsController@findById');
        Route::post('/answer', 'SmsController@sendSms');
    }
);

Route::get('/*', 'IndexController@index');
