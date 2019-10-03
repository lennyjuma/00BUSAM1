@extends('layouts.front')
@section('title', 'About')
@section('bodyClass', 'product-services-busam-cash-main')
@section('content')
    <div class="header-2">
        {{-- banner column --}}
        @foreach($banner_column as $column )
            <div class="div-block-22">
                <div class="text-block-46">ABOUT US</div>
                <div class="text-block-47">{{ $column->title->rendered }}</div>
            </div>
            <img src="{{ $column->images->full->source_url }}" srcset="{{ $column->images->medium->source_url }} 500w, {{ $column->images->full->source_url }} 800w, {{ $column->images->full->source_url }} 1080w, {{ $column->images->full->source_url }} 1600w, {{ $column->images->full->source_url }} 1903w" sizes="(max-width: 1903px) 100vw, 1903px" alt="">
        @endforeach
    </div>
    <div class="base">
        <div class="columns-10 w-row">
            <div class="column-33 w-col w-col-9">
                <div>
                    <div class="text-block-48">ABOUT US.</div>
                    {{--about content--}}
                    @foreach($banner_column as $column )
                        <div class="text-block-49">
                            {!! $column->content->rendered !!}
                        </div>
                    @endforeach
                </div>
            </div>
            <div class="w-col w-col-3">
                <div class="text-block-50">Money Matters Articles</div>
                <div class="div-block-23">
                    <div class="text-block-51">Affordable Housing Program</div>
                    <div class="text-block-52">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div><a href="#" class="link-4">LEARN MORE</a>
                </div>
                <div class="div-block-23">
                    <div class="text-block-51">Affordable Housing Program</div>
                    <div class="text-block-52">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div><a href="#" class="link-4">LEARN MORE</a>
                </div>
            </div>
        </div>
    </div>
    <div class="our-promise">
        <div class="columns-12 w-row">
            <div class="w-col w-col-3">
                <div class="text-block-55">our CULTURE</div>
            </div>
            <div class="w-col w-col-3">
                <div class="text-block-57">Our Purpose</div>
                <div class="text-block-56">Our purpose is to provide quality services that exceeds the expectations of our esteemed customers.</div>
            </div>
            <div class="w-col w-col-3">
                <div class="text-block-57">Our Vision</div>
                <div class="text-block-56">To be a leader in the real estate industry by providing enhanced services, relationship and profitability.</div>
            </div>
            <div class="w-col w-col-3">
                <div class="text-block-57">Our Mission</div>
                <div class="text-block-56">To build long term relationships with our customers and clients and provide exceptional customer services by pursuing business through innovation and  advanced technology.</div>
            </div>
        </div>
    </div>
    <div class="section-5">
        <div class="text-block-75">Meet The Team</div>
        @foreach($team->chunk(4) as $teamChunk)
            <div class="columns-15 w-row">
                @foreach($teamChunk as $team)
                    <div class="w-col w-col-3">
                        <div>
                            <a href="#" class="link-block-3 w-inline-block">
                                <img src="{{ $team->image }}" alt="">
                            </a>
                            <a href="#" class="link-block-4 w-inline-block">
                                <div class="div-block-32">
                                    <div class="text-block-17">{{ $team->title->rendered }}</div>
                                    <div class="text-block-18">Chairman <br></div>
                                    <div class="text-block-18-copy">Contact Details<br></div>
                                    <div class="div-block-33"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                @endforeach
            </div>
        @endforeach
    </div>
@endsection
@section('customJS')
@endsection
