var total;
$(function(){
    getList(1);
    setPage();
    $('.news-type').on('click','dd',function () {
        if ($(this).hasClass('active')) $(this).removeClass('active')
        else $(this).addClass('active').siblings('dd').removeClass('active');
        getList(1);
        setPage();
    })
})
function getList(page) {
    $.ajax({
        type: "post",
        url: config._path + "/jiegu/news/page",
        contentType: "application/json",
        async: false,
        data: JSON.stringify({
            category: Number($('.news-type dd.active').attr('data-value')) || '',
            pageIndex: page,
            pageSize: 7
        }),
        success: function (res) {
            if (Number(res.code) === 10000) {
                total = res.data.total;
                setData(res.data.list);
            } else {
                alert(res.msg)
            }
        }
    })
}
function setPage() {
    if(!total) total = 1;
    var maxCount = $(window).width() > 1200 ? 2 : 1
    $('.pages').pagination({
        totalData: total,
        coping: true,
        showData:7,
        count: maxCount,
        keepShowPN: true,
        isHide: true,
        callback: function (api) {
            getList(api.getCurrent())
        }
    });
}
function setData(list) {
    var box = $('.news-container-list').html('');
    $.each(list, function (i, n) {
        var maxNum = $(window).width() > 1200 ? 200 : 36
        $('<li><a href="news-info.html?id='+n.id+'"><img src="'+n.pic+'" alt="暂无图片"><div><time>'+strToDate(n.dt).Format('yyyy.MM.dd')+'</time><b>'+n.title+'</b><p>'+(n.subtitle.length>maxNum?n.subtitle.substring(0,maxNum)+'...': n.subtitle)+'</p></div></a></li>').appendTo(box)
    })
}