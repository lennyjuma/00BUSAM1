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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/about', function () {
    return view('welcome');
});

Route::get('/properties', function () {
    return view('welcome');
});

Route::get('/cash', function () {
    return view('welcome');
});

Route::get('/capital', function () {
    return view('welcome');
});

Route::get('/learning', function () {
    return view('welcome');
});

Route::get('/media', function () {
    return view('welcome');
});

Route::get('/careers', function () {
    return view('welcome');
});

Route::get('/support', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
