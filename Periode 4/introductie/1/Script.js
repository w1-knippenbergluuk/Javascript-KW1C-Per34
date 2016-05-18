$(document).ready(function () {
    $('#strip').on('click', 'img', function () {
        var source = $(this).attr('src');
        $('#container img').fadeOut(function () {
            $(this).attr('src', source).fadeIn();
        });
    });

    $('#strip').on('hover', 'img', function () {
        $(this).css('border', '1px solid red');
    });

    $('#strip').on('mouseout', 'img', function () {
        $(this).css('border', '1px solid black');
    });
});