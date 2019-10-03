<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class singleVideoController extends Controller
{
    public function show($video) {
        $posts = [];
        return view('single_video', compact('posts'));
    }
}
