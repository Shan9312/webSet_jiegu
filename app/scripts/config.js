/**
 * Created by Administrator on 2019/1/21.
 */
var config = {
    // _path: 'http://47.101.43.96:5090',
    _path: 'https://www.ifourthwall.com:5091',
    _v: '1.0.0'
};
function setHeader() {
    var banner = $('.banner-box');
    if (banner.length < 1) banner = $('.banner-box-min');
    if ($(document).scrollTop() > banner.height() - 60) $('header').addClass('white')
    $(document).on('scroll',function (e) {
        if($(this).scrollTop() > banner.height() - 60) $('header').addClass('white')
        else $('header').removeClass('white')
    });
    $('nav ul').on('click', 'li', function () {
        var href = $(this).attr('data-href');
        if (!href || location.href.indexOf(href) > -1) return
        if (location.href.indexOf('activity.ifourthwall.com') > -1) location.href = 'http://www.ifourthwall.com/' + href;
        else location.href = href;
    });
    var hf = location.pathname
    if (hf === '/' && location.href.indexOf('activity.ifourthwall.com') < 0) {
        $('.header-container a[name=index]').addClass('active')
    } else {
        $('.header-container a').each(function (i, n) {
            if (hf.indexOf($(n).attr('name')) > -1) {
                $(n).addClass('active')
            }
        })
    }
    $('.btn-trial-header').click(function () {
        location.href = 'http://www.ifourthwall.com/trial.html'
    });
    $('.icon-app-nav').click(function () {
        $('.header-container nav').show()
    });
    $('.icon-app-header-right').click(function () {
        $('.header-container .header-right').show()
    });
    $('nav .bg,.header-right .bg').click(function () {
        $(this).parent().hide()
    })
}
function setProvince() {
    var obj = $('select[name=province]').html('<option value="">选择省份</option>');
    for (var i in citys) {
        obj.append('<option value="'+i+'">'+i+'</option>')
    }
    setCity();
    obj.on('change',setCity)
}
function setCity() {
    var obj = $('select[name=city]').html('<option value="">选择城市</option>');
    var province = obj.prev().val();
    if (!province) return
    $.each(citys[province], function (i, n) {
        obj.append('<option value="'+n+'">'+n+'</option>')
    })
}
function setOffer() {
    $('.manager-area').rangeControl(function (val) {
        var value = val >= Number($(this).attr('data-max')) ? val + '+' : val;
        $('[data-manager=area]').html(value)[0]._data = val;
        CalculatePrice();
    });
    $('.manager-person').rangeControl(function (val) {
        var value = val >= Number($(this).attr('data-max')) ? val + '+' : val;
        $('[data-manager=person]').html(value)[0]._data = val;
        CalculatePrice();
    });
    setQuotedPriceType();
    $('input[name=QuotedPriceType]').on('change',function () {
        if ($('input[name=QuotedPriceType]:checked').length < 1) {
            this.checked = true
            return
        }
        setQuotedPriceType()
    });
    setProjectType()
    $('input[name=projectType]').on('change',function () {
        setProjectType()
    });
}
function setQuotedPriceType() {
    var checksName = [], checksValue = [];
    $('input[name=QuotedPriceType]:checked').each(function (i, n) {
        checksName.push($(n).next().html());
        checksValue.push(Number($(n).val()));
    })
    $('[data-manager=type]').html(checksName.join(' / '))[0]._data = checksValue;
    CalculatePrice();
}
function setProjectType() {
    var valDom = $('input[name=projectType]:checked');
    $('[data-manager=projectType]').html(valDom.next().html())[0]._data=Number(valDom.val());
    CalculatePrice();
}
function CalculatePrice() {
    var res1 = 0, res2 = 0;
    function getPrice(A) {
        var D = 200,
            max = 0.8,
            min = 0.7;
        var B = $('[data-manager=area]')[0]._data || 0, C = $('[data-manager=person]')[0]._data || 0, V = $('[data-manager=projectType]')[0]._data || 1;
        if (B < 60000) {
            res1 += (A * B + D * C) * V * max * min;
            res2 += (A * B + D * C) * V * max;
        } else if (B < 160000) {
            res1 += ((B - 50000) * A * 0.2 + (A * 50000 + C * D) * V) * max * min;
            res2 += ((B - 50000) * A * 0.2 + (A * 50000 + C * D) * V) * max;
        } else {
            res1 += ((B - 150000) * A * 0.1 + 100000 * A *0.2 + (A * 50000 + C * D) * V) * max * min;
            res2 += ((B - 150000) * A * 0.1 + 100000 * A *0.2 + (A * 50000 + C * D) * V) * max;
        }
    }
    var A = $('[data-manager=type]')[0]._data;
    if (A && A.length > 0) {
        $.each(A, function (i, n) {
            getPrice(n)
        });
    }
    $('[data-manager=resultMin]').html(res1.toFixed(0));
    $('[data-manager=resultMax]').html(res2.toFixed(0));
}
function alertComplete() {
    $('<div class="apply-complete"><div class="apply-complete-img"><img src="images/complete-icon.png" alt=""><h1>申请完成</h1><p>感谢您的信任，我们会尽快与您联系</p><button>知道了</button><i class="icon-close"></i></div></div>').appendTo('body');
}
function GetQueryString(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}
function getFourNewsList() {
    $.ajax({
        type: "post",
        url: config._path + "/jiegu/news/page",
        contentType: "application/json",
        async: false,
        data: JSON.stringify({
            pageIndex: 1,
            pageSize: 4
        }),
        success: function (res) {
            if (Number(res.code) === 10000) {
                setFourNewsData(res.data.list);
            } else {
                alert(res.msg)
            }
        }
    })
}
function setFourNewsData(list) {
    var box = $('.news-list').html('<dt><b>新闻列表</b><span>NEWS LIST</span></dt>');
    $.each(list, function (i, n) {
        $('<dd><a href="'+(Number(n.id) === Number(GetQueryString('id')) ? 'javascript:;':'news-info.html?id='+n.id)+'"><p>'+(n.title.length>14?n.title.substring(0,14)+'...':n.title)+'</p></a></dd>').appendTo(box)
    });
    box.append('<dt><a href="news-list.html">更多企业新闻 ></a></dt>');
}
Date.prototype.Format = function(fmt) {
    var o = {
        "M+" : this.getMonth()+1,                 //月份
        "d+" : this.getDate(),                    //日
        "h+" : this.getHours(),                   //小时
        "m+" : this.getMinutes(),                 //分
        "s+" : this.getSeconds(),                 //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S"  : this.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt))
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)
        if(new RegExp("("+ k +")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    return fmt;
}
function strToDate(dateObj){
    dateObj = dateObj.replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '').replace(/(-)/g, '/')
    if (dateObj.indexOf(".")>0)dateObj = dateObj.slice(0, dateObj.indexOf("."))
    return new Date(dateObj)
}
$(function () {
    setHeader();
    $('.btn-trial-show').click(function () {
        location.href = 'trial.html'
    });
    $('body').on('click', '.apply-complete .icon-close,.apply-complete button', function () {
        $('.apply-complete').remove()
    });
    $('header nav a').click(function () {
        $(this).toggleClass('show')
    })
});
