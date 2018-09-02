$(document).ready(function() {

    // form submission :

    $('#contactForm').on('submit',function(e){
        e.preventDefault();
        let myForm = document.getElementById('contactForm');
        var bodyFormData = new FormData(myForm);
        axios.post('https://docs.google.com/forms/d/e/1FAIpQLSd974MDOWYWZ9sfrCq5syMCxB1W129MhW2XeuX0w2isXCYJhg/formResponse',bodyFormData).then( (response)=>{

        });
        window.location.replace("http://prime-offer.kl.com.ua/thanks");
    });

	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();
		var is_mobile = false;
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        	is_mobile = true;
        }

            if (scroll >= 50 && is_mobile === false) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}

        if (scroll >= 50 && is_mobile === true) {
        	$('#brandLogo').css('display','none');
		}else{
            $('#brandLogo').css('display','block');
        }
	});

	// Fancybox
	$('.work-box').fancybox();

	// Flexslider
	$('.flexslider').flexslider({
		animation: "fade",
		directionNav: false,
	});

	// scroll for find out more btn :

    $("#findMoreBtn").click(function() {
        $('html, body').animate({
            scrollTop: $("#intro").offset().top
        }, 2000);
    });

    $(".navigate").on('click', function () {
        var $el = $(this)
        id = $el.attr('href');
        $('html, body').animate({
            scrollTop: $('#services').offset().top - 75
        }, 500);
        return false;
    });

	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});	
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});

//	steps code
    // Tooltips Initialization
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

// Steppers
    $(document).ready(function () {
        var navListItems = $('div.setup-panel-2 div a'),
            allWells = $('.setup-content-2'),
            allNextBtn = $('.nextBtn-2'),
            allPrevBtn = $('.prevBtn-2');

        allWells.hide();

        navListItems.click(function (e) {
            e.preventDefault();
            var $target = $($(this).attr('href')),
                $item = $(this);

            if (!$item.hasClass('disabled')) {
                navListItems.removeClass('btn-amber').addClass('btn-blue-grey');
                $item.addClass('btn-amber');
                allWells.hide();
                $target.show();
                $target.find('input:eq(0)').focus();
            }
        });

        allPrevBtn.click(function(){
            var curStep = $(this).closest(".setup-content-2"),
                curStepBtn = curStep.attr("id"),
                prevStepSteps = $('div.setup-panel-2 div a[href="#' + curStepBtn + '"]').parent().prev().children("a");

            prevStepSteps.removeAttr('disabled').trigger('click');
        });

        allNextBtn.click(function(){
            var curStep = $(this).closest(".setup-content-2"),
                curStepBtn = curStep.attr("id"),
                nextStepSteps = $('div.setup-panel-2 div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
                curInputs = curStep.find("input[type='text'],input[type='url']"),
                isValid = true;

            $(".form-group").removeClass("has-error");
            for(var i=0; i< curInputs.length; i++){
                if (!curInputs[i].validity.valid){
                    isValid = false;
                    $(curInputs[i]).closest(".form-group").addClass("has-error");
                }
            }

            if (isValid)
                nextStepSteps.removeAttr('disabled').trigger('click');
        });

        $('div.setup-panel-2 div a.btn-amber').trigger('click');
    });
});