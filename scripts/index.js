

var el1 = $('#white'), eyeBall1 = el1.find('div');
el1.show();
var x1 = el1.offset().left + 37, y1 = el1.offset().top + 25;
var r = 10, x, y, x2, y2, isEyeProcessed = false;
$('html').mousemove(function (e) {
    if (!isEyeProcessed) {
        isEyeProcessed = true;
        var x2 = e.pageX, y2 = e.pageY;
        y = ((r * (y2 - y1)) / Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))) + y1;
        x = (((y - y1) * (x2 - x1)) / (y2 - y1)) + x1;
        eyeBall1.css({
            marginTop: (y - y1 + 1) + 'px',
            marginLeft: (x - x1) + 'px'
        });
        isEyeProcessed = false;
    }
});

