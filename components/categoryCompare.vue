<template>
  <section class="top-spacing-xs box">
        <div class="box-title h32 v24 flex middle between header">
            <n-text type="h6">Compare categories</n-text>
            <n-button size="small" hierarchy="secondary" icon="question-circle">Learn more</n-button>
        </div>
        <div class="flex stretch">
            <div class="categories-sidebar v24">
                <div v-if="!categorySelected" class="empty flex middle gap-spacing-4-xs">
                    <img src="~/assets/img/icons/mouse-pointer.svg">
                    <n-text type="s12">Select a category to compare</n-text>
                </div>

                <div v-for="item in categories" :key="item.label" 
                    @click="setCategory(item)" class="category-item"
                    :style="{'color': item.backgroundColor}"
                    :class="{current:categorySelected==item}"
                    >
                    <span class="line"></span>
                    <div class="flex between middle category-text">
                        <p>{{item.label}}</p>
                        <span>{{item.variation}}</span>
                    </div>
                </div>
            </div>
            <section class="chart-section flex-1 flex column">
                <div class="flex middle">
                    <div class="flex gap-spacing-m">
                        <chart-legend v-for="item in chartData.datasets" :color="item.backgroundColor" :key="item.label">
                            {{item.label}}
                        </chart-legend>
                    </div>
                </div>

                <div id="chart-container" class="w100 flex-1 top-spacing-l">
                    <lineChart :chartData="this.renderData(chartData)" :key="componentKey"
                    :chartOptions="chartOptions" :height="300" />
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
            componentKey: 0,
            categories: [
                {
                    label:'Gaming',
                    data: [40,40,10,5,3,8,23,56,61,90,42],
                    backgroundColor: this.$categoryColor['gaming'],
                    variation: -1.23,
                },
                {
                    label:'DeFi',
                    data: [40,40,10,5,3,8,23,56,61,90,42],
                    backgroundColor:'#F473B9',
                    variation: -1.23,
                },
                {
                    label:'Mobile',
                    data: [60,11,24,56,62,12,26,52,96,80,31],
                    backgroundColor:'#E55758',
                    variation: 4.23,
                },
                {
                    label:'Payment',
                    data: [80,23,56,76,80,42,40,10,20,50,63],
                    backgroundColor:'#1F9EFF',
                    variation: 2.23,
                },
                {
                    label:'Web3',
                    data: [80,23,56,76,80,42,40,10,20,50,63],
                    backgroundColor: this.$categoryColor['web3'],
                    variation: 2.23,
                },
            ],
            categorySelected: false,
            chartData: {
                    labels: [-50, -40, -30, -20, -10, 0, 10, 20, 30 ,40 ,50],
                    datasets: [
                        {
                            label:'Bitcoin',
                            data: [40,10,20,50,30,30,23,56,46,38,42],
                            backgroundColor:'#F7931A',
                        },
                        {
                            label:'Criptonalytica index',
                            data: [30,20,30,60,40,50,43,66,56,30,62],
                            backgroundColor:'#4D4DFF',
                        },
                    ],
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
            var datasets = data.datasets;
            for (var dataIndex in datasets) {
                datasets[dataIndex]['tension'] = .05;
                datasets[dataIndex]['pointRadius'] = 20;
                datasets[dataIndex]['pointHoverRadius'] = 20;
                datasets[dataIndex]['borderColor'] = datasets[dataIndex]['backgroundColor'];
                datasets[dataIndex]['pointBackgroundColor'] = 'transparent';
                datasets[dataIndex]['pointBorderColor'] = 'transparent';
                datasets[dataIndex]['fill'] = false;
            }
           return data;
        },


        setCategory(category) {            
            if(this.categorySelected !== category) {
                if(this.categorySelected) this.chartData.datasets.splice(0,1)
                this.chartData.datasets.unshift(category)
                this.componentKey += 1; //force render
            }
            this.categorySelected = category
            // console.log(this.categorySelected)
            // console.log(this.componentKey)
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
        > div {
            position: relative;
            z-index: 5;
        }
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

    .empty {
        padding-bottom: var(--spacing-xs);
        color: var(--color-grey-5);
    }

    .category-item {
        box-shadow: var(--drop-shadow-4);
        border: var(--border-grey-1);
        border-radius: var(--border-radius-xs);
        position: relative;
        overflow: hidden;
        // transition: s;

        &:before {
            content: '';
            border-left: 3px solid;
            position: absolute;
            left: 0; top: 0; bottom: 0;
            transition: .3s;
        }

        & + & {margin-top: var(--spacing-3-xs);}

        .category-text {
            padding: var(--spacing-xs) var(--spacing-m);
            color: var(--color-text);
        }

        &:not(.current):hover {
            cursor: pointer;
            background: var(--color-background)
        }

        &.current {
            border: 2px solid;
            &:before {border-left-width: 5px}
        }
    }

</style>