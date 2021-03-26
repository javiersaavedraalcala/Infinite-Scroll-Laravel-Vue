<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
     
    public function index()
    {
        return Post::orderBy('id', 'DESC')->paginate(100);
    }

    public function show($slug)
    {
        return Post::where('slug', $slug)->first();
    }

}
