@extends('layouts.front')
@section('title', 'Careers, Job 1')
@section('bodyClass', 'product-services-busam-cash-main')
@section('content')
    <div class="base">
        <div class="columns-10 w-row">
            <div class="column-33 w-col w-col-9">
                @foreach($dataObject as $article)
                    <div style="text-align: left;">
                        {!! $article->content->rendered !!}
                    </div>
                @endforeach
            </div>
            <div class="column-53 w-col w-col-3"><a href="#" class="button-4 w-button">Apply Now</a></div>
        </div>
    </div>
@endsection
@section('customJS')
@endsection
