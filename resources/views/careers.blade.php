@extends('layouts.front')
@section('title', 'Careers')
@section('bodyClass', 'product-services-busam-cash-main')
@section('content')
    <div class="header-2">
        {{-- banner column --}}
        @foreach($banner_column as $column )
            <div class="div-block-22">
                <div class="text-block-46">CAREERS</div>
                <div class="text-block-47">{{ $column->title->rendered }}</div>
            </div>
            <img src="{{ $column->images->full->source_url }}" srcset="{{ $column->images->medium->source_url }} 500w, {{ $column->images->full->source_url }} 800w, {{ $column->images->full->source_url }} 1080w, {{ $column->images->full->source_url }} 1600w, {{ $column->images->full->source_url }} 1903w" sizes="(max-width: 1903px) 100vw, 1903px" alt="">
        @endforeach
    </div>
    <div class="base">
        <div class="columns-10 w-row">
            <div class="column-33 w-col w-col-4">
                <div class="text-block-78">JOB TITLE</div>
            </div>
            <div class="w-col w-col-4">
                <div class="text-block-78">LOCATION</div>
            </div>
            <div class="w-col w-col-4">
                <div class="text-block-78">DATE POSTED</div>
            </div>
        </div>
        @foreach($careers as $career)
            <a href="/careers/{{ $career->id }}" class="link-block-21 w-inline-block">
                <div class="columns-16 w-row">
                    <div class="column-50 w-col w-col-4">
                        <div class="text-block-79">{{ $career->title->rendered }}</div>
                    </div>
                    <div class="column-51 w-col w-col-4">
                        <div>{{ $career->metadata->location[0] ?? 'unspecified'}}</div>
                    </div>
                    <div class="column-52 w-col w-col-4">
                        <div>{{ $career->date ?? 'unspecified' }}</div>
                    </div>
                </div>
            </a>
        @endforeach
    </div>
@endsection
@section('customJS')
@endsection
