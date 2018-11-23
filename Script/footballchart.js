var ctx = document.getElementById("myChart").getContext('2d');
var ctxPie = document.getElementById("ctxPie").getContext('2d');
var ctxArea = document.getElementById("ctxArea").getContext('2d');
Chart.defaults.global.defaultFontColor = 'red';
Chart.defaults.global.defaultFontFamily='Helvetica';
Chart.defaults.global.defaultFontSize=18;
Chart.defaults.global.defaultFontStyle='normal';



var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Black Eagles", "Banana Slugs", "Preachers", "Fighting Cardinals", "The Predators", "Bruins"],
        datasets: [{
            label: 'FootBall Team Scores',
            data: [12, 23, 20, 15, 22, 13],
            backgroundColor: [
                'rgb(115, 190, 224)',
                'rgba(44, 52, 58, 0.2)',
                'rgba(253, 113, 13, 0.2)',
                'hsla(180, 100%, 45%, 0.2)',
                'rgba(119, 0, 61, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 10
        }]
    },
    options: {
		 hover: {
            // Overrides the global setting
            mode: 'index'
        },
         
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true	
                }
            }]
        }
    }
});


var myChart = new Chart(ctxPie, {
    type: 'bar',
    data: {
        labels: ["Black Eagles", "Banana Slugs", "Preachers", "Fighting Cardinals", "The Predators", "Bruins"],
        datasets: [{
            label: 'FootBall Team Scores',
            data: [12, 23, 20, 15, 22, 13],
            backgroundColor: [
                'rgb(115, 190, 224)',
                'rgba(44, 52, 58, 0.2)',
                'rgba(253, 113, 13, 0.2)',
                'hsla(180, 100%, 45%, 0.2)',
                'rgba(119, 0, 61, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
		 hover: {
            // Overrides the global setting
            mode: 'index'
        },
         
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true	
                }
            }]
        }
    }
});



var ctxArea = new Chart(ctxArea, {
    type: 'pie',
    data: {
        labels: ["Black Eagles", "Banana Slugs", "Preachers", "Fighting Cardinals", "The Predators", "Bruins"],
        datasets: [{
            label: 'FootBall Team Scores',
            data: [12, 23, 20, 15, 22, 13],
            backgroundColor: [
                'rgb(115, 190, 224)',
                'rgba(44, 52, 58, 0.2)',
                'rgba(253, 113, 13, 0.2)',
                'hsla(180, 100%, 45%, 0.2)',
                'rgba(119, 0, 61, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
		 hover: {
            // Overrides the global setting
            mode: 'index'
        },
         
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true	
                }
            }]
        }
    }
});