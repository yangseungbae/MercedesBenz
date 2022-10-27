window.onload = function () {
    //------------------ham-----------------
    //변수선언
    //carpager=true

    const menuwrap = document.querySelector(".menu");
    const ham = document.querySelector(".hambtn");

    function togglemenu() {
        if (ham.classList.contains("on")) {
            ham.classList.remove("on");
            menuwrap.classList.remove("activemenu");
        } else {
            ham.classList.add("on");
            menuwrap.classList.add("activemenu");
        }
    }
    ham.addEventListener("click", togglemenu);

    // banner true , slidebanner false
    let flag = true;
    let banner = document.querySelector(".banner");
    let bannerli = document.querySelectorAll(".banner>li");
    const pagerbtn = document.querySelectorAll(".pager>div");

    let showbanner = 0;
    let movex = 0;
    let count = bannerli.length;
    let winWidth = window.innerWidth;

    banner.style.width = winWidth * count + "px";
    // movex = -liwidth;
    // banner.style.transform = `translateX(${movex}px)`;

    function moveSlide() {
        console.log(sbanner, showbanner);
        for (i = 0; i < pagerbtn.length; i++) {
            pagerbtn[i].classList.remove("active");
        }
        pagerbtn[showbanner].classList.add("active");
        movex = -winWidth * showbanner;
        banner.style.transition = "0.5s";
        banner.style.transform = `translateX(${movex}px)`
    }

    //pager
    pagerbtn.forEach((n, id) => {
        pagerbtn[id].addEventListener("click", function (e) {
            e.preventDefault();
            showbanner = id;
            moveSlide();
        })
    })


    //slidebanner
    let photo = document.querySelector(".photo");
    let photoli = document.querySelectorAll(".photo>li");
    const carpager = document.querySelectorAll(".carpager>div");
    let sbanner = 0;
    let xmove = 0;

    let counting = photoli.length;

    photo.style.width = winWidth * counting + "px";

    function moveSlide2() {
        console.log(sbanner, showbanner);
        for (i = 0; i < carpager.length; i++) {
            carpager[i].classList.remove("act");
        }

        carpager[sbanner].classList.add("act");

        xmove = -winWidth * sbanner;
        photo.style.transition = "0.5s";
        photo.style.transform = `translateX(${xmove}px)`
    }


    //pager

    carpager.forEach((n, id) => {
        carpager[id].addEventListener("click", function (e) {
            e.preventDefault();
            sbanner = id;
            moveSlide2();
        })
    })
    //onresize

    window.onresize = function (e) {
        winWidth = window.innerWidth;
        console.log(winWidth)
        liwidth = winWidth;
        showbanner = 0;
        sbanner = 0;
        banner.style.width = liwidth * count + "px";
        banner.style.transform = `translateX(0px)`;

        photo.style.width = liwidth * count + "px";
        photo.style.transform = `translateX(0px)`

        moveSlide();
        moveSlide2();
    }
}