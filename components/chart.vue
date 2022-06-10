<template>
    <section>
        <div class="box-title flex middle between">
            <n-text type="h6" weight="medium">New coins launch</n-text>
            <div class="flex gap-spacing-m">
                <span ><chart-legend color="primary" >New coin</chart-legend></span>
                <chart-legend color="pink">BTG Change</chart-legend>
            </div>
        </div>
        

        <lineChart :chartData="chartData" :chartOptions="chartOptions" />
    </section>
</template>

<script>

export default {
    props: {
        newCoinData: Array,
        BTCData: Array,
    },
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
                            data: this.newCoinData,
                            tension: 0.1,
                            pointRadius: 0,
                            pointHoverRadius: 0,
                        },
                        {
                            label: "BTC Change",
                            backgroundColor: '#f473b9',
                            borderColor: '#f473b9',
                            borderWidth: 3,
                            fill: false,
                            data: this.BTCData,
                            tension: 0.1,
                            pointRadius: 0,
                            pointHoverRadius:0,
                        }
                    ]
                },
                chartOptions: {
                    maintainAspectRatio: false,
                    responsive: true,
                    title: {
                        display: false,
                        text: 'New Coins launch',
                        align: 'start'
                    },
                    annotation: {
                         annotations: {
                            line1: {
                                type: 'line',
                                xMin: 0,
                                xMax:0,
                                borderColor: 'rgb(255, 99, 132)',
                                borderWidth: 2,
                            }
                        }
                    },
                    scales: {
                        xAxes: [{
                            ticks: {
                                beginAtZero: true,
                                padding: 18,
                                max: 7,
                                color: '#808589',
                            },
                            gridLines: {
                                drawBorder: false,
                                display: false,
                            },
                        }],
                        yAxes: [{
                            grace: '10%',
                            beginAtZero: true,
                            ticks: {
                                callback: function(value) {
                                    return `${value}%`; 
                                },
                                padding: 18,
                            },
                            gridLines: {
                                padding: 48,
                                // display: false,
                                drawBorder: false,
                            }
                        }]
                    },
                    
                    legend: {
                        display:false,
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
        },
    // computed: {
    //     onlyNewCoin: ()=> {
    //         console.log(this.chartData.datasets[0])
    //     }
    // },
    // methods: {
    //     NCoin: function() {
    //         this.chartData = {
    //             labels: [-50, -40, -30, -20, -10, 0, 10, 20, 30 ,40 ,50],
    //             datasets: [
    //                 {
    //                     label: "New Coin",
    //                     backgroundColor: '#4d4dff',
    //                     borderColor: "#4d4dff",
    //                     borderWidth: 3,
    //                     fill: false,
    //                     data: [40, 45, 65, 54, 32, 20, 92, 43, 72, 31, 86, 92, 61, 60, 89.4, 80],
    //                     tension: 0.1,
    //                     pointRadius: 0,
    //                     pointHoverRadius: 0,
    //                 }
    //             ]
    //         },
    //         this.chartOptions = {
    //                 maintainAspectRatio: false,
    //                 responsive: true,
    //                 title: {
    //                     display: false,
    //                     text: 'New Coins launch',
    //                     align: 'start'
    //                 },
    //                 scales: {
    //                     xAxes: [{
    //                         ticks: {
    //                             beginAtZero: true,
    //                             padding: 18,
    //                             max: 7,
    //                             color: '#808589',
    //                         },
    //                         gridLines: {
    //                             drawBorder: false,
    //                             display: false,
    //                         },
    //                     }],
    //                     yAxes: [{
    //                         grace: '10%',
    //                         beginAtZero: true,
    //                         ticks: {
    //                             callback: function(value) {
    //                                 return `${value}%`; 
    //                             },
    //                             padding: 18,
    //                         },
    //                         gridLines: {
    //                             padding: 48,
    //                             // display: false,
    //                             drawBorder: false,
    //                         }
    //                     }]
    //                 },
                    
    //                 legend: {
    //                     display:false,
    //                     align: 'end',
    //                     labels: {
    //                         boxWidth: 7,
    //                         boxHeight: 7,
    //                         usePointStyle: true,
    //                         fontSize: 12, //13 achei que ficou melhor, mais parecido
    //                         fontColor: '#5E5E6E',
    //                         fontFamily: 'Poppins',
    //                         fontStyle: 'normal'
    //                     }
    //                 },
    //                 elements: {
    //                     point: {
    //                         pointStyle: 'rectRounded'
    //                     }
    //                 }
    //             }
    //     }
    // }
}
</script>

<style scoped>
    div {
        max-width: 829px;
        max-height: 439px;
    }
</style>
