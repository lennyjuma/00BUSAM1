@extends('layouts.front')
@section('title', 'Home')
@section('bodyClass', 'home')
@section('content')
    {{--Top Banner--}}
    <div class="header">
        <div class="div-block-19">
            <div>
                <div class="text-block-3 text-block-4">I’m Looking For</div>
            </div>
            <div data-delay="0" class="w-dropdown">
                <div class="dropdown-toggle-2 w-dropdown-toggle">
                    <div class="text-block-70">see my options</div>
                </div>
                <nav class="w-dropdown-list"><a href="properties" class="props w-dropdown-link">Buy a Property</a><a href="cash" class="prop2 w-dropdown-link">Get a Small Loan</a><a href="capital" class="prop3 w-dropdown-link">Fund an Investment</a></nav>
            </div>
        </div>
        <div data-delay="4000" data-animation="slide" data-autoplay="1" data-duration="500" data-infinite="1" class="slider-2 w-slider">
            <div class="mask w-slider-mask">
                <?php $count = 6;?>
                @foreach($top_banners as $banner)
                    <div style="background-image: url({{ $banner->images->full->source_url }});" class="slide-{{ $count }} w-slide">
                        <div>
                            <div class="text-block-5">{{ $banner->title->rendered }}</div>
                        </div>
                    </div>
                <?php $count++ ?>
                @endforeach
            </div>
            <div class="w-slider-arrow-left">
                <div class="w-icon-slider-left"></div>
            </div>
            <div class="w-slider-arrow-right">
                <div class="w-icon-slider-right"></div>
            </div>
            <div class="slide-nav-2 w-slider-nav w-round"></div>
        </div>
    </div>
    {{-- Short Description --}}
    <div class="header-2-columns w-row">
        <div class="column w-col w-col-4">
            {{-- Property --}}
            @foreach($property as $property_description )
                <h3 class="busam-properties">{{ $property_description->title->rendered }}</h3>
                <div class="div-block-5"><img src="{{ $property_description->image }}" alt="" class="image-2"></div>
                <div class="busam-properties-div">
                    <span style="display: block;" class="paragraph-2">{!! $property_description->excerpt->rendered !!}</span><a href="properties" class="about-busam-c w-button">Learn More</a>
                </div>
            @endforeach
        </div>
        <div class="column-2 w-col w-col-4">
            {{-- Cash --}}
            @foreach($cash as $cash_description )
                <h3 class="busam-properties">{{ $cash_description->title->rendered }}</h3>
                <div><img src="{{ $cash_description->image }}" alt="" class="image-2"></div>
                <div>
                    <span style="display: block;" class="paragraph-3">{!! $cash_description->excerpt->rendered !!}</span><a href="cash" class="about-busam-c w-button">learn more</a>
                </div>
            @endforeach
        </div>
        <div class="column-3 w-col w-col-4">
            {{-- Capital --}}
            @foreach($capital as $capital_description )
                <h3 class="busam-properties">{{ $capital_description->title->rendered }}</h3>
                <div class="div-block-6"><img src="{{ $capital_description->image }}" alt="" class="image-3"></div>
                <div class="busam-capital-div">
                    <span style="display: block;" class="paragraph-4">{!! $capital_description->excerpt->rendered !!}</span><a href="capital" class="about-busam-c w-button">learn more</a>
                </div>
            @endforeach
        </div>
    </div>
    <div class="stay-connected-section">
        {{-- banner column --}}
        @foreach($banner_column as $column )
            <div class="stay-connected-div">
                <h2 class="heading-4">{{ $column->title->rendered }}</h2>
                <a href="cash" class="button w-button">Get Started</a>
            </div>
            <img src="{{ $column->images->full->source_url }}" srcset="{{ $column->images->medium->source_url }} 500w, {{ $column->images->full->source_url }} 800w, {{ $column->images->full->source_url }} 1080w, {{ $column->images->full->source_url }} 1600w, {{ $column->images->full->source_url }} 1903w" sizes="(max-width: 1903px) 100vw, 1903px" alt="" class="image-7">
        @endforeach
    </div>
    <div class="buy-section">
        {{--buy section--}}
        @foreach($buy_section as $column )
            <div class="columns-2 w-row">
                <div class="column-4 w-col w-col-6"><img src="{{ $column->images->full->source_url }}" srcset="{{ $column->images->medium->source_url }} 500w, {{ $column->images->full->source_url }} 800w, {{ $column->images->full->source_url }} 954w" sizes="(max-width: 767px) 100vw, 50vw" alt=""></div>
                <div class="column-5 w-col w-col-6">
                    <div class="div-block-8">
                        <h1 class="about-us">{{ $column->title->rendered }}</h1>
                        <span style="display: block;" class="earn-rewards-paragraph">{!! $column->excerpt->rendered !!}</span>
                        <a href="properties" class="explore-button-2 w-button">EXPLORE</a>
                    </div>
                </div>
            </div>
        @endforeach
    </div>
    <div class="earn-section">
        {{--earn section--}}
        @foreach($earn_section as $column )
            <div class="columns w-row">
                <div class="column-7 w-col w-col-6">
                    <div class="div-block-20">
                        <h1 class="about-us">{{ $column->title->rendered }}</h1>
                        <span style="display: block;" class="earn-rewards-paragraph">{!! $column->excerpt->rendered !!}</span>
                        <a href="capital" class="explore-button-2 w-button">EXPLORE</a>
                    </div>
                </div>
                <div class="column-6 w-col w-col-6"><img src="{{ $column->images->full->source_url }}" srcset="{{ $column->images->medium->source_url }} 500w, {{ $column->images->full->source_url }} 800w, {{ $column->images->full->source_url }} 952w" sizes="(max-width: 767px) 100vw, 50vw" alt="" class="image-5"></div>
            </div>
        @endforeach
    </div>
@endsection
@section('customJS')
@endsection
