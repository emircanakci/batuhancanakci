/* Header Buton */

let menuBtn = document.getElementById ("menuBtn")

menuBtn.addEventListener("click", function(e) {
    document.querySelector("body").classList.toggle("mobile-nav-active")
    this.classList.toggle("fa-xmark")
})



/* Yazı Animasyonu */


let typed = new Typed('.auto-input',{
    strings: ['a Mechanical Engineer. ','an AR-GE: Mechanical Designer. ','an Analysis Engineer. '],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    loop: true

})



/* To Top Buton */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("toTopButton").style.display = "block";
  } else {
    document.getElementById("toTopButton").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

