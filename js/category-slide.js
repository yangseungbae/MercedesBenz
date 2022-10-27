    window.onload = function(){
    //slidebanner
    let photo = document.querySelector(".photo");
    let photoli = document.querySelectorAll(".photo>li");
    const pager = document.querySelectorAll(".carpager>div");

    let sbanner = 0;
    let move = 0;

    width = photoli[0].clientWidth

    let clone = photoli[0].cloneNode(true);
    let last = photoli[photoli.length - 1].cloneNode(true);
    photo.appendChild(clone);
    photo.insertBefore(last, photoli[0]);

    photoli = document.querySelectorAll(".photo>li")
    console.log(photoli);
    let count = photoli.length;

    photo.style.width = width * count + "px";

    sbanner = -1;
    move = -width;
    photo.style.transform = `translateX(${move}px)`;

    function moveSlide() {
        for (i = 0; i < pager.length; i++) {
            pager[i].classList.remove("active");
        }
        if (sbanner === 4) {
            pager[0].classList.add("active");
        }
        else if (sbanner === 0) {
            pager[2].classList.add("active");
        }
        else {
            pager[sbanner - 1].classList.add("active");
        }
        move = -width * sbanner;
        photo.style.transition = "0.5s";
        ohoto.style.transform = `translateX(${move}px)`
    }


    //pager

    pagerbtn.forEach((n, id) => {
        pagerbtn[id].addEventListener("click", function () {
            sbanner = id + 1;
            moveSlide();
        })
    })
}