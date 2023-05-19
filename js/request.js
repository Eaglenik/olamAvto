$(document).ready(function(){
    $('.exterior').on('click', function(){  
        var exterior = $(this).val();
        $('.interior').on('click', function(){
            var interior = $(this).val();
            $('.engine').on('click', function(){
                var engine = $(this).val();
                $('.suspension').on('click', function(){
                    var suspension = $(this).val();
                    $('.rubber').on('click', function(){
                        var rubber = $(this).val();
                        $('#send').on('click', function(){
                            var brand = $('#send-req #brand').val();
                            var model = $('#send-req #model').val();
                            var year = $('#send-req #year').val();
                            var transmission = $('#send-req #transmission').val();
                            var fuelType = $('#send-req #fuelType').val();
                            var bodyType = $('#send-req #bodyType').val();
                            var driveUnit = $('#send-req #driveUnit').val();
                            var name = $('#send-req #name').val();
                            var phone = $('#send-req #phone').val();
                            
                            $.ajax({
                                type: "POST",
                                url: 'send',
                                data: {brand: brand,
                                    model: model,
                                    year: year, 
                                    transmission: transmission,
                                    fuelType: fuelType,
                                    bodyType: bodyType, 
                                    driveUnit: driveUnit, 
                                    exterior: exterior, 
                                    interior: interior, 
                                    engine: engine, 
                                    suspension: suspension, 
                                    rubber: rubber, 
                                    name: name, 
                                    phone: phone},
                                success: function(data){
                                    $(".modal-back").removeClass("d-none");
                                    $(".modal-main").addClass("active");
                                },
                                error: function(xhr, status, error){
                                    alert('Error');
                                }
                            });
                        });
                    });
                });
            });
        });        
    });
});
$('#serch').on('click', function(){
    var brand = $('#serch-req #brand').val();
    var model = $('#serch-req #model').val();
    var equipment = $('#serch-req #equipment').val();
    var box = $('#serch-req #box').val();
    var year = $('#serch-req #year').val();
    var litres = $('#serch-req #litres').val();
    var mileage = $('#serch-req #mileage').val();
    var driveUnit2 = $('#serch-req #driveUnit2').val();
    var price = $('#serch-req #price').val();
    var color = $('#serch-req #color').val();
    var name = $('#serch-req #name').val();
    var phone = $('#serch-req #phone').val();
    
    $.ajax({
        type: "POST",
        url: 'serch',
        data: {brand: brand,
            model: model,
            equipment: equipment,
            box: box,
            year: year, 
            litres: litres,
            mileage: mileage,
            driveUnit2: driveUnit2, 
            price: price, 
            color: color, 
            name: name, 
            phone: phone},
        success: function(data){
            $(".modal-back").removeClass("d-none");
            $(".modal-main").addClass("active");
        },
        error: function(xhr, status, error){
            alert('Error');
        }
    });
});
$('#contact').on('click', function(){
    var name = $('#contact-req #name').val();
    var phone = $('#contact-req #phone').val();
    
    $.ajax({
        type: "POST",
        url: 'contact',
        data: {
            name: name, 
            phone: phone
        },
        success: function(data){
            $(".modal-back").removeClass("d-none");
            $(".modal-main").addClass("active");
        },
        error: function(xhr, status, error){
            alert('Error');
        }
    });
});
