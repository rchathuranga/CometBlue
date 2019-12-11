

function enemy3() {
    let left = parseInt($('#enemy3').css(`left`));
    if (left > -500) {
        $('#enemy3').css({
            'left': left - 40,
            'bottom': '20',
            'top': 'unset'
        });
    } else {
        $('#enemy3').css({
            'right': -500,
            'left':'unset',
        });
        enemy3ShotCount=0;
    }
}

function enemy4() {
    let left = parseInt($('#enemy4').css(`left`));
    if (left > -500) {
        $('#enemy4').css({
            'left': left - 140,
        });
    } else {
        $('#enemy4').css({
            'right': -500,
            'left':'unset',
        });
        enemy4ShotCount=0;
    }
}

function isCrash3() {
    let ship = parseInt($('#ship').css('top'));
    let enemy = parseInt($('#enemy3').css('left'));
    if(ship>=240 && enemy<180 && enemy> -100){
        return true;
    }
    return false;
}

function isCrash4() {
    let ship = parseInt($('#ship').css('top'));
    let enemy = parseInt($('#enemy4').css('left'));
    if(ship<=0 && ship>=-460 && enemy<180 && enemy> -100){
        return true;
    }
    return false;
}