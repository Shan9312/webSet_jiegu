/**
 * Created by Administrator on 2019/1/31.
 */
var bigOpt = {
    slidesPerView: 4,
    slidesPerColumn: 2,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
}
var smallOpt = {
    slidesPerView: 3,
    slidesPerColumn: 3,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
}
$(function () {
    var opt = $(window).width() > 1200 ? bigOpt : smallOpt
    new Swiper('.cooperative-partner-swiper .swiper-container', opt);
});