$('.js-step-1').on('click', function(){
    $('.fill').addClass('step-1');
    $('li.step-1').addClass('green');
    $('li.step-1').removeClass('blue');
    $('li.step-2').addClass('blue');
    $('li.step-2').removeClass('grey')
    $('.js-step-1').addClass('no-display');
    $('.js-step-2').removeClass('no-display')
    
});

$('.js-step-2').on('click', function(){
    $('.fill').addClass('step-2');
    $('li.step-2').addClass('green');
    $('li.step-2').removeClass('blue');
    $('li.step-3').addClass('blue');
    $('li.step-3').removeClass('grey')
    $('.js-step-2').addClass('no-display');
    $('.js-step-3').removeClass('no-display')
    
});

$('.js-step-3').on('click', function(){
    $('.fill').addClass('step-3');
    $('li.step-3').addClass('green');
    $('li.step-3').removeClass('blue');
    $('li.step-4').addClass('blue');
    $('li.step-4').removeClass('grey')
    $('.js-step-3').addClass('no-display')
    $('.js-step-4').removeClass('no-display')
    
});



