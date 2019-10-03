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

use App\Http\Controllers\landingController;

Route::get('/', 'landingController@index')->name('landing.index');

Route::get('/about', 'aboutController@index')->name('about.index');

Route::get('/properties', 'propertiesController@index')->name('properties.index');

Route::get('/cash', 'cashController@index')->name('cash.index');

Route::get('/capital', 'capitalController@index')->name('capital.index');

Route::get('/learning', 'learningController@index')->name('learning.index');

Route::get('/learning/{article}', 'singlePostController@show')->name('learning.show');

Route::get('/media', 'mediaController@index')->name('media.index');

Route::get('/media/{video}', 'singleVideoController@show')->name('careers.show');

Route::get('/careers', 'careersController@index')->name('careers.index');

Route::get('/careers/{career}', 'singleCareerController@show')->name('careers.show');

Route::get('/support', 'supportController@index')->name('support.index');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home.index');
