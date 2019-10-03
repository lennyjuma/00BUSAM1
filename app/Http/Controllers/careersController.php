<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class careersController extends Controller
{
    public function index() {
        $posts = [];

        return view('careers', compact('posts'));
    }
}
