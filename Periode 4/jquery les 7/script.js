$(document).ready(function () {
    $(document).on('keydown', function (e) {
        switch (e.which) {
            // LINKS   
            case 37: $('#blokje').animate
            ({
                left: '-=100px'
            });
                break;
            // RECHTS  
            case 39: $('#blokje').animate
            ({
                left: '+=100px'
            });
                break;
            //BOVEN  
            case 38: $('#blokje').animate
            ({
                top: '-=100px'
            });
                //BENEDEN
                break;
            case 40: $('#blokje').animate
            ({
                top: '+=100px'
            });
        }
    });
    $(document).on('keyup', function () {
        {
            $('#blokje').clearQueue();
        }
    });
});

