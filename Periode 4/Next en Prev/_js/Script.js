$(document).ready(function () {
    $('td').on('click', function () {
        if ($(this).css('background-color') === 'rgb(255, 255, 255)') {
            var $selecteren = $(this).css("background-color", "red");
            var $tr = $selecteren.parent();
            var $col = $tr.children().index($selecteren);
            $tr.prev().children().eq($col).css("background-color", "grey");
            $tr.next().children().eq($col).css("background-color", "grey");

            $selecteren.prev().css("background-color", "grey");
            $selecteren.next().css("background-color", "grey");

            var $row = $(this).parent().index()+1;
            $("p#resultaat").html("U heeft de " + ($col + 1) + "e cell van de " + $row + "e rij.");
        } else {
            alert("ERROR! Je kan een gekleurd vak niet nog een keer gebruiken");
        }
    });
});