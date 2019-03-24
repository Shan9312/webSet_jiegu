function getList() {
    $.ajax({
        type: "post",
        url: config._path + "/jiegu/news/page",
        contentType: "application/json",
        async: false,
        data: JSON.stringify({
            category: 1,
            pageIndex: 1,
            pageSize: 6
        }),
        success: function (res) {
            if (Number(res.code) === 10000) {
                setData(res.data.list);
            } else {
                alert(res.msg)
            }
        }
    })
}
function setData(list) {
    var box = $('.corporate-news-list').html('');
    $.each(list, function (i, n) {
        var maxNum = $(window).width() > 1200 ? 76 : 36
        $('<li><a href="news-info.html?id='+n.id+'"><img src="'+n.pic+'" alt="暂无图片"><div class="con"><time>'+strToDate(n.dt).Format('yyyy.MM.dd')+'</time><b>'+n.title+'</b><p>'+(n.subtitle.length>maxNum?n.subtitle.substring(0,maxNum)+'...': n.subtitle)+'</p></div></a></li>').appendTo(box)
    })
}
function resizeSwiper() {
    if ($(window).width() > 1200) {
        new Swiper('.banner-swiper', {
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.banner-swiper .swiper-button-next',
                prevEl: '.banner-swiper .swiper-button-prev',
            },
        });
        $('.project-date').find('.project-date-item p b').each(function (i, n) {
            $(n).animateNumber({ number: parseInt($(n).html()) }, 2000);
        });
        $('.rg-title').on('click','span', function () {
            $(this).addClass('active-title').siblings().removeClass('active-title');
            $('.product-tab-item[tab='+$(this).attr('tab')+']').fadeIn().siblings('.product-tab-item').hide()
        });
    } else {
        new Swiper('.app-banner-swiper', {
            loop:true,
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 10,
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.app-banner-pagination'
            }
        });
        // 移动端 数字值自动增加的效果
        $('.app-project-data li p b').each(function (i, n) {
            $(n).animateNumber({ number: parseInt($(n).html()) }, 2000);
        });
    }
}
$(function () {
    resizeSwiper();
    $(window).resize(function () {
        resizeSwiper()
    })
    getList();
})