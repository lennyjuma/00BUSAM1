@extends('layouts.front')
@section('title', 'Cash')
@section('bodyClass', 'product-services-busam-cash-main')
@section('content')
    <div class="header-2">
        {{-- banner column --}}
        @foreach($banner_column as $column )
            <div class="div-block-22">
                <div class="text-block-46">GET INSTANT LOANS</div>
                <div class="text-block-47">{{ $column->title->rendered }}</div>
            </div>
            <img src="{{ $column->images->full->source_url }}"
                 srcset="{{ $column->images->medium->source_url }} 500w, {{ $column->images->full->source_url }} 800w, {{ $column->images->full->source_url }} 1080w, {{ $column->images->full->source_url }} 1600w, {{ $column->images->full->source_url }} 1903w" sizes="(max-width: 1903px) 100vw, 1903px" alt="">
        @endforeach
    </div>
    <div class="base">
        <div class="columns-10 w-row">
            <div class="column-33 w-col w-col-9">
                <div>
                    <div class="text-block-48">ABOUT BUSAM PROPERTIES</div>
                    {{--cash content--}}
                    @foreach($banner_column as $column )
                        <div class="text-block-49">
                            {!! $column->content->rendered !!}
                        </div>
                    @endforeach
                </div>
            </div>
            <div class="w-col w-col-3">
                <div class="text-block-50">Money Matters Articles</div>
                @foreach($articles as $article)
                    <div class="div-block-23">
                        <div class="text-block-51">{{ $article->title->rendered }}</div>
                        <div class="text-block-52">{!! $article->excerpt->rendered !!}</div>
                        <a href="learning/{{ $article->id }}" class="link-4">LEARN MORE</a>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
    <div class="our-promise">
        <div class="w-row">
            <div class="column-34 w-col w-col-6">
                <div class="text-block-53">DOWNLOAD APP</div>
            </div>
            <div class="column-44 w-col w-col-6">
                @foreach($banner_column as $column )
                    <a href="{{ $column->metadata->appLink[0] }}" target="_blank" class="link-5">Click to download mobile application from google play store</a>
                    <a href="{{ $column->metadata->appLink[0] }}" target="_blank" class="link-block-16 w-inline-block"><img src="images/5d6f852859e5515cb00113db_Download.png" alt="" class="image-25"></a>
                @endforeach
            </div>
        </div>
    </div>
@endsection
@section('customJS')
@endsection
