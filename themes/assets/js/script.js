
            // TEXT SELECT
    var textSelect = 1;
    $('body').addClass('select1');
    function selectColor() {
        textSelect++;
                if (textSelect > 3) {
        textSelect = 1;
                }
    if (textSelect == 1) {
        $('body').addClass('select1');
    $('body').removeClass('select2');
    $('body').removeClass('select3');
                }
    if (textSelect == 2) {
        $('body').removeClass('select1');
    $('body').addClass('select2');
    $('body').removeClass('select3');
                }
    if (textSelect == 3) {
        $('body').removeClass('select1');
    $('body').removeClass('select2');
    $('body').addClass('select3');
                }
            }
    $('body').mousedown(function () {
        selectColor();
            });
    $('body').mouseup(function () {
        selectColor();
            });
