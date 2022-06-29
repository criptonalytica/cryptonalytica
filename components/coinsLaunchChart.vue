<template>
    <section class="chart-section h100 flex column">
        <div class="chart-title box-title w100 flex wrap middle between gap-spacing-2-xs">
            <div class="flex middle">
                <n-text type="h6" weight="medium">New coins launch</n-text>
                <n-button size="small" hierarchy="secondary" iconPosition="right" icon="grey-question-circle"></n-button>
            </div>
            <div class="flex gap-spacing-m">
                <chart-legend v-for="item in data" :color="item.backgroundColor" :key="item.label">
                    {{item.label}}
                </chart-legend>
            </div>
        </div>

        <!-- Teste -->
        <!-- <div @click="removeDataset()"></div> -->
        <!-- <div class="line-legend" v-html="chartLegend"></div> -->

        <div id="chart-container" class="w100 flex-1">
            <lineChart ref="bar" @sendLegend="setLegend" :chartData="chartData" :chartOptions="chartOptions" :height="300"/>
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
            chartLegend: null,
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
                        ticks: {
                            beginAtZero: true,
                            callback: function(value) {
                                return `${value}%`; 
                            },
                            padding: 18,
                            maxTicksLimit: 8,
                        },
                        gridLines: {
                            padding: 48,
                            drawBorder: false,
                        }
                    }]
                },
                legend: {
                    display:false,
                },
            }
        }
    },
    mounted () {
    },
    methods: {
        setLegend(value) {
            this.chartLegend = value
        },
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
    .chart-title {
        white-space: nowrap;
    }

    #chart-container div {
        height: 100%;
    }

    #chart-container {
        position: relative;

        > div {
            position: relative;
            z-index: 5;
        }

        &:before {
            content: '';
            position: absolute;
            left: calc(50% + 26px);
            top: 0;
            bottom: 36px;
            border-left: 2px dashed var(--color-grey-3);
        }
    }
</style>
