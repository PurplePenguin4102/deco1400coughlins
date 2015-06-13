window.addEventListener("load", setup, false);
var datum;
var ctx;
var lineChart;

function setup() {
	var button = document.getElementById("compute");
	ctx = document.getElementById("myChart").getContext("2d");

	button.onclick = calculate;
	calculate();
}

function calculate() {

	var xrange = [];
	var xstart = parseInt(document.getElementById("current").value);
	var xend = parseInt(document.getElementById("retirement").value);
	for (i = 0; i <= xend - xstart; i++) {
		xrange.push(i + xstart);
	}

	var principle = parseInt(document.getElementById("starting").value);
	var interest = parseInt(document.getElementById("interest").value)/100;
	var inflation = 2.5/100;
	var salary = parseInt(document.getElementById("salary").value) * 0.0925 ;
	var monthly = parseInt(document.getElementById("monthly").value);
	var contribution = salary/12 + monthly;
	var tax = 1 - 8 / 100;

	var datum = [];
	for (i = 0; i <= xrange.length; i++) {
		datum.push((principle + contribution * (1 + interest / 12) * (Math.pow((1 + interest / 12), (i * 12)) - 1) / (interest/12) * tax).toFixed(2));
	}
	var data = {
    	labels: xrange,
    	datasets: [
	        {
	            label: "Superannuation",
	            fillColor: "rgba(255, 217, 1, 0.2)",
	            strokeColor: "rgba(255, 217, 1, 1)",
	            pointColor: "rgba(255, 217, 1, 1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(255, 250, 139, 1)",
	            data: datum
	        }
	    ]
    };
    var options = {
 	   scaleShowVerticalLines: false,
 	   pointHitDetectionRadius : 4,
 	   // Boolean - If we want to override with a hard coded scale
	   scaleOverride: true,

	   // ** Required if scaleOverride is true **
	   // Number - The number of steps in a hard coded scale
	   scaleSteps: 11,
	   // Number - The value jump in the hard coded scale
	   scaleStepWidth: Math.ceil((datum[datum.length - 1] / 10).toFixed(0) / 1000) * 1000,
	   // Number - The scale starting value
	   scaleStartValue: 0
	};

    if (lineChart != null) {
		lineChart.destroy();
	}

    lineChart = new Chart(ctx).Line(data, options);

    var result = document.getElementById("result");
    result.innerHTML = "Your Super at " + xend + " is: $" + datum[xrange.length - 1];
}