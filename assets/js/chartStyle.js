google.charts.load("current", { packages: ["corechart", "bar"] });
google.charts.setOnLoadCallback(drawAnnotations);

function drawAnnotations() {
  var data = google.visualization.arrayToDataTable([
    ["Year", "Price", { role: "style" }],
    ["2005", 565, "color: #76A7FA"],
    ["2006", 789, "color: #76A7FA"],
    ["2007", 950, "color: #76A7FA"],
    ["2008", 1014, "color: #76A7FA"],
    ["2010", 1389, "color: #76A7FA"],
    ["2011", 1560, "color: #76A7FA"],
    ["2012", 1690, "color: #76A7FA"],
    ["2014", 1765, "color: #76A7FA"],
    ["2017", 1843, "color: #76A7FA"],
    ["2018", 1878, "color: #76A7FA"],

    ["2020", 1920, "color: #76A7FA"],
  ]);

  var options = {
    title: "Share Price in corresponding years",
    width: "100%",
    height: "600",
    annotations: {
      alwaysOutside: true,
      textStyle: {
        fontSize: 14,
        color: "#000",
        auraColor: "none",
      },
    },
    hAxis: {
      title: "Increasing Year",
    },
    vAxis: {
      title: "In BDT",
    },
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById("chart_div")
  );
  chart.draw(data, options);
}

$(document).ready(function () {
  $(".block__pic").imagezoomsl({
    zoomrange: [3, 3],
  });
});

$(document).ready(function () {
  $(".thumb-images img").click(function () {
    var image = $(this).attr("src");
    $(".main-image img").attr("src", image);
  });
});
