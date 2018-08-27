@extends('layouts.app')

@section('content')
    <div>
        <header id="header">
            <div class="header-content clearfix col-10">
                <a class="logo" style="width: 88%; color: black;" href="/" id="brandLogo">
                    PRIME<img src="images/logo_icon.png" alt="logo" width="60px" id="imageLogo"> OFFER
                </a>
            </div>
        </header>
        <section id="contact" class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2 conForm">
                        <h4 style="color: lightgray; padding-bottom: 25px; padding-top: 50x;">
                            We are happy to receive your requests
                        </h4>

                        <div id="message"></div>
                        <form method="post" action="php/contact.php" name="cform" id="cform">
                            <input name="name" id="name" type="text" class="col-xs-12 col-sm-12 col-md-12 col-lg-12" placeholder="* Name..." required>
                            <input name="email" id="email" type="email" class=" col-xs-12 col-sm-12 col-md-12 col-lg-12 noMarr" placeholder="* Email Address..." required>
                            <input name="phone" id="phone" type="phone" class=" col-xs-12 col-sm-12 col-md-12 col-lg-12 noMarr" placeholder="* Phone number..." required>
                            <input name="bussiness_area" id="bussiness_area" type="text" class=" col-xs-12 col-sm-12 col-md-12 col-lg-12 noMarr" placeholder="* Business area..." required>
                            <textarea name="comments" id="comments" cols="" rows="" class="col-xs-12 col-sm-12 col-md-12 col-lg-12" placeholder="* Question..." required></textarea>
                            <input type="submit" id="submit" name="send" class="submitBnt" value="Send your query">
                            <div id="simple-msg"></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection