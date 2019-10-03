@extends('layouts.front')
@section('title', 'Properties')
@section('bodyClass', 'body')
@section('content')
    <div class="header-2">
        {{-- banner column --}}
        @foreach($banner_column as $column )
            <div class="div-block-22">
                <div class="text-block-46">OWN A PIECE OF LAND</div>
                <div class="text-block-47">{{ $column->title->rendered }}</div>
            </div>
            <img src="{{ $column->images->full->source_url }}" srcset="{{ $column->images->medium->source_url }} 500w, {{ $column->images->full->source_url }} 800w, {{ $column->images->full->source_url }} 1080w, {{ $column->images->full->source_url }} 1600w, {{ $column->images->full->source_url }} 1903w" sizes="(max-width: 1903px) 100vw, 1903px" alt="">
        @endforeach
    </div>
    <div class="base">
        <div class="columns-10 w-row">
            <div class="column-33 w-col w-col-9">
                <div>
                    <div class="text-block-48">ABOUT BUSAM PROPERTIES</div>
                    {{--properties content--}}
                    @foreach($banner_column as $column )
                        <div class="text-block-49">
                            {!! $column->content->rendered !!}
                        </div>
                    @endforeach
                </div>
            </div>
            <div class="column-41 w-col w-col-3">
                <div class="text-block-50">Housing Articles</div>
                <div class="div-block-23">
                    <div class="text-block-51">Affordable Housing Program</div>
                    <div class="text-block-52">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div><a href="single.html" class="link-4">LEARN MORE</a></div>
                <div class="div-block-23">
                    <div class="text-block-51">Affordable Housing Program</div>
                    <div class="text-block-52">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div><a href="single.html" class="link-4">LEARN MORE</a></div>
            </div>
        </div>
    </div>
    <div>
        <div class="div-block-25">
            <div class="text-block-58">FILTER THROUGH OUR PROPERTIES</div>
        </div>
        <div data-duration-in="300" data-duration-out="100" class="w-tabs">
            <div class="w-tab-menu">
                <a data-w-tab="Tab 1" class="w-inline-block w-tab-link w--current">
                    <div class="text-block-71">Plots of Land Available</div>
                </a>
                <a data-w-tab="Tab 2" class="w-inline-block w-tab-link">
                    <div class="text-block-72">Properties for Sale</div>
                </a>
            </div>
            <div class="w-tab-content">
                <div data-w-tab="Tab 1" class="w-tab-pane w--tab-active">
                    <div data-animation="slide" data-duration="500" data-infinite="1" class="slider-3 w-slider">
                        <div class="w-slider-mask">
                            @foreach($plots->chunk(3) as $plotsChunk)
                                <div class="w-slide">
                                    <div class="columns-13 w-row">
                                        @foreach($plotsChunk as $plot)
                                            <div class="column-35 w-col w-col-4">
                                                <a href="#" class="link-block-17 w-inline-block">
                                                    <img src="{{ $plot->image }}" alt="" class="image-20">
                                                    <div class="div-block-26">
                                                        <div>Plot name: {{ $plot->title->rendered }}</div>
                                                        <div>Location info: {{ $plot->metadata->gps[0] }}</div>
                                                    </div>
                                                </a>
                                            </div>
                                        @endforeach
                                    </div>
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
                <div data-w-tab="Tab 2" class="w-tab-pane">
                    <div data-animation="slide" data-duration="500" data-infinite="1" class="slider-3 w-slider">
                        <div class="w-slider-mask">
                            @foreach($sale->chunk(3) as $saleChunk)
                                <div class="w-slide">
                                    <div class="columns-13 w-row">
                                        @foreach($saleChunk as $sales)
                                            <div class="column-35 w-col w-col-4">
                                                <a href="#" class="link-block-17 w-inline-block">
                                                    <img src="{{ $sales->image }}" alt="">
                                                    <div class="div-block-26">
                                                        <div>Plot name: {{ $sales->title->rendered }}</div>
                                                        <div>Location info: {{ $sales->metadata->gps[0] }}</div>
                                                    </div>
                                                </a>
                                            </div>
                                        @endforeach
                                    </div>
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
            </div>
        </div>
    </div>
@endsection
@section('customJS')
@endsection
