
        const ctx = document.getElementById('realTimeChart').getContext('2d');
        let chart;
        
        // Initial data
        const initialData = {
            labels: [],
            datasets: [{
                label: 'Value',
                data: [],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false,
            }],
        };

        // Chart configuration
        const chartConfig = {
            type: 'line',
            data: initialData,
            options: {
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom',
                        title: {
                            display: true,
                            text: 'Time',
                        },
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Value',
                        },
                    },
                },
                animation: false,
            },
        };

        // Initialize the chart
        chart = new Chart(ctx, chartConfig);

        // random data
        function addData() {
            const newData = Math.random() * 100; 
            chart.data.labels.push(chart.data.labels.length);
            chart.data.datasets[0].data.push(newData);
            chart.update();
        }

        setInterval(addData, 1000);
