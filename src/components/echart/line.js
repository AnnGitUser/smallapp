export default function getdata () {
    return {
        grid: {
            top: '8%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周天']
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: false
            }
        },
        series: [{
            type: 'line',
            showSymbol: false,
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }]
    }
}