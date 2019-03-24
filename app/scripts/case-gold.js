var pieChart;
function setPie() {
    pieChart = echarts.init(document.getElementById('pie'));
    pieChart.setOption({
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {d}%"
        },
        legend: {
            orient: 'vertical',
            x: 296,
            y: 49,
            itemWidth: 14,
            data:['使用前','使用后']
        },
        color: ['#f4bd1b', '#1e2b53'],
        series: [
            {
                name:'统计时间',
                type:'pie',
                radius: ['30%', '50%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: '{d}%'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:6, name:'使用前'},
                    {value:4, name:'使用后'}
                ]
            }
        ]
    });
}
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
var picBarChart;
var paperDataURI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAABaCAYAAAD+bdW7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg5QzVEMEMwMzAxQzExRTlBM0YyQUE0NkJBRjBGNzRBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg5QzVEMEMxMzAxQzExRTlBM0YyQUE0NkJBRjBGNzRBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODlDNUQwQkUzMDFDMTFFOUEzRjJBQTQ2QkFGMEY3NEEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODlDNUQwQkYzMDFDMTFFOUEzRjJBQTQ2QkFGMEY3NEEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz545vJAAAAFC0lEQVR42tScTY8URRjHq2p6XvplVwIrWSKKJCCygLgawemeNR5csxx4EZGXnSEhMX4CPoSfgxsfwBOJB48e5OrFo3LwYngJK4tM+TxL9dLT2zVd1S9V3U/y0C9TzfRv6l9d/6pqoM9+fodUGAPI/0SWil9+c5TKsSrvfusF/QI2J4nBqBSg6/Dh42d0o7UATod8yjlZbysAhYwA4gTol7UR4EPI/W6fH4DtWhsBIvyj0yH+oM9/aC0AhtcnV0BGg/YCuNyFzaU2ARyEPB4fLPr8KWzGbQKIkgcLHuGwuQAyWmoLwCh50O/xgFLShd0bbQEIZzoEShxvgJVQv4yqAMAG+0n6pO/ubIYgo2NNB/gMspc+ueDxbbE7aTpAlHVywedbYncMtUBbB+C7PK4VlNDnTQXAX3YocaZu982YZNJUgBU0cLIPA4/Hu9dBRr0mAkTzPgQZxbvYoW20DgCeRFuJw0kTAcK5AP7M4P4iyOitJgEsiyeMfIqixz1KZ2YsrjUJIMp9RFHSEZYijttNAghVCgXuzOEayOi9pgCMVAr5Huep79tsAoAHuapScNGfeRJVLqOiAOcgu0o14PL0d6yAjFZtA4SqBcFSDLp7pzkntgFGOoUTliKOTaiFji0AJjNwCpYi2Yd8ZQsADdw+nQvAUrzKOD22BRDpXhB4ZDvj9FWQkW8DYKR7gdvnfbp3TIY3/00ragBunqUsRWUy0gU4BHm0yBcFXubpdZDRskmAqOgXZTyJMDplrQWrW/+JJ9FLyUcTkwBh0S8KXM4lH62CjFZMACgbuExL4ZBeT+6ebpsAwLkdp0x1S9pBbC1Y3QARKRlzAHCQs1Y3QFgWIJADFJYR0yg3LAuw4GdaijiuFVlXUwU4A1l6SgQsRZfKp3nx779YF0Bp+QhLQSWWonCfwEw14BxLEceG7rqacQB/fkPGCeDrVQMchny/shqQ98iFZMRM6T8xPn6V12HqrKsxk/LB6DrE6c2fkKE64wTjAArtQEtGeQAB5NmqAYJ8gGOqHWcewPmyBq5gDSgPN5lp+Yi+YKpQDF9T6DYSAHpjSvNXjrFDu1AGoENqWt9FS+EPqpERyzFwi6Sm8D2lYpfy7oGZlo9mQ0Z7/V0jAQI1gNw+wR6Ax6eKRfF15nd1AQ6LcWptAZaC9ZTWeHbucawLMCIGwq9ARsyGfAq0g1NEMidlFUCjBqS1wCQG7iMjNeBpFd8UnWsuwDCrYE2WglP1l9Ey19WYLfnsWgo9GY1VAEJiMHxXq/hV8nppSgrQIRXMwNX0JCIkY10tDXBWNGKDNcB1LxnPA4iI4Qg8rkuwLhp0JkBoGgAsBVW0FEmZ35IBjIiFKCCjSRbAEWHijEegD4Avm6+kAUJiKQrUwG4tMJsNuKClSFoLxmzrX1gKQvXfb0fJr8UAuDpy2hYA3nxRGcUA500ZuIosxW67Zbb1X+JJ9Ct2asy2/gs+ie5Bfgn5CAFw8vac9RrwlABwceQu5B3If4m4eeMGTmIpCFqK7ZfSIv9A3oR8kDZz1uWj0A5+Fyp5kDWgiZoCIGkHP5HXk8x/yAb1HzQGYLYd4MGPkJchn8iuwTbwsegD8F9iLyW2b4tMnz8otkH1EtrdfQ75PeT9vGucROv+W6Rq9BNgMWwSdClxLj4/yLMUjJI/p3znV3+ochNl1r9eQP4lUvlHTtTinhp/+px+ffzI9NvlA9OHqv8xxv8CDADmddM7WMkYWwAAAABJRU5ErkJggg==';
var paperDataURI2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAACjCAYAAAAnxyZpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRFRkVBRTdEMzAxRDExRTk4NUZFOEQ5QzBEMEREQzA2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRFRkVBRTdFMzAxRDExRTk4NUZFOEQ5QzBEMEREQzA2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REVGRUFFN0IzMDFEMTFFOTg1RkU4RDlDMEQwRERDMDYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REVGRUFFN0MzMDFEMTFFOTg1RkU4RDlDMEQwRERDMDYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Y/sQfAAAGXElEQVR42tyd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';
function setPicBar() {
    picBarChart = echarts.init(document.getElementById('picBar'));
    picBarChart.setOption({
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
            data: [
                {
                    value: 100,
                    symbol: 'image://' + paperDataURI,
                    symbolSize: ['50%', '100%']
                },
                {
                    value: 200,
                    symbol: 'image://' + paperDataURI2,
                    symbolSize: ['50%', '100%']
                }
            ],

        }]
    })
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