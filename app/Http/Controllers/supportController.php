<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class supportController extends Controller
{
    public function index() {
        $posts = [];

        return view('support', compact('posts'));
    }
}
