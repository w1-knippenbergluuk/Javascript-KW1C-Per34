$(document).ready(function () {
    $(document).on('keydown', function (e) 
    {
        switch (e.which) 
        {
            case 37: $('#blokje').animate
            ({
                left: '-=100px'
            });
        }
    });
});

