<template>
  <section >
    <div class="container ">
        <div class="flex between middle header ">
            <p>Compare categories</p>
            <n-button size="small" hierarchy="secondary" icon="question-circle">Learn more</n-button>
        </div>
        <div class="flex category top-spacing-m gap-spacing-m">
            <div>
                <div class="flex middle gap-spacing-3-xs">
                    <img src="~/assets/img/mouse.svg" alt="Mouse icon">
                    <span>Select a category to compare</span>
                </div>
                <div  v-for="item in this.data" :key="item" :style="{ 'border-left': '2px solid' + item.borderColor}">
                    <div class="flex top-spacing-3-xs between middle categories ">
                        <p>{{item.label}}</p>
                        <span>{{item.variation}}</span>
                    </div>
                </div>
            </div>
            <section class=" chart-section h100 flex column">
                <div class="box-title w100 flex middle between">
                    <div class="flex gap-spacing-m top-spacing-l">
                        <div v-for="item in data" :key="item">
                            <chart-legend >{{item.label}}</chart-legend>
                        </div>
                    </div>
                </div>

                <div id="chart-container " class="w100 flex-1 top-spacing-xl">
                    <lineChart :chartData="chartData" :chartOptions="chartOptions" height="300" />
                </div>
            </section>
        </div>
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
 #chart-container div {
        width: 770px;
        // width:100%;
        height: 100%;
    }

.header {
        p{
            height: var(--spacing-s);
            font-weight:var(--text-weight-medium);
            font-size: var(--text-p16-font-size);
            color:var(--color-text);

        }
    }
    section {
        background-color: var(--color-white);
        section {
            border-left: 1px solid var(--color-grey-1 );
        }
            p {
                color:var(--color-text);
            }
        > div {
            padding-left: var(--spacing-l);
        }
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

.container{
    max-width: 1116px; 
    margin: auto; 
    padding: 24px 24px 0 24px;

}

.category{
    border-top: 1px solid var(--color-grey-1);
    margin-right:24px;
    > div {
        padding-top:24px;
    }
}
    .categories {
        box-sizing:border-box;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
        width: 272px;
        height: 51px;
        padding: 16px 17px 17px 24px; 
    }

</style>