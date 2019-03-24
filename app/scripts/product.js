var dataTrackerJson = [
    {
        title: '工单全流程电子化  快速实时响应',
        subtitle: '电子工单管理',
        pic: 'tracker/img_1.png',
        con: '提交、审批、派工、验收、评价全程在线追踪，完美实现了远程高效地工作分配，现场实时获取相关数据，移动端报表实时管理，使处理情况一手掌握。',
        child: ['创建任务', '任务发布', '任务分配', '执行情况', '验收任务', '评价任务'],
        icon: [0,1,2,3,4,5]
    },
    {
        title: '人员信息灵活配置  任务在线部署',
        subtitle: '人员信息灵活管理',
        pic: 'tracker/img_2.png',
        con: '通过DBM矩阵系统数据库，可对人员进行自定义的功能配置，远程管理和部署人员在项目上的工作；同步更新的IM通讯录系统、让跨部门现场协同沟通成为可能，提高交流的时效性。',
        child: ['信息自定义配置', '在线任务部署', '历史任务追溯'],
        icon: [6,7,8]
    },
    {
        title: '蓝牙/NFC巡检  手机一键报修',
        subtitle: '智能巡检管理',
        pic: 'tracker/img_3.png',
        con: '通过智能手机扫描蓝牙或NFC标签实现巡检点位的管理，手机即可一键巡视和报修，问题处理更及时。设定详细的巡视内容及灵活的巡检路线，项目管理更标准，工作流程更清晰。',
        child: ['蓝牙/NFC巡检', '标准化巡检', 'GPS定位追踪', '手机一键报修'],
        icon: [9,10,11,12]
    },
    {
        title: '维保计划预设  系统自动派单',
        subtitle: '维保计划预设管理',
        pic: 'tracker/img_4.png',
        con: '按照预设维护周期计划，自动生成工单，及时提醒工单的处理情况，查询维护内容、对象以及维护工单的详情，并以直观的日历方式显示当前维护工作，让计划性维护工作，提前预设，防范于未然。',
        child: ['计划预设', '自动派单', '任务提醒', '细节追溯'],
        icon: [13,14,15,16]
    },
    {
        title: '数据智能化管理  可视直观高效分析',
        subtitle: '数据智能化管理',
        pic: 'tracker/img_5.png',
        con: '通过DBM矩阵系统数据库，逐一呈现项目人员的工作绩效、实时监管项目运营状况、生成分析图表，为管理层提供全面、高效、完整的绩效分析及评估依据，助力决策的制定。',
        child: ['工单数据统计', '工作效率分析', '在线查询', '一键导出', '可视化展示'],
        icon: [17,18,19,20,21]
    }
];
var dataSentryJson = [
    {
        title: '设备运行动态监控  故障自动预警',
        subtitle: '设备运行监测',
        pic: 'sentry/img_1.png',
        con: '精准采集设备日常运运行数据，实时记录设备运行状态，实现高效的设备运行管理机制。设有故障自动预警功能，有助于设备资产风险管控，建立完整的物联网生态管理体系。',
        child: ['实时监控', '数据分析', '故障预警'],
        icon: [0,1,2]
    },
    {
        title: '设备维保实时记录  故障一键报修',
        subtitle: '设备维保管理',
        pic: 'sentry/img_2.png',
        con: '动态记录设备的维修，巡视，保养过程，更便于管理人员对该设备状态进行判断，设备自动检测功能，发现故障迅速报警，一键在线报修，大幅节省人力监测投入成本。',
        child: ['故障记录', '维保记录', '一键报修'],
        icon: [3,4,5]
    },
    {
        title: '设备台账在线管理  紧急预案提前设置',
        subtitle: '设备数据管理',
        pic: 'sentry/img_3.png',
        con: '建立设备台账以便对设备资产管理，设置告警值，及时发现异常数据进行报警提醒，并执行紧急预案。',
        child: ['设备台账', '告警设置', '紧急预案'],
        icon: [6,7,8]
    },
    {
        title: '设备能耗分析  图表直观展现',
        subtitle: '设备能耗分析',
        pic: 'sentry/img_4.png',
        con: '通过设备运行状况及相关参数分析，展示项目设备运行能耗情况，为设备提供完整的生命周期监管，帮助管理层高效优化项目资产成本管控。',
        child: ['能耗分析'],
        icon: [9]
    },
    {
        title: '数据智能化管理  可视直观高效分析',
        subtitle: '数据智能化管理',
        pic: 'sentry/img_5.png',
        con: '通过DBM矩阵系统数据库，逐一呈现项目人员的工作绩效、实时监管项目运营状况、生成分析图表，为管理层提供全面、高效、完整的绩效分析及评估依据，助力决策的制定。',
        child: ['工单数据统计', '工作效率分析', '在线查询', '一键导出', '可视化展示'],
        icon: [10,11,12,13,14]
    }
];
var dataSeerJson = [
    {
        title: '楼宇数据场景化 ',
        subtitle: '',
        pic: 'seer/img_1.png',
        con: '将数据与楼宇建筑3D模型建立互联，便于更直观地查看相关的监测数据。人员工作情况、设备运行状态、商户位置及信息、视频监控图像信息等数据，可一一对应在3D模型中，随时调取查看。',
        child: ['3D楼宇模型', '设备状态', '安全预案', '视频监控', '门禁监控', '电梯监控'],
        icon: [0,1,2,3,4,5]
    },
    {
        title: '设备监控可视化',
        subtitle: '',
        pic: 'seer/img_2.png',
        con: '可观察设备在楼内所处位置、形状、能耗、故障设备的具体位置及详细故障记录，也可调取视频监控，随时查看现场情况。',
        child: ['设备台账', '设备详情', '监控数据', '能耗趋势', '异常告警', '历史记录'],
        icon: [6,7,8,9,10,11]
    },
    {
        title: '物业管理可视化',
        subtitle: '',
        pic: 'seer/img_3.png',
        con: '实时掌握员工即时状态，更便捷地对人员进行定位检查。可3D空间展示每一个工作人员位置、工作状态、巡检轨迹及完成情况。',
        child: ['人员信息', '人员定位', '任务分类', '工单状态', '工单详情'],
        icon: [12,13,14,15,16]
    },
    {
        title: '商户管理可视化',
        subtitle: '',
        pic: 'seer/img_4.png',
        con: '查看租户相关信息、报修记录、所处位置3D空间直观展示。',
        child: ['租户分类', '租户详情', '报修记录', '租户能耗'],
        icon: [17,18,19,20]
    },
    {
        title: '环境监测可视化',
        subtitle: '',
        pic: 'seer/img_5.png',
        con: '可观察室外大型设备所处的环境的气候变化、室内房间温度、湿度等情况，有助于节约能耗，降低成本。',
        child: ['室外气象状态', '室内温湿度'],
        icon: [21,22]
    },
    {
        title: '能耗分析可视化',
        subtitle: '',
        pic: 'seer/img_6.png',
        con: '通过传感器，实时监测设备运行数据，系统自动分析运行能耗，出现异常，自动报警，并在3D空间模型中直观展示',
        child: ['能耗统计', '占比分析', '能耗详情', '异常告警'],
        icon: [23,24,25,26]
    }
];
function setProductData(arr) {
    $('.product-tracker').html('');
    $.each(arr,function (i, n) {
        var box = $('<div class="container"></div>').appendTo($('.product-tracker'));
        $('<div class="container-title app-product-title"><b>'+n.title+'</b></div>').appendTo(box);
        var cases = $('<div class="case-flex"></div>').appendTo(box);
        cases.append('<img src="images/'+n.pic+'" class="'+(i%2 === 0?'app-img':'')+'">');
        var caseMod = $('<div class="case-mod"><div class="case-title"><b>'+n.title+'</b><span>'+n.subtitle+'</span></div></div>').appendTo(cases);
        var caseUl = $('<ul></ul>').appendTo(caseMod);
        $.each(n.child, function (j, m) {
            caseUl.append('<li><i class="'+GetQueryString('tab')+'-icon-'+(getNum(arr, i) + j)+'"></i><span>'+m+'</span></li>')
        });
        caseMod.append('<h1>功能简述</h1><p>'+n.con+'</p>');
        caseMod.append('<h1>查看相关案例</h1><div class="link-box"><a href="case-gold.html"><span>金虹桥国际会展中心</span><i class="icon-arrow-double"></i></a><a href="case-ubpa.html"><span>上海世博最佳实践区</span><i class="icon-arrow-double"></i></a><a href="case-pepsi.html"><span>百事亚洲研发中心</span><i class="icon-arrow-double"></i></a></div>');
        if (i%2 === 0) cases.append('<img src="images/'+n.pic+'" class="pc-img">');
    })
}
function getNum(arr, index) {
    var le = 0;
    for (var i = 0; i< index; i++) {
        le += arr[i].child.length;
    }
    return le + 1
}
$(document).ready(function () {
    var tab = GetQueryString('tab')
    $('.banner-box-min').addClass('banner-' + tab);
    $('.product-nav a[tab='+tab+']').addClass('active').siblings('a').removeClass('active');
    var json = tab === 'tracker' ? dataTrackerJson : tab === 'sentry' ? dataSentryJson : dataSeerJson;
    setProductData(json)
})
