$(function() {
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 200)
            $('#go_top_btn').fadeIn();
        else  $('#go_top_btn').fadeOut();
    })
    $('#go_top_btn').click(function() {
        $('html').animate({
            scrollTop: 0
        }, 800);
        return false;
    })

    $('.checking_btn').click(function() {
        if($('.comment_area').val() === '')
            $('.comment_area').val('viktoriyaivanyutenko@yandex.ru');

        let valid_phone = /^\+375[0-9]{2}[0-9]{7}$/;
        let given_phone = $('.tel_input').val();
        let valid = valid_phone.test(given_phone);
        if (valid) alert('Номер верный.')
            else alert('Номер не верный!')
    })
})

