(function($){
    $.fn.myCarousel = function() {
        return this.each(function() {
            let $this = $(this);

            $('.button-right').click(function(){
                $('.slider-items').animate({left: '-222px'}, 300);
                setTimeout(function () {
                    $('.slider-items .slider-item').eq(0).clone().appendTo('.slider-items');
                    $('.slider-items .slider-item').eq(0).remove();
                    $('.slider-items').css({'left':'0px'});
                }, 400);
            });

            $('.button-left').click(function(){
                $('.slider-items .slider-item').eq(-1).clone().prependTo('.slider-items');
                $('.slider-items').css({'left':'-222px'});
                $('.slider-items').animate({left: '0px'}, 300);
                $('.slider-items .slider-item').eq(-1).remove();
            });

            $(document).on('click', '.image-link img', function () {
                $('.main-img img').attr('src', $(this).attr('src'));
            });

            $(document).on('click', '.slider-items a', function () {
                $('a').removeClass('active');
                $(this).addClass('active');
                //$(this).addClass('active').parent().siblings().find('a').removeClass('active');
            });
        });
    };
})(jQuery);