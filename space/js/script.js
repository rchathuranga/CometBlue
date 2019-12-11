let isFinished=false;
let scoreVal=parseInt($('#scoreVal').text());
let background = document.getElementById("backgroundMp3");
let takeOff = document.getElementById("takeOff");
let blast = document.getElementById("blastMp3");
// var shootMp3 = document.getElementById("shootMp3");

$(window).on('load', function () {
    var name=sessionStorage.getItem('Name');
    $('#name').text(name);
    background.play();
    takeOff.play();
    setInterval(function (e) {
        if(!isFinished){background.play();}
    },1600);
    setTimeout(process, 500);
});


let scoreTimer = setInterval(function () {
    scoreVal+=15;
    $('#scoreVal').text(scoreVal);
    if(scoreVal>5000){
        win();
    }
},2000);

function win(){
    clearInterval(interval);
    $($('#failStatement').children()[0]).text("you win");
    $($('#failStatement').children()[1]).text("space ship saved");
    $($('#failStatement').children()[2]).text("replay");
    fail();
}

$(window).on('keydown', function (e) {
    if (e.keyCode == 38) {
        shipUp(e);
    } else if (e.keyCode == 40) {
        shipDown(e);
    }
});


function shipUp(e) {
    let shipTopNow = parseInt($('#ship').css('top'));
    let laserTopNow = parseInt($('.laser').css('top'));
    if (shipTopNow > -470) {
        $('#ship').css('top', shipTopNow - 100);
        $('.laser').css('top', shipTopNow - 100);
    }
}

function shipDown(e) {
    let shipTopNow = parseInt($('#ship').css('top'));
    let laserTopNow = parseInt($('.laser').css('top'));
    if (shipTopNow < 470) {
        $('#ship').css('top', shipTopNow + 100);
        $('.laser').css('top', shipTopNow + 100);
    }
}

function enemy2() {
    let left2 = parseInt($('#enemy2').css('left')) - 150;
    if(left2>-400) {
        $('#enemy2').css({
            'left': left2,
        });
        $('#eneBlast2').css({
            'left': left2,
        });
    }else {
        $('#enemy2').css({
            'left': 'unset',
            'right': '-300px'
        });
        enemy2ShotCount=0;
    }
}

function enemy() {
    let left = parseInt($('#enemy').css('left')) - 80;
    if (parseInt($('#enemy').css('left')) > -400) {
        $('#enemy').css({
            'left': left,
            'top': 0
        });
    } else {
        $('#enemy').css({
            'left':'unset',
            'right':'-400px'
        });
        enemy1ShotCount=0;
    }
}

let interval;
function process() {
    interval = setInterval(function () {
        if (!isCrash() && !isCrash2() && !isCrash3() && !isCrash4()) {
            enemy();
            enemy2();
            enemy3();
            setTimeout(enemy4,7500);
        }else {//========================================== check failing ==============================================
            clearInterval(interval);
            $('#blast').css({
                'display': 'block',
                'transform': 'scale(2.5)'
            });
            blast.play();
            setTimeout(fail,1000);
        }
    }, 100);
}


function fail() {
    clearInterval(scoreTimer);
    isFinished=true;
    console.log("Fail");
    $('#enemy').css('display','none');
    $('#enemy2').css('display','none');
    $('#enemy3').css('display','none');
    $('#enemy4').css('display','none');
    $('#ship').css('display','none');
    $('.laser').css('display','none');
    $('#failStatement').css('transform','scale(1)');
    background.pause();
}

function isCrash2() {
    let ship = parseInt($('#ship').css('top'));
    let enemy = parseInt($('#enemy2').css('left'));
    if(ship>=-50 && ship<=310 && enemy<200 && enemy>-40){
        return true;
    }
    return false;
}

function isCrash(){
    let number = parseInt($('#ship').css('top'));
    let enemy = parseInt($('#enemy').css('left'));
    if(number<=-250 && enemy<200 && enemy>-111){
        return true;
    }
    return false;
}

$(window).on('keydown', function (e) {
    if (e.keyCode == 32) {
        if(!isFinished) {
            shootMp3.play();
        }else{
            window.location.replace("");
        }
    }
});