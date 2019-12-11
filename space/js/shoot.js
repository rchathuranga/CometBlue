let thisBullet = $('.laser').length - 1;
$(window).on('keydown', function (e) {
    if (e.keyCode == 32) {
        if (!isFinished) {
            if (thisBullet > 0) {
                shoot();
            } else {
                shoot();
                setTimeout(function () {
                    thisBullet = $('.laser').length-1;
                }, 700);
            }
            setTimeout(isDamage, 10);
        }
    }
});

let interval1, interval2, interval3, interval4;
function shoot() {
    $($('.laser').get(thisBullet)).css({
        'display': 'block',
        'margin-left': '100vw'
    });

    interval1 = setInterval(function () {
        isDamage();
    }, 1);
    setTimeout(function () {
        clearInterval(interval1);
    }, 201);

    interval2 = setInterval(function () {
        isDamage2();
    }, 1);
    setTimeout(function () {
        clearInterval(interval2);
    }, 201);

    interval3 = setInterval(function () {
        isDamage3();
    }, 1);
    setTimeout(function () {
        clearInterval(interval3);
    }, 201);

    interval4 = setInterval(function () {
        isDamage4();
    }, 1);
    setTimeout(function () {
        clearInterval(interval4);
    }, 201);


    setTimeout(function () {
        $($('.laser').get(thisBullet)).css({
            'display': 'none',
            'margin-left': '100px'
        });
        setTimeout(function () {
            $($('.laser').get(thisBullet--)).css({
                'display': 'block',
            });
        }, 200);
    }, 250);
}

let enemy1ShotCount=0;
function isDamage(){
    let bullet = parseInt($($('.laser')[thisBullet]).css('margin-left'));
    let bulletTop = parseInt($($('.laser')[thisBullet]).css('top'));
    let enemy = parseInt($('#enemy').css('left'));

    if(bullet>enemy && bulletTop<=-250){
        scoreVal+=25;
        $('#scoreVal').text(scoreVal);
        clearInterval(interval1);
        enemy1ShotCount++;
    }
    if(enemy1ShotCount>3){
        scoreVal+=75;
        blast.play();
        $('#scoreVal').text(scoreVal);
        $('.eneBlast').css({
            'display':'block'
        });
        setTimeout(function () {
            $('#enemy').css({
                'transition': 'none',
                'left': '10000px',
                'right': 'unset',
            });
            $('.eneBlast').css({
                'display':'none'
            });
        },1000);
        setTimeout(function () {
            $('#enemy').css({
                transition : 'left 0.5s'
            });
        },1500);
        $($('.laser')[thisBullet]).css('display','none');
        enemy1ShotCount=0;
    }
}


let enemy2ShotCount=0;
function isDamage2(){
    let bullet = parseInt($($('.laser')[thisBullet]).css('margin-left'));
    let bulletTop = parseInt($($('.laser')[thisBullet]).css('top'));
    let enemy = parseInt($('#enemy2').css('left'));

    if(bulletTop>=-50 && bulletTop<=310 && enemy>bullet){
        scoreVal+=15;
        $('#scoreVal').text(scoreVal);
        clearInterval(interval2);
        enemy2ShotCount++;
    }
    if(enemy2ShotCount>1) {
        blast.play();
        scoreVal+=50;
        $('#scoreVal').text(scoreVal);
        setTimeout(function () {
            $('#enemy2').css({
                'transition': 'none',
                'left': '10000px',
                'right': 'unset',
            });
        },1000);
        setTimeout(function () {
            $('#enemy2').css({
                transition : 'left 0.5s'
            });
        },1500);
        enemy2ShotCount=0;
    }
}

let enemy3ShotCount=0;
function isDamage3() {
    let bullet = parseInt($($('.laser')[thisBullet]).css('margin-left'));
    let bulletTop = parseInt($($('.laser')[thisBullet]).css('top'));
    let enemy = parseInt($('#enemy3').css('left'));

    if(bulletTop>=280 && enemy<bullet){
        scoreVal+=25;
        $('#scoreVal').text(scoreVal);
        clearInterval(interval3);
        enemy3ShotCount++;
    }

    if(enemy3ShotCount>4){
        blast.play();
        $('#ene3blast').css('display','block');
        scoreVal+=75;
        $('#scoreVal').text(scoreVal);
        setTimeout(function () {
            $('#enemy3').css({
                'transition': 'none',
                'left': '3500px',
                'right': 'unset',
            });
        },1000);
        setTimeout(function () {
            $('#enemy3').css({
                transition : 'left 0.5s'
            });
            $('#ene3blast').css('display','none');
        },1500);
        enemy3ShotCount=0;
    }
}

let enemy4ShotCount=0;
function isDamage4() {
    let bullet = parseInt($($('.laser')[thisBullet]).css('margin-left'));
    let bulletTop = parseInt($($('.laser')[thisBullet]).css('top'));
    let enemy = parseInt($('#enemy4').css('left'));


    if(bulletTop<=0 && bulletTop>=-460 && enemy<bullet){
        scoreVal+=25;
        $('#scoreVal').text(scoreVal);
        clearInterval(interval4);
        enemy4ShotCount++;
    }

    if(enemy4ShotCount>2){
        blast.play();
        $('#ene4blast').css('display','block');
        scoreVal+=75;
        $('#scoreVal').text(scoreVal);
        setTimeout(function () {
            $('#enemy4').css({
                'transition': 'none',
                'left': '3000px',
                'right': 'unset',
            });
        },1000);
        setTimeout(function () {
            $('#enemy4').css({
                transition : 'left 0.5s'
            });
            $('#ene4blast').css('display','none');
        },1500);
        enemy4ShotCount=0;
    }

}