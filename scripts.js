// Time Series Analysis Chart
const ctx1 = document.getElementById('timeSeriesChart').getContext('2d');
new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [{
            label: 'USDA Meat Prices ($)',
            data: [120, 130, 125, 140, 150, 155, 160, 170],
            borderColor: '#007bff',
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' }
        }
    }
});

// Crime Data Chart
const ctx2 = document.getElementById('crimeChart').getContext('2d');
new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Theft', 'Assault', 'Burglary', 'Vandalism'],
        datasets: [{
            label: 'Incidents',
            data: [500, 300, 150, 200],
            backgroundColor: ['#007bff', '#28a745', '#dc3545', '#ffc107']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        }
    }
});
