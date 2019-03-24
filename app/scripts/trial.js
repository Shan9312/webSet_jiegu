$(function () {
    // setProvince();
    // $('#yzm').yzm();
    setOffer();
    $('.free-trial-form .btn-sub').click(function () {
        var phone_val = $('.free-trial-form input[data-name=phone]').val(),
            name_val = $('.free-trial-form input[data-name=name]').val(),
            projectName_val = $('.free-trial-form input[data-name=projectName]').val();
            // yzm_val = $('.free-trial-form input[data-name=yzm]').val();
        if (!projectName_val) {
            alert('请输入您的项目名称');
            return
        }
        if (!name_val) {
            alert('请输入您的姓氏');
            return
        }
        if (!phone_val) {
            alert('请输入您的手机号码');
            return
        }
        if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(phone_val)) {
            alert('请输入正确的手机号码');
            return
        }
        /*if (!yzm_val) {
            alert('请输入图形验证码');
            return
        }
        var tes =  $('#yzm').yzm('test', yzm_val);
        if (!tes[0]._flag) {
            alert('图形验证码不正确，请重新输入');
            tes.yzm();
            return
        }*/
        $.ajax({
            type: "post",
            url: config._path + "/jiegu/visitor/insert",
            contentType: "application/json",
            data: JSON.stringify({
                gender: $('.free-trial-form input[name=gender]:checked').val(),
                projectName : projectName_val,
                phone: phone_val,
                name: name_val
            }),
            success: function (res) {
                if (Number(res.code) === 10000) {
                    $('.free-trial-form').hide();
                    $('.estimated-price').show()[0]._id = res.data.id;
                } else {
                    alert(res.msg)
                }
            }
        })
    });
    $('.free-trial-form input[data-name=phone]')[0].oninput = function () {
        if (this.value.length > 11) this.value = this.value.slice(0,11)
    };
    $('.estimated-price .btn-price-sub').click(function () {
        $.ajax({
            type: "post",
            url: config._path + "/jiegu/visitor/update/" + $('.estimated-price')[0]._id,
            contentType: "application/json",
            data: JSON.stringify({
                featureList: $('.estimated-price [data-manager=type]').html().replace(/\//g, ','),
                isMulti: $('.estimated-price [data-manager=projectType]').html() === '单项目' ? 0 : 1,
                businessArea: $('.estimated-price [data-manager=area]')[0]._data,
                userCount: $('.estimated-price [data-manager=person]')[0]._data,
                priceHigh: Number($('.estimated-price [data-manager=resultMax]').html()),
                priceLow: Number($('.estimated-price [data-manager=resultMin]').html())
            }),
            success: function (res) {
                if (Number(res.code) === 10000) {
                    alertComplete();
                    $('.free-trial-form').show().find('input[type=text],input[type=number]').val('');
                    // $('#yzm').yzm();
                    $('.estimated-price').hide()[0]._id = null;
                    if ($(window).width() < 1200) {
                        $('.app-btn-look').show();
                        $('.app-look-show').hide();
                        $('.estimated-price-control,.quoted-price-type').show();
                    }
                } else {
                    alert(res.msg)
                }
            }
        })
    });
    $('.app-btn-look').click(function () {
        $('.app-look-show').show();
        $('.estimated-price-control,.quoted-price-type').hide();
        $(document).scrollTop(0);
        $(this).hide()
    });
    $('.btn-price-reset').click(function () {
        $('.app-look-show').hide();
        $('.estimated-price-control,.quoted-price-type').show();
        $(document).scrollTop(0);
        $('.app-btn-look').show();
    })
})