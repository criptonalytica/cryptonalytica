<template>
    <section class="chart-section h100 flex column">
        <div class="box-title w100 flex middle between">
            <div class="flex middle">
                <n-text type="h6" weight="medium">New coins launch</n-text>
                <n-button size="small" hierarchy="secondary" iconPosition="right" icon="grey-question-circle"></n-button>
            </div>
            <div class="flex gap-spacing-m">
                <div>
                    <chart-legend color="primary">New coin</chart-legend>
                </div>
                <div>
                    <chart-legend color="pink">BTG Change</chart-legend>
                </div>
            </div>
        </div>

        <div id="chart-container" class="w100 flex-1">
            <lineChart :chartData="chartData" :chartOptions="chartOptions" :height="300"/>
        </div>
    </section>
</template>

<script>

export default {
    props: {
        data: Array,
    },
    data() {
        return {
            chartData: {
                    labels: [-50, -40, -30, -20, -10, 0, 10, 20, 30 ,40 ,50],
                    datasets: this.renderData(this.data),
                },
                chartOptions: {
                    maintainAspectRatio: false,
                    responsive: true,
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
                                drawBorder: false,
                            }
                        }]
                    },
                    legend: {
                        display:false,
                    }
                }
            }
    },
    methods: {
        renderData(data) {
            for (var dataIndex in data) {
                data[dataIndex]['tension'] = 0.01;
                data[dataIndex]['pointRadius'] = 8;
                data[dataIndex]['pointHoverRadius'] = 4;
                data[dataIndex]['pointBackgroundColor'] = 'transparent';
                data[dataIndex]['pointBorderColor'] = 'transparent';
            }
           return data;
        }
    }
}
</script>

<style lang="scss" scoped>
    #chart-container div {
        height: 100%;
    }

    #chart-container {
        position: relative;
        &:before {
            content: '';
            position: absolute;
            left: calc(50% + 27px);
            top: 0;
            bottom: 36px;
            border-left: 2px dashed var(--color-grey-3);
        }
    }
</style>
