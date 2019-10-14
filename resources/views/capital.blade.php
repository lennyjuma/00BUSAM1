@extends('layouts.front')
@section('title', 'Capital')
@section('bodyClass', 'product-services-busam-capital')
@section('content')
    <div class="header-2">
        {{-- banner column --}}
        @foreach($banner_column as $column )
            <div class="div-block-22">
                <div class="text-block-46">GET INSTANT LOANS</div>
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
                    {{--cash content--}}
                    @foreach($banner_column as $column )
                        <div class="text-block-49">
                            {!! $column->content->rendered !!}
                        </div>
                    @endforeach
                </div>
            </div>
            <div class="w-col w-col-3">
                <div class="text-block-50">Capital Matters Articles</div>
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
    <div class="section-3">
        <div class="w-form">
            <form id="email-form" name="email-form" data-name="Email Form" class="form">
                <div class="columns-11 w-row">
                    <div class="w-col w-col-4">
                        <div class="div-block-24"><label for="name" class="field-label-4">Full Name</label><input type="text" class="text-field-3 w-input" maxlength="256" name="name" data-name="Name" id="name"></div>
                    </div>
                    <div class="w-col w-col-4">
                        <div class="div-block-24"><label for="name-3" class="field-label-4">Telephone Number</label><input type="text" class="text-field-3 w-input" maxlength="256" name="name-3" data-name="Name 3" id="name-3"></div>
                    </div>
                    <div class="w-col w-col-4">
                        <div class="div-block-24"><label for="name-2" class="field-label-4">Email Address</label><input type="text" class="text-field-3 w-input" maxlength="256" name="name-2" data-name="Name 2" id="name-2"></div>
                    </div>
                </div>
                <div data-delay="0" class="dropdown w-dropdown">
                    <div class="dropdown-toggle-3 w-dropdown-toggle">
                        <div class="w-icon-dropdown-toggle"></div>
                        <div class="text-block-73">What type of financing would you like to inquire about</div>
                    </div>
                    <nav class="w-dropdown-list">
                        @foreach($banner_column as $column)
                            @foreach($column->capitalOptions as $option)
                                <a href="#" class="logbook w-dropdown-link">{{ $option }}</a>
                            @endforeach
                        @endforeach
                    </nav>
                </div><input type="submit" value="Submit" data-wait="Please wait..." class="submit-button-2 w-button">
                <div class="text-block-54">Questions? Contact us at 0700 000 000 or stop by our offices.</div>
            </form>
            <div class="w-form-done">
                <div>Thank you! Your submission has been received!</div>
            </div>
            <div class="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
            </div>
        </div>
    </div>
@endsection
@section('customJS')
@endsection
