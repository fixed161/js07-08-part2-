$(function() {
    $('#tabs-1').show();
    $('#items li').click(function() {
        if ($(this).attr('class') == 'active') {
            return false;
        }
        var link = $(this).children().attr('href');
        var activeLink = $('li.active').children().attr('href');
        $('li.active').removeClass('active');
        $(this).addClass('active');
        $(this).toggleClass('');
        $(activeLink).fadeOut(0, function() {
            $(link).fadeIn();
            $('.active a').css('color', '#fff');
            $('li.active').css({
                'background': '#4d88ff'
            });
        });
        return false;
    });
});
