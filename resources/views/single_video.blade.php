@extends('layouts.front')
@section('title', 'Video 1')
@section('bodyClass', 'product-services-busam-cash-main')
@section('content')
    <div class="header-2">
        <div style="padding-top:56.27659574468085%" id="w-node-0e28e050da94-324e00a3" class="video w-video w-embed">
            @foreach($dataObject as $data)
                {!! $data->excerpt->rendered !!}
            @endforeach
        </div>
    </div>
    <div class="base">
        <div class="columns-10 w-row">
            <div class="column-33 w-col w-col-9">
                @foreach($dataObject as $data)
                    <div style="text-align: left;">
                        {!! $data->content->rendered !!}
                    </div>
                @endforeach
            </div>
            <div class="w-col w-col-3"></div>
        </div>
    </div>
@endsection
@section('customJS')
@endsection
