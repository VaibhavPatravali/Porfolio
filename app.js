const hamburger_menu = document.querySelector(".hamburger-menu");

const conatiner = document.querySelector(".container")

hamburger_menu.addEventListener("click", () => {
    conatiner.classList.toggle("active");
});


$('ul.nav').find('a').click(function(){
    var $href = $(this).attr('href');
    var $anchor = $('#'+$href).offset();
    window.scrollTo($anchor.left,$anchor.top);
    return false;
});