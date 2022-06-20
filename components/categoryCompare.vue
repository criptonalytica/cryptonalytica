<template>
  <section class="top-spacing-xs box">
        <div class="box-title h32 v24 flex middle between header">
            <n-text type="h6">Compare categories</n-text>
            <n-button size="small" hierarchy="secondary" icon="question-circle">Learn more</n-button>
        </div>
        <div class="flex stretch">
            <div class="categories-sidebar v24">
                <div class="flex middle gap-spacing-3-xs">
                    <img src="~/assets/img/mouse.svg" alt="Mouse icon">
                    <span>Select a category to compare</span>
                </div>
                <div  v-for="item in this.data" :key="item.label" :style="{ 'border-left': '2px solid' + item.borderColor}">
                    <div class="flex top-spacing-3-xs between middle categories ">
                        <p>{{item.label}}</p>
                        <span>{{item.variation}}</span>
                    </div>
                </div>
            </div>
            <section class="chart-section flex-1 flex column">
                <div class="flex middle">
                    <div class="flex gap-spacing-m">
                        <chart-legend v-for="item in data" :color="item.backgroundColor" :key="item.label">
                            {{item.label}}
                        </chart-legend>
                    </div>
                </div>

                <div id="chart-container" class="w100 flex-1 top-spacing-l">
                    <lineChart :chartData="chartData" :chartOptions="chartOptions" :height="300" />
                </div>
            </section>
        </div>
  </section>
</template>

<script>
export default {
    props: {
        data: Array
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
                data[dataIndex]['fill'] = false;
            }
           return data;
        }
    }
}
</script>

<style scoped lang="scss">

    .header {
        border-bottom: 1px solid var(--color-grey-1);
        margin-bottom: 0;
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

    .chart-section {
        padding: var(--spacing-m) var(--spacing-l);
    }

    .categories-sidebar {
        width: 30%;
        max-width: 320px;
        min-width: 200px;
        border-right: 1px solid var(--color-grey-1);
        padding: var(--spacing-m);
    }

    .categories {
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
        padding: 16px 17px 17px 24px; 
    }

</style>