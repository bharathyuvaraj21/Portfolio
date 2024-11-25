const ctx1 = document.getElementById('timeSeriesChart').getContext('2d');
new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Meat Prices ($)',
            data: [100, 110, 105, 120, 125, 130],
            borderColor: '#007bff',
            backgroundColor: 'rgba(0,123,255,0.2)'
        }]
    },
    options: { responsive: true }
});

const ctx2 = document.getElementById('crimeChart').getContext('2d');
new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Theft', 'Assault', 'Burglary', 'Vandalism'],
        datasets: [{
            label: 'Incidents',
            data: [300, 150, 200, 100],
            backgroundColor: ['#007bff', '#28a745', '#dc3545', '#ffc107']
        }]
    },
    options: { responsive: true }
});
