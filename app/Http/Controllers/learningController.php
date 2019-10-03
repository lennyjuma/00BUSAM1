<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class learningController extends Controller
{
    public function index() {
        $posts = [];

        return view('learning', compact('posts'));
    }
}
