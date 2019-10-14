@extends('layouts.front')
@section('title', 'Blog')
@section('bodyClass', 'learning')
@section('content')
    <div class="section-2" style="padding-top: 10px;">
        <div class="w-row">
            <div class="column-48 w-col w-col-8">
                <div style="height: auto;" data-animation="slide" data-duration="500" data-infinite="1" class="w-slider">
                    <div class="w-slider-mask">
                        {{--trending--}}
                        @foreach($trending as $article)
                            <div class="w-slide" style="background-image: url({{ $article->images->full->source_url }}); height: 550px;">
                                <a href="/learning/{{ $article->id }}" class="link-block-18 w-inline-block">
                                    <div class="div-block-27">
                                        <div class="text-block-62">
                                            {{ $article->title->rendered }}
                                        </div>
                                    </div>
                                </a>
                            </div>
                        @endforeach
                    </div>
                    <div class="w-slider-arrow-left">
                        <div class="w-icon-slider-left"></div>
                    </div>
                    <div class="w-slider-arrow-right">
                        <div class="w-icon-slider-right"></div>
                    </div>
                    <div class="w-slider-nav w-round"></div>
                </div>
            </div>
            <div class="w-col w-col-4">
                {{--latest--}}
                @foreach($latestSide as $article)
                    <div class="div-block-28">
                        <img src="images/note.png" alt="" class="image-19">
                        <div class="text-block-63">{{ $article->title->rendered }}</div>
                        <div class="text-block-65">{!! $article->excerpt->rendered !!}</div>
                        <a href="/learning/{{ $article->id }}" class="link-6">Learn More</a>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
    <div class="section-4">
        <div data-duration-in="300" data-duration-out="100" class="w-tabs">
            <div class="tabs-menu w-tab-menu">
                <a data-w-tab="Tab 1" class="tab-link-tab-1 w-inline-block w-tab-link">
                    <div class="text-block-66">Most Popular</div>
                </a>
                <a data-w-tab="Tab 2" class="tab-link-tab-2 w-inline-block w-tab-link w--current">
                    <div class="text-block-67">Latest</div>
                </a>
                <a data-w-tab="Tab 3" class="tab-link-tab-3 w-inline-block w-tab-link">
                    <div class="text-block-68">Trending</div>
                </a>
            </div>
            <div class="w-tab-content">
                <div data-w-tab="Tab 1" class="w-tab-pane">
                    {{--popular--}}
                    @foreach($popular->chunk(3) as $popularChunk)
                        <div class="w-row">
                            @foreach($popularChunk as $article)
                                <div class="column-38 w-col w-col-4">
                                    <a href="/learning/{{ $article->id }}" class="link-block-19 w-inline-block">
                                        <img src="{{ $article->images->full->source_url }}" style="height: 300px;" alt="">
                                        <div class="div-block-29">
                                            <div class="text-block-69">{{ $article->title->rendered }}</div>
                                        </div>
                                    </a>
                                </div>
                            @endforeach
                        </div>
                    @endforeach
                </div>
                <div data-w-tab="Tab 2" class="w-tab-pane w--tab-active">
                    {{--latest--}}
                    @foreach($latest->chunk(3) as $latestChunk)
                        <div class="w-row">
                            @foreach($latestChunk as $article)
                                <div class="column-38 w-col w-col-4">
                                    <a href="/learning/{{ $article->id }}" class="link-block-19 w-inline-block">
                                        <img src="{{ $article->images->full->source_url }}" style="height: 300px;" alt="">
                                        <div class="div-block-29">
                                            <div class="text-block-69">{{ $article->title->rendered }}</div>
                                        </div>
                                    </a>
                                </div>
                            @endforeach
                        </div>
                    @endforeach
                </div>
                <div data-w-tab="Tab 3" class="w-tab-pane">
                    {{--trending--}}
                    @foreach($trending->chunk(3) as $trendingChunk)
                        <div class="w-row">
                            @foreach($trendingChunk as $article)
                                <div class="column-38 w-col w-col-4">
                                    <a href="/learning/{{ $article->id }}" class="link-block-19 w-inline-block">
                                        <img src="{{ $article->images->full->source_url }}" style="height: 300px;" alt="">
                                        <div class="div-block-29">
                                            <div class="text-block-69">{{ $article->title->rendered }}</div>
                                        </div>
                                    </a>
                                </div>
                            @endforeach
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
@endsection
@section('customJS')
@endsection
