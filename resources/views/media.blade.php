@extends('layouts.front')
@section('title', 'Media')
@section('bodyClass', 'product-services-busam-cash-main')
@section('content')
    <div class="header-2">
        {{-- banner column --}}
        <div data-animation="slide" data-duration="500" data-infinite="1" class="w-slider">
            <div class="w-slider-mask">
                @foreach($banner_column as $column )
                    <div class="w-slide">
                        <div>
                            <div class="div-block-35" style="line-height: 2;">
                                <div class="text-block-76">{{ $column->title->rendered }}</div>
                                <div class="text-block-77">Location info: {{ $column->metadata->gps[0] ?? '0.0, 0.0'}}</div>
                                <a href="/media/{{ $column->id }}" class="button-3 w-button">Watch Video</a>
                            </div>
                        </div>
                        <img
                            src="{{ $column->images->full->source_url }}"
                            srcset="{{ $column->images->medium->source_url }} 500w, {{ $column->images->full->source_url }} 800w, {{ $column->images->full->source_url }} 1080w, {{ $column->images->full->source_url }} 1600w, {{ $column->images->full->source_url }} 1903w"
                            sizes="(max-width: 1903px) 100vw, 1903px"
                            alt="">
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
    <div class="base">
        <div data-animation="slide" data-duration="500" data-infinite="1" class="slider-4 w-slider">
            <div class="w-slider-mask">
                {{--latest--}}
                @foreach($medias->chunk(6) as $mediaChunk)
                    <div class="slide-10 w-slide">
                        <div class="w-row">
                            @foreach($mediaChunk as $article)
                                <div class="column-49 w-col w-col-2">
                                    <a href="/media/{{ $article->id }}" class="link-block-20 w-inline-block">
                                        <div class="div-block-37">
                                            <img src="{{ $article->images->thumbnail->source_url }}" alt="">
                                            <div class="div-block-36">
                                                <div>{{ $article->title->rendered }}</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            @endforeach
                        </div>
                    </div>
                @endforeach
            </div>
            <div class="w-slider-arrow-left">
                <div class="icon-2 w-icon-slider-left"></div>
            </div>
            <div class="w-slider-arrow-right">
                <div class="icon-3 w-icon-slider-right"></div>
            </div>
            <div class="w-slider-nav w-round"></div>
        </div>
    </div>
@endsection
@section('customJS')
@endsection
