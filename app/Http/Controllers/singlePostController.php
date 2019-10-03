<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class singlePostController extends Controller
{
    public function show($article) {
        $posts = [];
        return view('single_post', compact('posts'));
    }
}
