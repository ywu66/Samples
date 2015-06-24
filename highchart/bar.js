//$(function () {
//    $('#container').highcharts({
//        chart: {
//            type: 'column'
//        },
//        title: {
//            text: 'Average Visitors'
//        },
//        xAxis: {
//            categories: [
//                'Monday',
//                'Tuesday',
//                'Wednesday',
//                'Thursday',
//                'Friday',
//                'Saturday',
//                'Sunday',
//                ],
//            crosshair: true
//        },
//        yAxis: {
//            min: 0,
//            title: {
//                text: 'Number of visitors'
//            }
//        },
//        tooltip: {
//            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
//            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
//                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
//            footerFormat: '</table>',
//            shared: true,
//            useHTML: true
//        },
//        plotOptions: {
//            column: {
//                pointPadding: 0.2,
//                borderWidth: 0
//            }
//        },
//        series: data,
//    });
//});
//$(document).ready(function(){
//    $ajax({
//        url: '/visitdata',
//        type: 'GET',
//        async: "json",
//        success: function (data) {
//            visitorData(data);
//        }
//    
//    });
//});

$(document).ready(function() {

    var options = {
        chart: {
            renderTo: 'container',
            type: 'spline'
        },
        series: [{}]
    };

    $.getJSON('data.json', function(data) {
        options.series[0].data = data;
        var chart = new Highcharts.Chart(options);
    });

});