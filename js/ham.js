window.onload = function(){
    //------------------ham-----------------
    //변수선언
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
}
