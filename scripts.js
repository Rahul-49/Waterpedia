document.addEventListener('DOMContentLoaded', function () {
    const transformationEffect = document.querySelector('.transformation-effect');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    });

    observer.observe(transformationEffect);
    
    const ctx = document.getElementById('waterResourcesChart').getContext('2d');
    const waterResourcesChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Oceans', 'Glaciers and Ice Caps', 'Groundwater', 'Lakes', 'Rivers', 'Atmosphere'],
            datasets: [{
                label: 'Water Resources',
                data: [97.5, 1.74, 0.75, 0.013, 0.0002, 0.001],
                backgroundColor: [
                    '#1e90ff',
                    '#00bfff',
                    '#4682b4',
                    '#5f9ea0',
                    '#00ced1',
                    '#afeeee'
                ],
                borderColor: '#ffffff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Distribution of Earth\'s Water Resources'
                }
            }
        }
    });
});
