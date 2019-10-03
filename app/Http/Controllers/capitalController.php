<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class capitalController extends Controller
{
    public function index() {
        $posts = [];

        return view('capital', compact('posts'));
    }
}
