<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class mediaController extends Controller
{
    public function index() {
        $posts = [];

        return view('media', compact('posts'));
    }
}
