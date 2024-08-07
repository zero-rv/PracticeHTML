const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//Hien thi va an mobile nav khi click nut list
const open_menu = $('button.open-menu');
open_menu.onclick = function () {
    $('#mobile-header').style.width = '300px';
    $('#main::after').style.display = 'block';
    console.log($('#main::after'))
}
const close_menu = $('button.close-menu');
close_menu.onclick = function () {
    $('#mobile-header').style.width = "0px";
    $('#main::after').style.display = 'none';
}
