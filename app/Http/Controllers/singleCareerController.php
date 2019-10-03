<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class singleCareerController extends Controller
{
    public function show($career) {
        $posts = [];

        return view('single_career', compact('posts'));
    }
}
