var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var color = Chart.helpers.color;
var barChartData = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	datasets: [{
		label: 'Data',
		backgroundColor: color(window.chartColors.green).alpha(0.4).rgbString(),
		borderColor: window.chartColors.green,
		borderWidth: 1,
		data: [
			30,
			56,
			23,
			10,
			100,
			20,
			5,50,56,6,23,56
		]
	}]

};
var colors = Chart.helpers.color;
var customers = {
	labels: ['Men', 'Women', 'Kids', 'Boys', 'Girls', 'Another'],
	datasets: [{
		label: 'Data',
		backgroundColor: color(window.chartColors.blue).alpha(0.4).rgbString(),
		borderColor: window.chartColors.blue,
		borderWidth: 1,
		data: [
			50,
			200,
			25,
			75,
			250,
			100
		]
	}]

};
var other = {
	type: 'line',
	data: {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [{
			label: '',
			fill: false,
			borderColor: window.chartColors.green,
			backgroundColor: window.chartColors.green,
			data: [
				0,
				66,
				75,
				34,
				100,
				56,
				23
			]
		}, {
			label: '',
			fill: false,
			borderColor: window.chartColors.blue,
			backgroundColor: window.chartColors.blue,
			data: [
				56,
				45,
				200,
				34,
				345,
				67,
				45
			]
		}]
	},
	options: {
		responsive : false,
		legend: {
			position: ""
		},
		title: {
			text: ''
		}
	}
};

window.onload = function() {
	var ctx = document.getElementById('canvas').getContext('2d');
	var ctxCustomers = document.getElementById('customers').getContext('2d');
	var ctxProducts = document.getElementById('products').getContext('2d');
	var ctxOther = document.getElementById('other').getContext('2d');

	window.myBar = new Chart(ctx, {
		type: 'bar',
		data: barChartData,
		options: {
			responsive: false,
			legend: {
				position: "",
			},
			title: {
				display: true,
				text: ''
			}
		}
	});
	window.customers = new Chart(ctxCustomers,{
		type: 'line',
		data: customers,
		options: {
			responsive: false,
			legend: {
				position: "",
			},
			title: {
				display: true,
				text: ''
			}
		}
	});
	window.other = new Chart(ctxOther,other);
	window.products = new Chart(ctxProducts,{
		type: 'pie',
		data: {
			datasets : [{
				data : [
					10,
					20,
					40
				],
				borderColor : [
					"#4CB7D2",
					"#1E666D",
					"#009A92"
				],
				backgroundColor : [
					"#4CB7D2",
					"#1E666D",
					"#009A92"
				],
				label : "dat 1" 
			}],
			labels : [
				'One',
				'Two',
				'Three'
			]
		},
		options: {
			responsive: false
		}
	});

};

var colorNames = Object.keys(window.chartColors);
