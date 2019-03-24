function getNewsInfo() {
    $.ajax({
        type: "post",
        url: config._path + "/jiegu/news/get/" + GetQueryString('id'),
        contentType: "application/json",
        success: function (res) {
            if (Number(res.code) === 10000) {
                console.log(res,'res');
                $('.news-title').html(res.data.title);
                $('.time-origin span:eq(0)').html(strToDate(res.data.dt).Format('yyyy年MM月dd日'));
                $('.news-content').html(res.data.content)
            } else {
                alert(res.msg)
            }
        }
    })
}
$(function(){
    getNewsInfo();
    getFourNewsList();
})