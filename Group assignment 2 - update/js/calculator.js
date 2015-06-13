window.addEventListener("load", setup, false);

function setup() {
	var button = document.getElementById("compute");
	button.onclick = calculate;
	calculate();
}

function calculate() {

	var xrange = [];
	var xstart = parseInt(document.getElementById("current").value);
	var xend = parseInt(document.getElementById("retirement").value);
	for (i = 0; i < xend - xstart; i++) {
		xrange.push(i + xstart);
	}

	var principle = parseInt(document.getElementById("starting").value);
	var interest = parseInt(document.getElementById("interest").value)/100;
	var inflation = 2.5/100;
	var salary = parseInt(document.getElementById("salary").value) * 0.0925 ;
	var monthly = parseInt(document.getElementById("monthly").value);
	var contribution = salary/12 + monthly;

	var datum = [];
	for (i = 0; i < xrange.length; i++) {
		datum.push(contribution * (1 + interest / 12) * (Math.pow((1 + interest / 12), (i * 12)) - 1) / (interest/12));

			//(principle * Math.pow((1 + interest / 12), (12 * i))) +
			//contribution * ((Math.pow(1 + interest / 12), (12 * i - 1)) / (interest / 12)));
	}

	var data = {
    	labels: xrange,
    	datasets: [
	        {
	            label: "My First dataset",
	            fillColor: "rgba(220,220,220,0.2)",
	            strokeColor: "rgba(220,220,220,1)",
	            pointColor: "rgba(220,220,220,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(220,220,220,1)",
	            data: datum
	        }
	    ]
    };
	var ctx = document.getElementById("myChart").getContext("2d");
	var myNewChart = new Chart(ctx).Line(data);
}