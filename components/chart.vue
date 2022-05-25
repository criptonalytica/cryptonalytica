<template>
    <div>
        <lineChart :chartData="chartData" :chartOptions="chartOptions"/>
    </div>
</template>

<script>
export default {
     data() {
        return {
            chartData: {
                    labels: [-50, -40, -30, -20, -10, 0, 10, 20, 30 ,40 ,50],
                    datasets: [
                        {
                            label: "New Coin",
                            backgroundColor: '#4d4dff',
                            borderColor: "#4d4dff",
                            borderWidth: 3,
                            fill: false,
                            data: [40, 20, 92, 43, 72, 31, 86, 92, 61, 60, 89.4, 80],
                            tension: 0.2,
                            pointRadius: 0,
                            pointHoverRadius: 0,
                        },
                        {
                            label: "BTC Change",
                            backgroundColor: '#f473b9',
                            borderColor: '#f473b9',
                            borderWidth: 3,
                            fill: false,
                            data: [70, 10, 0, 20, 30, 20, 29, 54, 50, 53, 56, 90],
                            tension: 0.2,
                            pointRadius: 0,
                            pointHoverRadius:0,
                        }
                    ]
                },
                chartOptions: {
                    maintainAspectRatio: false,
                    responsive: true,
                    scales: {
                        xAxes: [{
                            ticks: {
                                padding: 18,
                                max: 7,
                                color: '#EFF1F2'
                            },
                            gridLines: {
                                drawBorder: false,
                                display: false,
                            },
                        }],
                        yAxes: [{
                            ticks: {
                                padding: 18,
                            },
                            gridLines: {
                                padding: 48,
                                // display: false,
                                drawBorder: false,
                            }
                        }]
                    },
                    title: {
                        display: true,
                        text: 'New Coins launch',
                    },
                    legend: {
                        align: 'end',
                        labels: {
                            boxWidth: 7,
                            boxHeight: 7,
                            usePointStyle: true,
                            fontSize: 12, //13 achei que ficou melhor, mais parecido
                            fontColor: '#5E5E6E',
                            fontFamily: 'Poppins',
                            fontStyle: 'normal'
                        }
                    },
                    elements: {
                        point: {
                            pointStyle: 'rectRounded'
                        }
                    }
                }
            }
        }
}
</script>

<style scoped>
    div {
        max-width: 829px;
        max-height: 439px;
    }
</style>
