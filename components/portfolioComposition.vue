<template>
<section>
    <div class="section-title flex between middle">
        <n-text type="h4" weight="bold">VCs Portfolio composition</n-text>
        <n-button size="small" hierarchy="secondary" iconPosition="right" icon="arrow-right">See all</n-button>
    </div>

    <section class="flex wrap gap-spacing-xs">
        <div class="portfolio-item flex-1 box v16 h24" v-for="item in portfolioList">
            <div class="header flex gap-spacing-4-xs middle between">
                <div class="text">
                    <n-text type="s12">Portfolio name</n-text>
                    <n-text type="h6" weight="medium">{{item.name}}</n-text>
                </div>
                <div class="number">
                    <n-text type="s12">Last day</n-text>
                    <span :class="percentVariation(item.last)">{{item.last}}%</span>
                </div>
            </div>

            <div class="chart flex gap-spacing-4-xs">
                <div class="chart-item flex column gap-spacing-3-xs" 
                    v-for="chartItem in item.chart" 
                    :style="{'width': chartItem.value + '%'}">
                    <div class="legend">
                        <n-text weight="bold">{{chartItem.value}}%</n-text>
                        <n-text>{{chartItem.name}}</n-text>
                    </div>
                    <div class="bar" :style="{background:$categoryColor[$utils.stringfy( chartItem.name )]}"></div>
                </div>  
            </div>
        </div>
    </section>
</section>
</template>

<script>
export default {
data() {
    return {
        portfolioList: [
            {
                name: "Coinbase Ventures Portfolio",
                last: 8.49,
                chart: [
                    {name: 'Gaming', value: '28'},
                    {name: 'Mobile', value: '37'},
                    {name: 'Payment', value: '12'},
                    {name: 'Others', value: '23'},
                ]
            },
            {
                name: "Polychain Capital Portfolio",
                last: 3.28,
                chart: [
                    {name: 'Gaming', value: '28'},
                    {name: 'DeFi', value: '37'},
                    {name: 'Payment', value: '12'},
                    {name: 'Others', value: '23'},
                ]
            },
            {
                name: "DragonFly Capital Portfolio",
                last: -4.84,
                chart: [
                    {name: 'Gaming', value: '28'},
                    {name: 'DeFi', value: '37'},
                    {name: 'Payment', value: '12'},
                    {name: 'Others', value: '23'},
                ]
            },
            
        ],

    }
},
methods:{
    percentVariation(value) {
        if(typeof value === 'number') {
            if(value<0) return 'variation down';
            else return 'variation up';
        }
    }
},
}
</script>

<style lang="scss" scoped>
section {
    margin-bottom: var(--spacing-l);
}

.portfolio-item {
    .header {
        border-bottom: 1px solid var(--color-grey-1);
        padding-bottom: var(--spacing-xs);
        .s12 {
            color: var(--color-grey-4);
            margin-bottom: var(--spacing-4-xs);
        }

        .number {
            text-align: right;
            white-space: nowrap;
        }

        .variation {
            font-weight: var(--text-weight-bold);

            &.up {
                color: var(--color-green);
                &:before {content: '+';}
            }
            &.down {color: var(--color-red)}
        }
    }

    .chart {
        padding: var(--spacing-l) 0 var(--spacing-3-xs);
        .chart-item {
            .legend {
                height: 42px;
                > div:last-child {margin-top: -2px;}
            }

            // Cria pseudo-elemento para alinhamento
            &::after {content: ''; height: 42px;}

            &:nth-child(even) {
                flex-direction: column-reverse;
            }
            
            .bar {
                width: 100%; height: 12px;
                background: var(--color-grey-5);
            }

            &:first-child .bar {
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;
            }

            &:last-child .bar {
                border-top-right-radius: 20px;
                border-bottom-right-radius: 20px;
            }
        }
    }


}
</style>