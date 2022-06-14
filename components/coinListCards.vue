<template>
    <section class="coin-container gap-spacing-s">
        <div class="coin-item" v-for="(coin,index) in data" v-if="index<max" :key="coin">
            <div class="head flex between">
                <div class="coin flex middle">
                    <div class="icon"><img :src="coin.icon"></div>
                    <div class="name">
                        <span :class="['category', stringfy(coin.category)]">{{coin.category}}</span>
                        <n-text type="h6">{{coin.name}}</n-text>
                    </div>
                </div>
                <div class="numbers flex gap-spacing-l">
                    <div class="price">
                        <span class="label">Price</span>
                        ${{coin.price.toFixed(2)}}
                    </div>
                    <div class="day">
                        <span class="label">24h</span>
                        <span :class="percentVariation(coin.oneDay)">
                            {{coin.oneDay}}
                        </span>
                    </div>
                    <div class="seven-days">
                        <span class="label">7 Days</span>
                        {{coin.sevenDays}}
                    </div>
                </div>
            </div>
            <div class="botton flex between">
                <div class="start">
                    <span class="label">Start</span>
                    {{coin.start}}
                </div>
                <div class="marketcap">
                    <span class="label">Market cap</span>
                    {{coin.marketcap}}
                </div>
                <div class="volume">
                    <span class="label">24 Volume</span>
                    {{coin.volume}}
                </div>
                <div class="circ">
                    <span class="label">Circ. Supply</span>
                    {{coin.circ}}
                </div>
                <div class="weight">
                    <span class="label">Weight</span>
                    {{coin.weight}}
                </div>
                <!-- {{coin}} -->
            </div>
            
        </div>
    </section>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
        },
        max: {
            type: Number
        }
    },
    data() {
        return {
            x: 'y'
        }
    },
    methods:{
        stringfy(str = '') {
            const strArr = str.split(' ');
            const snakeArr = strArr.reduce((acc, val) => {
                return acc.concat(val.toLowerCase());
            }, []);
            return snakeArr.join('-');
        },
        percentVariation(value) {
            if(typeof value === 'string') {
                if(value.startsWith('-')) return 'variation down';
                if(value.startsWith('+')) return 'variation up';
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.coin-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-bottom: var(--spacing-xs);

    .coin-item {
        padding: 0 var(--spacing-m);
        color: var(--color-grey-4);
        border: var(--border-grey-1);
        border-radius: var(--border-radius-xs);

        .head {
            padding: var(--spacing-xs) 0;
            color: var(--color-text);

            .icon {
                width: 32px; height: 32px; overflow: hidden; border-radius: 50%;
                margin-right: var(--spacing-2-xs);
                img {min-width: 100%; height: auto;}
            }
            .category {
                font-size: var(--text-s12-font-size);
                // font-weight: var(--text-weight-medium);
                display: block;
                margin-bottom: -2px;
            }

            .numbers {
                font-weight: var(--text-weight-medium);
                font-size: var(--text-s14-font-size);
            }

            .label {font-size: var(--text-s12-font-size);}
        }

        .botton {
            border-top: var(--border-grey-1);
            padding: var(--spacing-xs) 0;
            font-size: var(--text-s12-font-size);
        }

        .category {
            color:var(--color-primary);
            &.defi {color: var(--color-pink);}
            &.gaming {color: var(--color-blue);}
            &.mobile {color: var(--color-red);}
        }


        .label {
            display: block;
            font-size: var(--text-s12-font-size);
            color: var(--color-grey-3);
            font-weight: var(--text-weight-regular);
        }
    }
}
</style>