var Slideshow = {

    navigate: function() {
        $('a', '#slideshow-nav').click(function(e) {
            e.preventDefault();
            var $a = $(this);
            var slide = $($a.attr('href'));
            var wrapper = $('#slideshow-wrapper');

            wrapper.animate({
                left: -slide.position().left
            }, 1000, 'linear', function() {
                $a.addClass('active').siblings().removeClass('active');
            });

        });
    },

    init: function() {
        this.navigate();
    }

};


Slideshow.init();
