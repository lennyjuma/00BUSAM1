<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Busam Holdings - @yield('title')</title>
    <meta content="Webflow" name="generator">
    <link href="{{ URL::asset('css/normalize.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ URL::asset('css/webflow.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ URL::asset('css/busamholdings.webflow.css') }}" rel="stylesheet" type="text/css">
    <!-- [if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script><![endif] -->
    <script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script>
    <link href="{{ URL::asset('images/favicon.png') }}" rel="shortcut icon" type="image/x-icon">
    <link href="{{ URL::asset('images/webclip.png') }}" rel="apple-touch-icon">
</head>
<body class="@yield('bodyClass')">
{{-- Navbar --}}
    <div data-collapse="medium" data-animation="default" data-duration="400" class="navbar-3 w-nav">
        <div class="div-block-34">
            <div class="text-block-41">T - +254 (020) 0715 612 623 / 0735 612 623</div>
            <div class="social-icons">
                <a href="https://www.linkedin.com/company/busam/" target="_blank" class="link-block-6-copy13 fb w-inline-block">
                    <img src="{{ URL::asset('images/facebook.png') }}" alt="" class="image-16">
                </a>
                <a href="https://twitter.com/busam" target="_blank" class="link-block-14 tw w-inline-block">
                    <img src="{{ URL::asset('images/5d6f795f169864e027fbed4f_twitter2.png') }}" alt="" class="image-16 twitter">
                </a>
                <a href="mailto:info@busam.com" class="link-block-15 m w-inline-block">
                    <img src="{{ URL::asset('images/5d6f795f1698649cd6fbed51_mail2.png') }}" alt="" class="image-15">
                </a>
            </div>
        </div>
        <div class="div-block-31">
            <a href="/" class="w-nav-brand w--current"><img src="{{ URL::asset('images/5d7a173f26acc60d3ceced26_Busam-Logo.png') }}" alt=""></a>
            <nav role="navigation" class="nav-menu-2 w-nav-menu">
                <a href="/about" class="nav-link-8 w-nav-link">About Us</a>
                <a href="/properties" class="nav-link-9 w-nav-link">Buy a Property</a>
                <a href="/cash" class="nav-link-10 w-nav-link">Get Instant Cash</a>
                <a href="/capital" class="nav-link-11 w-nav-link">Log Book Loans</a>
                <a href="/learning" class="nav-link-12 w-nav-link">Blog</a>
                <a href="/media" class="nav-link-13 w-nav-link">Media</a>
                <a href="/careers" class="nav-link-14 w-nav-link">Careers</a>
                <a href="/support" class="nav-link-15 w-nav-link">Contact Us</a>
            </nav>
            <div class="w-nav-button">
                <div class="w-icon-nav-menu"></div>
            </div>
        </div>
    </div>
{{-- main content --}}
    @yield('content')
{{-- Footer --}}
    <div class="footer-3">
        <div class="columns-9 w-row">
            <div class="column-32 w-col w-col-3">
                <a href="/" class="w-inline-block w--current"><img src="{{ URL::asset('images/5d7a173f26acc60d3ceced26_Busam-Logo.png') }}" alt=""></a>
            </div>
            <div class="w-col w-col-2">
                <div>
                    <div class="div-block-21">
                        <a href="/properties" class="link-3">BUSAM PROPERTIES</a>
                    </div>
                    <div class="div-block-21">
                        <a href="/cash" class="link-3">BUSAM CASH</a>
                    </div>
                    <div class="div-block-21">
                        <a href="/capital" class="link-3">BUSAM CAPITAL</a>
                    </div>
                </div>
            </div>
            <div class="w-col w-col-2">
                <div>
                    <div class="div-block-21"><a href="/learning" class="link-3">LEARNING</a></div>
                    <div class="div-block-21"><a href="/support" class="link-3">SUPPORT</a></div>
                    <div class="div-block-21"></div>
                </div>
            </div>
            <div class="w-col w-col-2">
                <div class="text-block-40">5th Floor, Kose Heights, <br>Agwings Kodhek rd, Nairobi, Kenya.</div>
            </div>
            <div class="w-col w-col-3">
                <div class="text-block-41 _2">T - +254 (020) 0715 612 623 / 0735 612 623</div>
                <div class="text-block-41 _2">M - +254 0722 321 166</div>
                <div class="text-block-41-copy">info@busamholdings.com</div>
                <div class="social-icons">
                    <a href="https://www.linkedin.com/company/busam/" target="_blank" class="link-block-6-copy13 w-inline-block">
                        <img src="{{ URL::asset('images/Linkedin_1Linkedin.png') }}" alt="" class="image-16">
                    </a>
                    <a href="https://twitter.com/busam" target="_blank" class="link-block-14 w-inline-block">
                        <img src="{{ URL::asset('images/twitter2_1twitter2.png') }}" alt="" class="image-16">
                    </a>
                    <a href="mailto:info@busam.com" class="link-block-15 w-inline-block">
                        <img src="{{ URL::asset('images/mail2_1mail2.png') }}" alt="" class="image-15">
                    </a>
                </div>
            </div>
        </div>
        <div class="div-block-30">
            <div class="text-block-42">
                @ 2019 Busam Holdings Ltd. All rights reserved | <a href="#" target="_blank" class="link-7">Terms of Use</a> | A <a href="http://www.kijanicollective.com" target="_blank" class="link-7">kijani Collective </a> Website
            </div>
        </div>
    </div>
{{-- JS Scripts --}}
    <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js" type="text/javascript" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="js/webflow.js" type="text/javascript"></script>
    <!-- [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif] -->
    @yield('customJS')
</body>
</html>
