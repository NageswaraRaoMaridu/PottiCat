/**
 * Created by nrmaridu on 10/28/2017.
 */
$(function() {
    $('.skitter-large').skitter({
        navigation: true,
        dots: true,
        focus: true
    });


    /** On click of change animation button **/
    $('#change-animation').on('click', 'a', function(e) {
        e.preventDefault();
        var animation = $(this).data('animation');
        $('#change-animation a').removeClass('active');
        $(this).addClass('active');
        $('.skitter-large').skitter('setAnimation', animation);
        $('.skitter-large').skitter('next');
    });

    $('#next_image').on('click','a', function (e) {
       e.preventDefault();
        $('.skitter-large').skitter('next');
    });

    /** Load animations from the skitter **/
    var animations = $('.skitter-large').skitter('getAnimations');
    for (var i in animations) {
        var animation = animations[i];
        var item = '<li><a href="#" data-animation="' + animation + '">' + animation + '</a></li>';
        $('#change-animation ul').append(item);
    }
});
