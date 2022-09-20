$(document).ready(function () {

    //처음 열때 section의 높이를 윈도우의 높이로 변환해라
    let ht = $(window).height()
    $('section').height(ht)

    // // 브라우저가 리사이즈 될때마다,
    // section의 높이를 윈도우의 높이로 변환해라.

    $(window).resize(function () {

        let ht = $(window).height()
        $('section').height(ht)

    })

    // nav의 li를 클릭했을 때, section의 순번을 찾고 각각의 위치로 이동해라.
    $('nav li').click(function (e) {

        e.preventDefault()

        let ht = $(window).height();
        let i = $(this).index();
        let nowTop = ht * i;
        // $('.num').text(nowTop);

        // 스크롤의 위치를 nowTop 값의 위치로 변동시켜라.

        $('html,body').stop().animate({
            scrollTop: nowTop
        }, 1000)

        // 메뉴에 on값을 주어라.

        $('nav li').removeClass('on')
        $(this).addClass('on')

    });

    // 스크롤이 움직일 때, 메뉴 on값도 함께 움직여라.

    $(window).scroll(function () {

        let scrollMo = $(this).scrollTop();
        let ht = $(this).height();
        // $('.mo').text(scrollMo);
        let header = $('header').offset().top
        let sec01 = $('.sec01').offset().top
        let sec02 = $('.sec02').offset().top


        if (scrollMo >= header && scrollMo < sec01) {
            console.log(sec01)
            $('nav li').removeClass('on')
            $('nav li').eq(0).addClass('on')    
        }

        if (scrollMo >= sec01 && scrollMo < sec02){
            console.log('yes')
            $('nav li').removeClass('on')
            $('nav li').eq(1).addClass('on')
        }

        if (scrollMo >= sec02 ){
            console.log('yessss')
            $('nav li').removeClass('on')
            $('nav li').eq(2).addClass('on')
        }


    })




})