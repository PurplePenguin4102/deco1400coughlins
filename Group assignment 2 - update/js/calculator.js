// this file uses a chart plugin from http://www.chartjs.org/
window.addEventListener("load", setup, false);
// set up globals
var ctx;
var lineChart;

function setup() {
	// grab the calculate button
	var button = document.getElementById("compute");
	// grab the chart object
	ctx = document.getElementById("myChart").getContext("2d");

	// set the button's behaviour on click
	button.onclick = calculate;
	// calculate the chart with default options
	calculate();
}

function calculate() {

	// first we get the x values of our chart by considering the start and retirement age
	var xrange = [];
	var xstart = parseInt(document.getElementById("current").value);
	var xend = parseInt(document.getElementById("retirement").value);

	// we construct the xrange with a simple loop
	for (i = 0; i <= xend - xstart; i++) {
		xrange.push(i + xstart);
	}

	// we grab the user variables that let us work out the parts of our model
	// we need principle P
	var principle = parseInt(document.getElementById("starting").value);
	// the rate r will be interest - inflation in today's dollars, we then factor in living standards
	var interest = parseInt(document.getElementById("interest").value)/100;
	var inflation = 2.5/100;
	var standards = 1/100;
	interest -= (inflation + standards);
	

	// PMT will be from our monthly contribution, 9.25% of salary, nominated "monthly" value and take away fees
	var fees = 50;
	var salary = parseInt(document.getElementById("salary").value) * 0.0925 ;
	var monthly = parseInt(document.getElementById("monthly").value);
	var insurance = 100;
	var contribution = salary + monthly * 12 - fees - insurance;


	// finally the whole thing is taxed yearly
	var tax = 1 - 8 / 100;
	
	// pretentious name for data that means "data point"
	var datum = [];

	// now we work out the model, I used: A = P + PMT * (1 + r) * ((1 + r)^t - 1) * r^(-1) * tax
	// source: http://www.cs.ucr.edu/~ehwang/interest.html
	// we compound yearly for this case. I'm fairly sure this model is not realistic to 
	// superannuation but for this assignment I thought look was more important
	for (i = 0; i <= xrange.length; i++) {
		datum.push((principle + 
					contribution * 
					(1 + interest) * 
					(Math.pow((1 + interest), (i)) - 1) / 
					(interest) * 
					tax).toFixed(2));
	}

	// now we populate our chart with data
	var data = {
		// labels first
    	labels: xrange,
    	// now we style the data
    	datasets: [
	        {	
	        	// tbh I'm not sure where this label goes but chart.js recommends it, might be for accessibility?
	            label: "Superannuation",
	            // color for underneath the line
	            fillColor: "rgba(255, 217, 1, 0.2)",
	            // colour for the line
	            strokeColor: "rgba(255, 217, 1, 1)",
	            // colour for the point
	            pointColor: "rgba(255, 217, 1, 1)",
	            // extra default styling that makes it look a little better
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(255, 250, 139, 1)",
	            // construct data from datum
	            data: datum
	        }
	    ]
    };
    var options = {
   		// we don't nee dthe vertical lines
 	   	scaleShowVerticalLines: false,
 	   	// so the mouse only detects the point we're hovering
 	   	pointHitDetectionRadius : 4,
 	   	// Boolean - If we want to override with a hard coded scale
	   	scaleOverride: true,
	   	// Number - The number of steps in a hard coded scale
	   	scaleSteps: 11,
	   	// Number - The value jump in the hard coded scale
	   	scaleStepWidth: Math.ceil((datum[datum.length - 1] / 10).toFixed(0) / 1000) * 1000,
	   	// Number - The scale starting value
	   	scaleStartValue: 0
	};

	// on the first load there will be no chart so no need to destroy it
    if (lineChart != null) {
    	// on subsequent calculations we need to destroy the chart first before making a new one
		lineChart.destroy();
	}

	// make the chart
    lineChart = new Chart(ctx).Line(data, options);

    // display the final result of your superannuation in the div below
    var result = document.getElementById("result");
    result.innerHTML = "Your Super at " + xend + " is: $" + datum[xrange.length - 1];
    // simple error checking
    if (isNaN(datum[xrange.length - 1])) {
    	result.innerHTML = "Please only use numbers"
    }
}