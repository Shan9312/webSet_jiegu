/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape...
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }

        try {
            // Replace server-side written pluses with spaces.
            // If we can't decode the cookie, ignore it, it's unusable.
            // If we can't parse the cookie, ignore it, it's unusable.
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch(e) {}
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }

    var config = $.cookie = function (key, value, options) {

        // Write

        if (value !== undefined && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setTime(+t + days * 864e+5);
            }

            return (document.cookie = [
                encode(key), '=', stringifyCookieValue(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // Read

        var result = key ? undefined : {};

        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all. Also prevents odd result when
        // calling $.cookie().
        var cookies = document.cookie ? document.cookie.split('; ') : [];

        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = parts.join('=');

            if (key && key === name) {
                // If second argument (value) is a function it's a converter...
                result = read(cookie, value);
                break;
            }

            // Prevent storing a cookie that we couldn't decode.
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }

        return result;
    };

    config.defaults = {};

    $.removeCookie = function (key, options) {
        if ($.cookie(key) === undefined) {
            return false;
        }

        // Must not alter options, thus extending a fresh object...
        $.cookie(key, '', $.extend({}, options, { expires: -1 }));
        return !$.cookie(key);
    };

}));
(function(d) {
        var p = function(b) {
            return b.split("").reverse().join("")
        }
            , l = {
            numberStep: function(b, a) {
                var e = Math.floor(b);
                d(a.elem).text(e)
            }
        }
            , h = function(b) {
            var a = b.elem;
            a.nodeType && a.parentNode && (a = a._animateNumberSetter,
            a || (a = l.numberStep),
                a(b.now, b))
        };
        d.Tween && d.Tween.propHooks ? d.Tween.propHooks.number = {
            set: h
        } : d.fx.step.number = h;
        d.animateNumber = {
            numberStepFactories: {
                append: function(b) {
                    return function(a, e) {
                        var k = Math.floor(a);
                        d(e.elem).prop("number", a).text(k + b)
                    }
                },
                separator: function(b, a) {
                    b = b || " ";
                    a = a || 3;
                    return function(e, k) {
                        var c = Math.floor(e).toString()
                            , s = d(k.elem);
                        if (c.length > a) {
                            for (var f = c, g = a, l = f.split("").reverse(), c = [], m, q, n, r = 0, h = Math.ceil(f.length / g); r < h; r++) {
                                m = "";
                                for (n = 0; n < g; n++) {
                                    q = r * g + n;
                                    if (q === f.length)
                                        break;
                                    m += l[q]
                                }
                                c.push(m)
                            }
                            f = c.length - 1;
                            g = p(c[f]);
                            c[f] = p(parseInt(g, 10).toString());
                            c = c.join(b);
                            c = p(c)
                        }
                        s.prop("number", e).text(c)
                    }
                }
            }
        };
        d.fn.animateNumber = function() {
            for (var b = arguments[0], a = d.extend({}, l, b), e = d(this), k = [a], c = 1, h = arguments.length; c < h; c++)
                k.push(arguments[c]);
            if (b.numberStep) {
                var f = this.each(function() {
                    this._animateNumberSetter = b.numberStep
                })
                    , g = a.complete;
                a.complete = function() {
                    f.each(function() {
                        delete this._animateNumberSetter
                    });
                    g && g.apply(this, arguments)
                }
            }
            return e.animate.apply(e, k)
        }
    }
)(jQuery);


(function ($) {
    function setValue(box, value) {
        var _value = value || 0;
        var _max = Number(box.attr('data-max'));
        if (_value <= 0) _value = 0;
        if (_value >= _max) _value = _max;
        box.attr('data-value', _value);
        var left = _value / _max * 100;
        box.find('.range-control-btn').css({
            left: left.toFixed(2) + '%'
        });
        box.find('.range-control-strip p span').css({
            width: left.toFixed(2) + '%'
        });
        var st = box.find('.range-control-txt').find('span').text(_value >= _max ? _value + '+' : _value);
        var stL = st.width()
        if (stL < 1) {
            var i = st.css('font-size');
            stL = String(_value).length * parseInt(i) / 2
        }
        box.find('.range-control-txt').css({
            left: 'calc(' + left.toFixed(2) + '% - ' + (stL / 2) + 'px)'
        });
        if (box[0]._call) box[0]._call(_value)
    }
    function rangeControl(n) {
        setValue($(n),Number($(n).attr('data-value')));
        var eventNameStar = 'mousedown', eventNameMove = 'mousemove', eventNameEnd = 'mouseup';
        if ($(window).width() < 1200) {
            eventNameStar = 'touchstart';
            eventNameMove = 'touchmove';
            eventNameEnd = 'touchend';
        }
        $(n).on(eventNameStar,'.range-control-btn',function (e) {
            e.preventDefault()
            var _parent = $(this).parent();
            $(document).on(eventNameMove,function (e) {
                e.preventDefault()
                var left;
                if (eventNameMove === 'mousemove') {
                    left = ((e.pageX - _parent.offset().left) / _parent.width());
                } else {
                    var touch = e.touches[0];
                    left = ((touch.pageX - _parent.offset().left) / _parent.width());
                }
                var _value = parseInt(left * Number(_parent.parent().attr('data-max')));
                setValue(_parent.parent(), _value);
            }).on(eventNameEnd,function (e) {
                $(this).off(eventNameMove + ' ' + eventNameEnd)
            });
        })
            .on(eventNameStar,'>button.add',function () {
                var _parent = $(this).parent(),
                    _value = Number(_parent.attr('data-value')) + 1;
                setValue(_parent, _value);
                var t,
                    ot = setTimeout(function () {
                        t = setInterval(function () {
                            _value = _value + 1;
                            setValue(_parent, _value);
                        }, 1)
                    }, 1000)
                $(document).one(eventNameEnd, function () {
                    clearTimeout(ot)
                    if (t) clearInterval(t);
                })
            })
            .on(eventNameStar,'>button.reduce',function () {
                var _parent = $(this).parent(),
                    _value = Number(_parent.attr('data-value')) - 1;
                setValue(_parent, _value);
                var t,
                    ot = setTimeout(function () {
                        t = setInterval(function () {
                            _value = _value - 1;
                            setValue(_parent, _value);
                        }, 1)
                    }, 1000)
                $(document).one(eventNameEnd, function () {
                    clearTimeout(ot)
                    if (t) clearInterval(t);
                })
            })
    }
    $.fn.rangeControl = function(call) {
        return this.each(function (i, n) {
            if (call) n._call = call;
            rangeControl(n);
        })
    }
})(jQuery);
(function ($) {
    function drawYzm(n) {
        var show_num = [];
        var canvas_width=$(n).width();
        var canvas_height=$(n).height();
        var canvas = n;//获取到canvas的对象，演员
        var context = canvas.getContext("2d");//获取到canvas画图的环境，演员表演的舞台
        canvas.width = canvas_width;
        canvas.height = canvas_height;
        var sCode = "A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
        var aCode = sCode.split(",");
        var aLength = aCode.length;//获取到数组的长度

        for (var i = 0; i <= 3; i++) {
            var j = Math.floor(Math.random() * aLength);//获取到随机的索引值
            var deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
            var txt = aCode[j];//得到随机的一个内容
            show_num[i] = txt.toLowerCase();
            var x = canvas_width / 10  + i * canvas_width / 5;//文字在canvas上的x坐标
            var y = 20 + Math.random() * 8;//文字在canvas上的y坐标
            context.font = "bold 23px 微软雅黑";

            context.translate(x, y);
            context.rotate(deg);

            context.fillStyle = randomColor();
            context.fillText(txt, 0, 0);

            context.rotate(-deg);
            context.translate(-x, -y);
        }
        for (var i = 0; i <= 5; i++) { //验证码上显示线条
            context.strokeStyle = randomColor();
            context.beginPath();
            context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
            context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
            context.stroke();
        }
        for (var i = 0; i <= 30; i++) { //验证码上显示小点
            context.strokeStyle = randomColor();
            context.beginPath();
            var x = Math.random() * canvas_width;
            var y = Math.random() * canvas_height;
            context.moveTo(x, y);
            context.lineTo(x + 1, y + 1);
            context.stroke();
        }
        return show_num;
    }
    function randomColor() {//得到随机的颜色值
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        // return "rgb(" + r + "," + g + "," + b + ")";
        return "#fff";
    }
    function YzmSet(n) {
        n._dataNums = drawYzm(n).join('');
        $(n).off().on('click',function () {
            n._dataNums = drawYzm(n).join('');
        })
    }
    function YzmTest(value, n) {
        if (value === n._dataNums) n._flag=true
        else n._flag=false
    }
    $.fn.yzm = function(type,value) {
        return this.each(function (i, n) {
            if (!type) YzmSet(n);
            else if (type === 'test') YzmTest(value.toLowerCase(), n);
        })
    }
})(jQuery);

var citys = {
    "北京": [
        "北京市"
    ],
    "天津": [
        "天津市"
    ],
    "河北省": [
        "石家庄市",
        "唐山市",
        "秦皇岛市",
        "邯郸市",
        "邢台市",
        "保定市",
        "张家口市",
        "承德市",
        "沧州市",
        "廊坊市",
        "衡水市"
    ],
    "山西省": [
        "太原市",
        "大同市",
        "阳泉市",
        "长治市",
        "晋城市",
        "朔州市",
        "晋中市",
        "运城市",
        "忻州市",
        "临汾市",
        "吕梁市"
    ],
    "内蒙古自治区": [
        "呼和浩特市",
        "包头市",
        "乌海市",
        "赤峰市",
        "通辽市",
        "鄂尔多斯市",
        "呼伦贝尔市",
        "巴彦淖尔市",
        "乌兰察布市",
        "兴安盟",
        "锡林郭勒盟",
        "阿拉善盟"
    ],
    "辽宁省": [
        "沈阳市",
        "大连市",
        "鞍山市",
        "抚顺市",
        "本溪市",
        "丹东市",
        "锦州市",
        "营口市",
        "阜新市",
        "辽阳市",
        "盘锦市",
        "铁岭市",
        "朝阳市",
        "葫芦岛市"
    ],
    "吉林省": [
        "长春市",
        "吉林市",
        "四平市",
        "辽源市",
        "通化市",
        "白山市",
        "松原市",
        "白城市",
        "延边朝鲜族自治州"
    ],
    "黑龙江省": [
        "哈尔滨市",
        "齐齐哈尔市",
        "鸡西市",
        "鹤岗市",
        "双鸭山市",
        "大庆市",
        "伊春市",
        "佳木斯市",
        "七台河市",
        "牡丹江市",
        "黑河市",
        "绥化市",
        "大兴安岭地区"
    ],
    "上海": [
        "上海市"
    ],
    "江苏省": [
        "南京市",
        "无锡市",
        "徐州市",
        "常州市",
        "苏州市",
        "南通市",
        "连云港市",
        "淮安市",
        "盐城市",
        "扬州市",
        "镇江市",
        "泰州市",
        "宿迁市"
    ],
    "浙江省": [
        "杭州市",
        "宁波市",
        "温州市",
        "嘉兴市",
        "湖州市",
        "绍兴市",
        "金华市",
        "衢州市",
        "舟山市",
        "台州市",
        "丽水市"
    ],
    "安徽省": [
        "合肥市",
        "芜湖市",
        "蚌埠市",
        "淮南市",
        "马鞍山市",
        "淮北市",
        "铜陵市",
        "安庆市",
        "黄山市",
        "滁州市",
        "阜阳市",
        "宿州市",
        "六安市",
        "亳州市",
        "池州市",
        "宣城市"
    ],
    "福建省": [
        "福州市",
        "厦门市",
        "莆田市",
        "三明市",
        "泉州市",
        "漳州市",
        "南平市",
        "龙岩市",
        "宁德市"
    ],
    "江西省": [
        "南昌市",
        "景德镇市",
        "萍乡市",
        "九江市",
        "新余市",
        "鹰潭市",
        "赣州市",
        "吉安市",
        "宜春市",
        "抚州市",
        "上饶市"
    ],
    "山东省": [
        "济南市",
        "青岛市",
        "淄博市",
        "枣庄市",
        "东营市",
        "烟台市",
        "潍坊市",
        "济宁市",
        "泰安市",
        "威海市",
        "日照市",
        "莱芜市",
        "临沂市",
        "德州市",
        "聊城市",
        "滨州市",
        "菏泽市"
    ],
    "河南省": [
        "郑州市",
        "开封市",
        "洛阳市",
        "平顶山市",
        "安阳市",
        "鹤壁市",
        "新乡市",
        "焦作市",
        "濮阳市",
        "许昌市",
        "漯河市",
        "三门峡市",
        "南阳市",
        "商丘市",
        "信阳市",
        "周口市",
        "驻马店市",
        "济源市"
    ],
    "湖北省": [
        "武汉市",
        "黄石市",
        "十堰市",
        "宜昌市",
        "襄阳市",
        "鄂州市",
        "荆门市",
        "孝感市",
        "荆州市",
        "黄冈市",
        "咸宁市",
        "随州市",
        "恩施土家族苗族自治州",
        "仙桃市",
        "潜江市",
        "天门市",
        "神农架林区"
    ],
    "湖南省": [
        "长沙市",
        "株洲市",
        "湘潭市",
        "衡阳市",
        "邵阳市",
        "岳阳市",
        "常德市",
        "张家界市",
        "益阳市",
        "郴州市",
        "永州市",
        "怀化市",
        "娄底市",
        "湘西土家族苗族自治州"
    ],
    "广东省": [
        "广州市",
        "韶关市",
        "深圳市",
        "珠海市",
        "汕头市",
        "佛山市",
        "江门市",
        "湛江市",
        "茂名市",
        "肇庆市",
        "惠州市",
        "梅州市",
        "汕尾市",
        "河源市",
        "阳江市",
        "清远市",
        "东莞市",
        "中山市",
        "潮州市",
        "揭阳市",
        "云浮市"
    ],
    "广西壮族自治区": [
        "南宁市",
        "柳州市",
        "桂林市",
        "梧州市",
        "北海市",
        "防城港市",
        "钦州市",
        "贵港市",
        "玉林市",
        "百色市",
        "贺州市",
        "河池市",
        "来宾市",
        "崇左市"
    ],
    "海南省": [
        "海口市",
        "三亚市",
        "三沙市",
        "五指山市",
        "琼海市",
        "儋州市",
        "文昌市",
        "万宁市",
        "东方市",
        "定安县",
        "屯昌县",
        "澄迈县",
        "临高县",
        "白沙黎族自治县",
        "昌江黎族自治县",
        "乐东黎族自治县",
        "陵水黎族自治县",
        "保亭黎族苗族自治县",
        "琼中黎族苗族自治县"
    ],
    "重庆": [
        "重庆市"
    ],
    "四川省": [
        "成都市",
        "自贡市",
        "攀枝花市",
        "泸州市",
        "德阳市",
        "绵阳市",
        "广元市",
        "遂宁市",
        "内江市",
        "乐山市",
        "南充市",
        "眉山市",
        "宜宾市",
        "广安市",
        "达州市",
        "雅安市",
        "巴中市",
        "资阳市",
        "阿坝藏族羌族自治州",
        "甘孜藏族自治州",
        "凉山彝族自治州"
    ],
    "贵州省": [
        "贵阳市",
        "六盘水市",
        "遵义市",
        "安顺市",
        "毕节市",
        "铜仁市",
        "黔西南布依族苗族自治州",
        "黔东南苗族侗族自治州",
        "黔南布依族苗族自治州"
    ],
    "云南省": [
        "昆明市",
        "曲靖市",
        "玉溪市",
        "保山市",
        "昭通市",
        "丽江市",
        "普洱市",
        "临沧市",
        "楚雄彝族自治州",
        "红河哈尼族彝族自治州",
        "文山壮族苗族自治州",
        "西双版纳傣族自治州",
        "大理白族自治州",
        "德宏傣族景颇族自治州",
        "怒江傈僳族自治州",
        "迪庆藏族自治州"
    ],
    "西藏自治区": [
        "拉萨市",
        "日喀则市",
        "昌都市",
        "山南地区",
        "那曲地区",
        "阿里地区",
        "林芝地区"
    ],
    "陕西省": [
        "西安市",
        "铜川市",
        "宝鸡市",
        "咸阳市",
        "渭南市",
        "延安市",
        "汉中市",
        "榆林市",
        "安康市",
        "商洛市"
    ],
    "甘肃省": [
        "兰州市",
        "嘉峪关市",
        "金昌市",
        "白银市",
        "天水市",
        "武威市",
        "张掖市",
        "平凉市",
        "酒泉市",
        "庆阳市",
        "定西市",
        "陇南市",
        "临夏回族自治州",
        "甘南藏族自治州"
    ],
    "青海省": [
        "西宁市",
        "海东市",
        "海北藏族自治州",
        "黄南藏族自治州",
        "海南藏族自治州",
        "果洛藏族自治州",
        "玉树藏族自治州",
        "海西蒙古族藏族自治州"
    ],
    "宁夏回族自治区": [
        "银川市",
        "石嘴山市",
        "吴忠市",
        "固原市",
        "中卫市"
    ],
    "新疆维吾尔自治区": [
        "乌鲁木齐市",
        "克拉玛依市",
        "吐鲁番地区",
        "哈密地区",
        "昌吉回族自治州",
        "博尔塔拉蒙古自治州",
        "巴音郭楞蒙古自治州",
        "阿克苏地区",
        "克孜勒苏柯尔克孜自治州",
        "喀什地区",
        "和田地区",
        "伊犁哈萨克自治州",
        "自治区直辖县级行政区划"
    ],
    "台湾省": [
        "台北市",
        "高雄市",
        "基隆市",
        "台中市",
        "台南市",
        "新竹市",
        "嘉义市",
        "新北市",
        "宜兰县",
        "桃园县",
        "新竹县",
        "苗栗县",
        "彰化县",
        "南投县",
        "云林县",
        "嘉义县",
        "屏东县",
        "台东县",
        "花莲县",
        "澎湖县"
    ],
    "香港特别行政区": [
        "香港岛",
        "九龙",
        "新界"
    ],
    "澳门特别行政区": [
        "澳门半岛",
        "氹仔岛",
        "路环岛"
    ]
}

