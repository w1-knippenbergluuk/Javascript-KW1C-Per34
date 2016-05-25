
$(document).ready(function () {
    // OPDRACHT 1
    $(document).dblclick(function () {
        alert('DUBBELKLIK');
    });

    // OPDRACHT 2
    $('a').mouseenter(function () {
        $(".main").append('<p>Je gaat nu met de muis over een link</p>');
    });

    // OPDRACHT 3
    $('#textfield').focusin(function () {
        $('#textfield').css('background-color', 'red').css('color', 'white');
    });

    // OPDRACHT 3 EN 4
    $('#textfield').focusout(function () {
        $('#textfield').css('background-color', 'white').css('color', 'black');

        var naam = $("#textfield").val();
        var naamList = "<li>" + naam + '</li>';
        $("#naamlijstje").append(naamList);
        $("#textfield").val('');
    });

    // OPDRACHT 4
    $('#button').click(function () {
        var naam = $("#textfield").val();
        var naamList = "<li>" + naam + '</li>';
        $("#naamlijstje").append(naamList);
        $("#textfield").val('');
    });

});