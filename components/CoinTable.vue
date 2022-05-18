<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th v-for="(title, key) in tableData.thead" @click="sort(key)">
                        {{title}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row) in sortedData">
                    <!-- Object.keys(tableData.thead).length -->
                    <td v-for="(value, key) in row" v-if="key!='supports'" :class="key">
                        <!-- Se for o nome da cripto -->
                        <div v-if="key=='coin'" class="flex middle">
                            <div class="icon">
                                <img :src="row.supports.icon">
                            </div>
                            <p>{{value}}</p>
                            <span class="ticker">{{row.supports.ticker}}</span>
                        </div>

                        <!-- Se for qualquer outro valor -->
                        <span v-else :class="percentVariation(value)">{{value}}</span>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- debug do sortable: sort={{currentSort}}, dir={{currentSortDir}} -->
    </div>
</template>

<script>
export default {

    data() {
        return {
            tableData: {
                tbody: [
                    {
                        ranking: '01', coin: 'Woo network', price: 118.00, oneDay: '+2.32', sevenDays: '-4.12', start: 'Mar, 2022', market: 28, volume: 16, circ: 54, weight: 11, 
                        supports: {icon: 'https://s2.coinmarketcap.com/static/img/coins/200x200/7501.png', ticker: 'WOO'}
                    },
                    {
                        ranking: '02', coin: 'Anchor Crypto', price: 203.00, oneDay: '+2.32', sevenDays: '-4.12', start: 'Feb, 2022', market: 28, volume: 16, circ: 54, weight: 11, 
                        supports: {icon: 'https://avatars.githubusercontent.com/u/67821563?s=280&v=4', ticker: 'WOO'}
                    },
                ],
                thead: {
                    ranking: '#',
                    coin: 'Name', //a chave sempre deve chamar 'coin'
                    price: 'Price',
                    oneDay: '24h',
                    sevenDays: '7 Days',
                    start: 'Start',
                    market: 'Market Cap',
                    volume: '24h Volume',
                    circ: 'Cic. Supply',
                    weight: 'Weight'
                },
            },

            currentSort: 'ranking',
            currentSortDir:'asc',
        }
    },

    
    // icon: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.
    // icon:'https://s2.coinmarketcap.com/static/img/coins/64x64/6756.png', 

    methods:{
        // faz parte da função de ordenação da tabela
        sort:function(s) {
            //if s == current sort, reverse
            if(s === this.currentSort) {
            this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
            }
            this.currentSort = s;
        },
        
        percentVariation(value) {
            if(typeof value === 'string') {
                if(value.startsWith('-')) return 'variation down';
                if(value.startsWith('+')) return 'variation up';
            }
        }
    },
    computed: {
        sortedData:function() {
            // console.log(this.tableData.tbody);
            return this.tableData.tbody.sort((a,b) => {
                let modifier = 1;
                if(this.currentSortDir === 'desc') modifier = -1;
                if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
                if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
                return 0;
            });
        }
    }
}


</script>

<style lang="scss" scoped>
    table {
        // table-layout: fixed;
        width: 100%;
        font-size: var(--text-s14-font-size);
        color: var(--color-grey-5);
        
        thead {
            text-align: left;
            th {
                font-weight: var(--text-weight-regular);
                font-size: var(--text-s12-font-size);
                color: var(--color-grey-4);
            }
        }
    

        td, th {
            // &:not(.name) {width: 100px;} 
            padding-top: 16px; padding-bottom: 16px;

            &.coin {
                width: 220px;
                white-space: nowrap;
                padding-right: 24px;

                p {
                    font-weight: var(--text-weight-medium);
                    color: var(--color-text);
                    margin-left: var(--spacing-3-xs);
                }

                .ticker {
                    color: var(--color-grey-3);
                    margin-left: var(--spacing-2-xs);
                }
            } 

            &:first-child {width: 30px;}
            &:last-child {width: 50px;}
        }

        tr td {
            border-top: var(--border-grey-1);
            .variation.up {color: var(--color-green);}
            .variation.down {color: var(--color-red)}
        }
      
        .icon {
            border-radius: 50%;
            overflow: hidden;
            width: 28px;
            height: 28px;
        }

        img {
            max-width: 100%; height: auto;
        }
    }
</style>