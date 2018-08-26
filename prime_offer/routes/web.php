<?php


Route::get('/', function () {
    return view('welcome');
});

Route::get('/thanks', function () {
    return view('thanks');
});

Route::get('/contact', function () {
    return view('contact');
});

