function getH() {
    if ($(document).scrollTop() + $(window).height() < document.body.scrollHeight - $('.app-footer').height() - $(window).width() * 0.025) {
        $('.app-wrapper .btn-link').addClass('active')
    } else {
        $('.app-wrapper .btn-link').removeClass('active')
    }
}
function wxShare() {
    var data = {
        title: '介谷科技官网正式上线！',
        desc: '致力于优化及解决建筑精细化管理、项目现场管理、物业管理等问题，为各大业主及物业公司提供一站式智能管理方案。',//这里请特别注意是要去除html
        link: location.href.split('#')[0],
        imgUrl: 'http://'+window.location.host+'/images/share.png',
        // imgUrl: 'http://www.myhitron.com/ifw-jiegu/news/9ecb2d6a095f4fa2ba3e7c53e4505550.png',
        success: function (data) {},
        fail: function () {}
    };
    $.ajax({
        type: "post",
        url: config._path + "/weixin/getInfo",
        contentType: "application/json",
        data: JSON.stringify({
            url: location.href.split('#')[0]
        }),
        success: function (res) {
            if (Number(res.code) === 10000) {
                res.data.jsApiList = [
                    "updateAppMessageShareData",
                    "updateTimelineShareData",
                    "onMenuShareTimeline",
                    "onMenuShareAppMessage"
                ];
                wx.config(res.data);
                wx.ready(function(){
                    //分享给朋友
                    wx.updateAppMessageShareData(data);
                    wx.onMenuShareAppMessage(data);
                    //分享到朋友圈
                    wx.updateTimelineShareData(data);
                    wx.onMenuShareTimeline(data);
                });
                wx.error(function (res) {alert(res.errMsg);})
            } else {
                alert(res.msg)
            }
        }
    })
}
function ddShare() {
    dd.ready(function() {
        dd.biz.navigation.setRight({
            show: true,//控制按钮显示， true 显示， false 隐藏， 默认true
            control: true,//是否控制点击事件，true 控制，false 不控制， 默认false
            onSuccess : function(result) {
                dd.biz.util.share({
                    type: 0, //分享类型，0:全部组件 默认； 1:只能分享到钉钉；2:不能分享，只有刷新按钮
                    url: window.location.href.split('#')[0],
                    content: '致力于优化及解决建筑精细化管理、项目现场管理、物业管理等问题，为各大业主及物业公司提供一站式智能管理方案。',
                    title: '介谷科技官网正式上线！',
                    image: 'http://'+window.location.host+'/images/share.png',
                    // image: 'http://www.myhitron.com/ifw-jiegu/news/9ecb2d6a095f4fa2ba3e7c53e4505550.png',
                    onSuccess: function() {},
                    onFail: function(err) {}
                })
            },
            onFail : function(err) {}
        });
    });
}
function IdentifyBrowser() {
    //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
    var ua = window.navigator.userAgent.toLowerCase();
    console.log(ua)
    //通过正则表达式匹配ua中是否含有MicroMessenger字符串
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        wxShare()
    }else if (ua.indexOf("dingtalk") >= 0){
        ddShare()
    }
}
$(function () {
    getH();
    $(document).on('scroll',function () {
        getH()
    })
    IdentifyBrowser()
})