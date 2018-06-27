var a = [3025, 2987, 2995, 2864, 2712, 2753, 2569, 2601, 2523, 2321, 2013, 1978, 1620, 1542, 1351, 1432, 1320];

var chart = [{
  "date-ago": 0,
  "$": a[0]
}];

for (var i = 1; i < a.length; ++i) {
  chart.push({
    "date-ago": i,
    "$": a[i]
  });
}

AmCharts.makeChart("chartdiv", {
  "type": "serial",
  "theme": "light",
  "dataProvider": chart,
  "scaleStartValue": 0,
  "valueAxes": [{
    "gridColor": "#FFFFFF",
    "gridAlpha": 0.2,
    "dashLength": 0
  }],
  "gridAboveGraphs": true,
  "startDuration": 1,
  "graphs": [{
    "balloonText": "[[category]]: <b>[[value]]</b>",
    "fillColorsField": "#009688",
    "fillAlphas": 0.8,
    "lineAlpha": 0.2,
    "type": "line",
    "valueField": "$"
  }],
  "chartCursor": {
    "categoryBalloonEnabled": false,
    "cursorAlpha": 0,
    "zoomable": false
  },
  "categoryField": "date-ago",
  "categoryAxis": {
    "gridPosition": "start",
    "gridAlpha": 0,
    "tickPosition": "start",
    "tickLength": 20
  },
  "export": {
    "enabled": true
  }
});


n = new Date();
res = n.getFullYear() + "-";
m = n.getMonth() + 1;
if (m < 10) res += '0';
res += m + '-';
d = n.getDate();
if (d < 10) res += '0'
res += d;
document.getElementById("end").value = res;