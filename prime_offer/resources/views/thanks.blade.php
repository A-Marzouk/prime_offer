@extends('layouts.app')

@section('content')
    <!-- header section -->
    <section class="banner" role="banner">
        <header id="header">
            <div class="header-content clearfix col-10">
                <a class="logo" style="width: 88%;" href="/" id="brandLogo">
                    PRIME<img src="images/logo_trans.png" alt="logo" width="60px" id="imageLogo">OFFER
                </a>
            </div>
       </header>
        <div class="container">
            <div class="col-md-10 col-md-offset-1">
                <div class="banner-text text-center">
                    <h1>Thank you</h1>
                    <p>
                        Your form has been successfully submitted, we will contact you soon
                    </p>
                    <a href="/" class="btn btn-large" id="findMoreBtn">Return to site</a> </div>
                <!-- banner text -->
                </div>
            </div>
        </div>
    </section>


@endsection