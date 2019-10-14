@extends('layouts.front')
@section('title', 'Post 1')
@section('bodyClass', 'product-services-busam-cash-main')
@section('content')
    <div class="header-2" style="height: 35vh; overflow: hidden;">
        @foreach($dataObject as $article)
            <div class="div-block-22">
                <div class="text-block-46">ARTICLE</div>
                <div class="text-block-47">{{ $article->title->rendered }}</div>
            </div>
            <img src="http://kijanii.studio/wp-content/uploads/2019/10/publicaton.png" srcset="http://kijanii.studio/wp-content/uploads/2019/10/publicaton.png 500w, http://kijanii.studio/wp-content/uploads/2019/10/publicaton.png 800w, http://kijanii.studio/wp-content/uploads/2019/10/publicaton.png 1080w, http://kijanii.studio/wp-content/uploads/2019/10/publicaton.png 1600w, http://kijanii.studio/wp-content/uploads/2019/10/publicaton.png 1903w" sizes="(max-width: 1903px) 100vw, 1903px" alt="">
        @endforeach
    </div>
    <div class="base">
        <div style="padding-top: 0px;min-height: 100px;" class="columns-10 w-row">
            <div class="column-33 w-col w-col-9">
                @foreach($dataObject as $article)
                    <div style="text-align: left;">
                        {!! $article->content->rendered !!}
                    </div>
                @endforeach
            </div>
            <div style="display: none;" class="w-col w-col-3">
                <div class="text-block-50">Money Matters Articles</div>
                <div class="div-block-23">
                    <div class="text-block-51">Affordable Housing Program</div>
                    <div class="text-block-52">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                    <a href="#" class="link-4">LEARN MORE</a>
                </div>
                <div class="div-block-23">
                    <div class="text-block-51">Affordable Housing Program</div>
                    <div class="text-block-52">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                    <a href="#" class="link-4">LEARN MORE</a>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('customJS')
@endsection
