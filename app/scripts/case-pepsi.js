var barChart;
function setBar() {
    barChart = echarts.init(document.getElementById('bar'));
    barChart.setOption({
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            show:false
        },
        color: ['#1e2b53', '#f4bd1b'],
        grid: {
            left: '5%',
            right: '4%',
            bottom: '5%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['使用前','使用后']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'效率',
                type:'bar',
                stack: '效率',
                barWidth:'30%',
                data:[65, 100]
            },
            {
                name:'损耗',
                type:'bar',
                stack: '效率',
                data:[35, 0],
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        formatter: function(a,b,c){
                            return (100 - a.data) + '%'
                        },
                        textStyle: {
                            fontSize: 16,
                            color: '#000000'
                        }
                    }
                }
            }
        ]
    });
}
var cylinderChart;
var cyImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAuCAYAAACrrAD9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFFNzkxREVDMzAyNTExRTk4MDAyRjUxNzAyQzU4NEJBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFFNzkxREVEMzAyNTExRTk4MDAyRjUxNzAyQzU4NEJBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUU3OTFERUEzMDI1MTFFOTgwMDJGNTE3MDJDNTg0QkEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUU3OTFERUIzMDI1MTFFOTgwMDJGNTE3MDJDNTg0QkEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7uz3iKAAACDUlEQVR42uyZzUsbQRjG392sgppAkioYqHiQCikUG7QXhSJoDx78oF6kxasgiJ77DxS896woFqTgpb14E6X2UjGUth4UQRGxB00/0nwQk2yf150N0yXJxRoHOg/8YJnTj5nZObyPYds2edN2f5wqpBV0g6igA7QAv8ACBfAL/ARn4BDsgwOwC75RlZzsrZW+DVmuglQvGAVD4AFdP5/BOngL3lcTLMl5xJrAczDzj4Qq5Qt4BVZAyit4JecRmwTzIEK1Cx//C7AkLxp3o0/d7wBYBmN0e3knNofvK5liMQi2blmMMww2QdiVM8AieEhqpAu8YTeWGxGolAHwjOVmpeNVKVMs9YjUTMwUf6mK8ZukcLScltNyWk7LaTktp+W0nJbTclpOy/3vclmV5X6wXEpBMXaKsFxcQbm4e+cWFJRbcOV41LqhkNgH4XQlx70Bj1t3aihgC7xrX8kZZBbkp4RLjcfgNcjXSEwmS86otQ9clN45qTHJkDPJ5l08rtEO8kZsg354TJCYorNTqYeQYyCBO50hf/jetM+qn8NKy81I2UeFfO7l78TBavJiP2uX6bmMct2XkLTqG8LBUCT2xFfXOGSa1iBWr1mc2KfFYn69cJle+34W38plEmm7kkA1uTI9GFcCXDX1kDOO51KuHTSTM7ptkh7QJDgX14OLuU/gIzm911+Rizhv/ggwAOv4m60dSYKrAAAAAElFTkSuQmCC';
function setCylinder() {
    cylinderChart = echarts.init(document.getElementById('cylinder'));
    cylinderChart.setOption({
        tooltip: {},
        xAxis: [{
            data: ['使用前',  '使用后'],
            axisLabel: {
                margin: 20
            }
        }],
        yAxis: {

        },
        animationEasing: 'elasticOut',
        series: [{
            type: 'pictorialBar',
            hoverAnimation: true,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: '{c} %',
                    textStyle: {
                        fontSize: 16,
                        color: '#000000'
                    }
                }
            },
            markLine : {
                silent:true,
                symbol: ['circle', 'circle'],
                lineStyle: {
                    normal: {
                        type: 'solid',
                        color: ['#f4bd1b']
                    }
                },
                label:{
                  show:false
                },
                data : [
                    [{type : 'min'}, {type : 'max'}]
                ]
            },
            data: [
                {
                    value: 60,
                    symbol: 'image://' + cyImg,
                    symbolRepeat: true,
                    symbolSize: ['30%', '30%'],
                    symbolMargin: '-30%',
                    animationDelay: function (dataIndex, params) {
                        return params.index * 30;
                    }
                },
                {
                    value: 100,
                    symbol: 'image://' + cyImg,
                    symbolRepeat: true,
                    symbolSize: ['30%', '30%'],
                    symbolMargin: '-30%',
                    animationDelay: function (dataIndex, params) {
                        return params.index * 30;
                    }
                }
            ],

        }]
    })
}
$(function () {
    getFourNewsList();
})