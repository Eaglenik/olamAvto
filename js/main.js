//top
var btn = $("#top");
$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass("show");
    } else {
        btn.removeClass("show");
    }
});
btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
});

// slider
$(document).ready(function(){
    $(".newAvto-slider").owlCarousel({
        items: 3,
        margin: 30,
        autoPlay: false,
        dots: false,
        nav: true,
        mouseDrag: false,
        navText: [
            '<span class="icon-arrL"></span>',
            '<span class="icon-arrR"></span>',
        ],
        responsive:{
            1300:{
                items: 3
            },
            768:{
                items: 2
            },
            0:{
                items: 1
            },
        }
    });
    $(".review-slider").owlCarousel({
        items: 4,
        margin: 25,
        autoplay: true,
        dots: false,
        nav: false,
        mouseDrag: true,
        loop: false,
        responsive:{
            1200:{
                items: 3
            },
            780:{
                items: 2
            },
            0:{
                items: 1.1
            },
        }
    });
    $(".tabs-slider").owlCarousel({
        items: 5,
        margin: 60,
        autoplay: false,
        dots: false,
        nav: false,
        mouseDrag: true,
        loop: false,
        responsive:{
            1500:{
                items: 5
            },
            1000:{
                items: 4
            },
            750:{
                items: 3
            },
            450:{
                items: 2,
            },
            0:{
                loop: true,
                items: 1.5
            },
        }
    });
})
// custom select
$(document).ready(function(){
    $(".custom-select").each(function() {
        var classes = $(this).attr("class"),
            id      = $(this).attr("id"),
            translate  = $(this).attr("data-translate"),
            name    = $(this).attr("name");
        var template =  '<div class="' + classes + '">';
        template += '<span class="custom-select-trigger" data-translate="'+ translate +'" data-model="'+ $(this).attr("placeholder") +'">' + $(this).attr("placeholder") + '</span>';
        template += '<div class="custom-options">';
        $(this).find("option").each(function() {
            template += '<span class="btn-model custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
        });
        template += '</div></div>';
        $(this).wrap('<div class="custom-select-wrapper col-4"></div>');
        $(this).hide();
        $(this).after(template);
    });
    $(".custom-option:first-of-type").hover(function() {
        $(this).parents(".custom-options").addClass("option-hover");
    }, function() {
        $(this).parents(".custom-options").removeClass("option-hover");
    });
    $(".custom-option").on("click", function() {
        $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
        $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
        $(this).addClass("selection");
        $(this).parents(".custom-select").removeClass("opened");
        $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
    });
    $(".custom-select-trigger").on("click", function() {
        $(this).parents(".custom-select").toggleClass("opened");
        event.stopPropagation();
    });
})
$(document).ready(function() {
    // new
    $('.brand').on('click', function() {
        $('.modelList').removeClass('disabled');
    });
    $('.model').on('click', function() {
        $('.yearList').removeClass('disabled');
        $('.transmissionList').removeClass('disabled');
        $('.fuelTypeList').removeClass('disabled');
    });
    // old
    $('.brand2').on('click', function() {
        $('.modelList2').removeClass('disabled');
    });
    $('.model2').on('click', function() {
        $('.equipmentList').removeClass('disabled');
        $('.boxList').removeClass('disabled');
        $('.yearList2').removeClass('disabled');
        $('.litresList').removeClass('disabled');
        $('.MileageList').removeClass('disabled');
        $('.driveUnitList2').removeClass('disabled');
        $('.priceList').removeClass('disabled');
        $('.colorList').removeClass('disabled');
    });
  });
// form active
$(document).ready(function() {
    $('.priceAvto-form').each(function() {
      var $form = $(this);
      var $inputs = $form.find('input');
      var $button = $form.find('a');
      $inputs.on('input', function() {
        var $input1 = $form.find('input[name="priceAvto-name"]');
        var $input2 = $form.find('input[name="priceAvto-phone"]');
        var $check = $('input[type="checkbox"]');
        if ($input1.val() && $input2.val().length >= 17 && $check.prop('checked')) {
          $button.addClass('active');
        } else {
          $button.removeClass('active');
        }
      });
    });
    $('.priceAvtoOld-form').each(function() {
        var $form = $(this);
        var $inputs = $form.find('input');
        var $button = $form.find('a');
        $inputs.on('input', function() {
          var $input1 = $form.find('input[name="priceAvto-name"]');
          var $input2 = $form.find('input[name="priceAvto-phone"]');
          if ($input1.val() && $input2.val().length >= 17) {
            $button.addClass('active');
          } else {
            $button.removeClass('active');
          }
        });
      });
    $('.questions-form').each(function() {
      var $form = $(this);
      var $inputs = $form.find('input');
      var $button = $form.find('a');
      $inputs.on('input', function() {
        var $input1 = $form.find('input[name="name"]');
        var $input2 = $form.find('input[name="mail"]');
        if ($input1.val() && $input2.val().length >= 17) {
          $button.addClass('active');
        } else {
          $button.removeClass('active');
        }
      });
    });
});
// phone
document.addEventListener("DOMContentLoaded", function () {
    var eventCalllback = function (e) {
        var el = e.target,
        clearVal = el.dataset.phoneClear,
        pattern = el.dataset.phonePattern,
        matrix_def = "+998 __ ___ __ __",
        matrix = pattern ? pattern : matrix_def,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");
        if (clearVal !== 'false' && e.type === 'blur') {
            if (val.length < matrix.match(/([\_\d])/g).length) {
                e.target.value = '';
                return;
            }
        }
        if (def.length >= val.length) val = def;
        e.target.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
    }
    var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
    for (let elem of phone_inputs) {
        for (let ev of ['input', 'blur', 'focus']) {
            elem.addEventListener(ev, eventCalllback);
        }
    }
});
//checkbox
$(document).ready(function() {
    $('input[type="checkbox"]').on('change', function() {
        var $this = $(this);
        var $checked = $this.prop('checked');

        $this.siblings('input[type="checkbox"]').prop('checked', false);
        $this.prevAll('input[type="checkbox"]').prop('checked', true);
        if (!$checked) {
            $this.prevAll('input[type="checkbox"]').prop('checked', false);
        }
    });
});
// custom tabs
$(document).ready(function() {
    $('.tab-content .tab:not(:first)').hide();
    $('.tab-links li:first').addClass('active');
    $('.tab-links a').on('click', function(e) {
      e.preventDefault();
      var currentTab = $(this).attr('href');
      $('.tab-links li').removeClass('active');
      $(this).parent().addClass('active');
      $('.tab-content .tab').hide();
      $(currentTab).show();
    });
  });