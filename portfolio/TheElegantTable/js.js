$(document).ready(function () {

    // 실행문

    //처음 열때 section의 높이를 윈도우의 높이로 변환해라
    // let ht = $(window).height()
    // $('section').height(ht)

    // // 브라우저가 리사이즈 될때마다,
    // section의 높이를 윈도우의 높이로 변환해라.

    // $(window).resize(function () {

    //    let ht = $(window).height()
    //    $('section').height(ht)

    // })

    // 스크롤이 특정 위치에 도달했을 때 top버튼이 생기고 사라진다.

    $(window).scroll(function () {

        if ($(this).scrollTop() > 400) {
            $('.button').fadeIn();
        } else {
            $('.button').fadeOut();
        }

    });

    // top버튼을 클릭했을 때 스크롤이 맨위로 위치가 변화한다.

    $('.button').click(function () {

        $('html , body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

    // header에서 마우스를 내렸을 때, wrap의 위치로 scroll의 위치가 바뀌어라.

    // $('header').mousewheel(function (event, delta) {

    //     let ht = $(window).height();
    //     let wrapTop = $('#wrap').offset().top

    //     if (delta < 0) {
    //         $('html,body').stop().animate({
    //             scrollTop: wrapTop
    //         }, 800)
    //     }
    // })


    // 첫번째 섹션에서 마우스를 올릴때 스크롤탑이 0 으로 가라.

    $('section').eq(0).mousewheel(function (event, delta) {

        if (delta > 0) {
            $('html,body').stop().animate({
                scrollTop: 0
            }, 800)

        };
    });

    // 두번째 섹션에서 마우스를 내릴 때, scroll의 위치가 세번째 섹션으로 가라.

    $('section').eq(1).mousewheel(function (event, delta) {

        let sec2Num = $('section').eq(2).offset().top

        if (delta < 0) {
            $('html,body').stop().animate({
                scrollTop: sec2Num
            }, 800)
        }
    });

    // .txt의 자동타이핑효과가 나타난다

    let txt = $('.txt').text().split('')
    console.log(txt)
    let ti = txt.length
    console.log(ti)

    let tt = 0;
    setInterval(function () {

        console.log(txt[tt])

        if (tt < ti)
            $('.cursor').append(txt[tt])
        tt++;
    }, 500)

    // 세번째섹션 스크롤의 값이 일정 크기의 값에 도달했을때 해당 div가 나타난다.

    $(window).scroll(function () {

        let se = $(this).scrollTop();
        let sec = $('section').eq(2).offset().top;

        if (se >= sec - 500) {
            $('section').eq(2).addClass('on')
        } else {
            $('section').eq(2).removeClass('on')
        };

    });



    // // left를 클릭 했을 때, ul이 방향이 움직인다.

    // let mo = 0;

    // $('.left').click(function () {

    //     $('.trailer ul:nth-child(1)').css({
    //         'left': 0,
    //         'animation': 'ani3 15s linear infinite'
    //     });
    //     $('.trailer ul:nth-child(2)').css({
    //         'left': '100%',
    //         'animation': 'ani4 15s linear infinite'
    //     })

    // });



    // // right를 클릭 했을 때, ul이 방향이 움직인다.

    // $('.right').click(function () {

    //     $('.trailer ul:nth-child(1)').css({
    //         'left': 0,
    //         'animation': 'ani5 15s linear infinite'
    //     })
    //     $('.trailer ul:nth-child(2)').css({
    //         'left': '100%',
    //         'animation': 'ani6 15s linear infinite'
    //     })

    // });


    // 마우스를 hover했을 때, 멈추고 떠났을 때 움직인다.

    $('.con4img ul').hover(function () {
        $('.con4img ul').css({
            'animation-play-state': 'paused'
        });
    }, function () {
        $('.con4img ul').css({
            'animation-play-state': 'running'
        });
    });


})