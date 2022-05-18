<template>
    <div>
        <table>
            <thead>
                <tr > <!--   se preferir pode fazer um v-for do título da tabela, só que a formatação ficou mais feia. não entendi o pq...       id="head" v-for="item in header" :key="item"--> 
                    <!--  só tirar o comentário também desse campo e vai funfar <th @click="sort(item.title)">{{item.title}}</th> -->
                    <th @click="sort('ranking')">#</th>
                    <th @click="sort('name')" icon="arrow-down">Name</th> <!-- arrow-down quando tu adicionar o icon nos teus css maluco-->
                    <th @click="sort('price')">Price</th>
                    <th @click="sort('oneDay')">24h</th>
                    <th @click="sort('sevenDays')">7 Days</th>
                    <th @click="sort('start')">Start</th>
                    <th @click="sort('market')">Market Cap</th>
                    <th @click="sort('volume')">24h Volume</th>
                    <th @click="sort('circ')">Circ. Supply</th>
                    <th @click="sort('weight')">Weight</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in sortedData" :key="item.ranking">
                    <td style="color:var(--color-gray-4)">{{item.ranking}}</td>
                    <td icon="arrow-right" class="name"> <img :src="item.icon"> {{item.name}} <span>{{item.ticker}}</span></td>
                    <td>{{item.price}}</td>
                    <td v-if="item.oneDay>0" style="color:var(--color-green)">{{item.oneDay}}%</td>
                    <td v-else style="color:var(--color-red)"> {{item.oneDay}} </td>
                    <td v-if="item.sevenDays>0" style="color:var(--color-green)">{{item.sevenDays}}%</td>
                    <td v-else style="color:var(--color-red)"> {{item.sevenDays}} </td>
                    <td>{{item.start}}</td>
                    <td>{{item.market}}M</td>
                    <td>{{item.volume}}M</td>
                    <td>{{item.circ}}M</td>
                    <td>{{item.weight}}%</td>
                </tr>
            </tbody>
        </table>
        <!-- debug: sort={{currentSort}}, dir={{currentSortDir}} --- era só pra ver se tava mudando, deixa salvo aí vai que seja importante algum dia, ou não  -->
    </div>
</template>

<script>
export default {

    data() {
        return {
                tbody: [
                    {ranking: '01', icon:'https://s2.coinmarketcap.com/static/img/coins/200x200/7501.png', name: 'Woo network', ticker:'WOO',price: 118.00, oneDay: +2.32, sevenDays: -4.12, start:'Feb,24', market: 28, volume: 16, circ: 54, weight: 11},
                    {ranking: '02', icon: 'https://avatars.githubusercontent.com/u/67821563?s=280&v=4', name: 'Anchor Cripto', ticker:'ACH',price: 324.07, oneDay: -4.23, sevenDays: +4.12, start:'Jan,9', market: 21, volume: 14, circ: 23, weight: 81},
                    {ranking: '03', icon: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png', name: 'Solano Network', ticker:'SLN', price: 543.10, oneDay: +2.98, sevenDays: -1.12, start:'Dec,4', market: 81, volume: 11, circ: 11, weight: 41},
                    {ranking: '04', icon:'https://s2.coinmarketcap.com/static/img/coins/64x64/6756.png', name: 'Alaca Token', ticker:'ALC', price: 232.98, oneDay: +3.6, sevenDays: +4.12, start:'Oct,18', market: 65, volume: 36, circ: 17, weight: 14},
                    ],
                // abaixo é pra se for usar o v-for dos títulos, se não quiser só apagar
                header: [
                    {title: '#'},{title:'name'},{title:'Price'},{title:'oneDay'},{title:'sevenDays'},{title:'start'},{title:'market'},{title:'volume'},{title:'circ'},{title:'weight'}
                ],
                currentSort:'name',
                currentSortDir:'asc'

        }
    },

    // daqui pra baixo não mexe que é mágica tmj :)
    methods:{
        sort:function(s) {
            //if s == current sort, reverse
            if(s === this.currentSort) {
            this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
            }
            this.currentSort = s;
        }
    },
    computed: {
        sortedData:function() {
            return this.tbody.sort((a,b) => {
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
        width: 100%;
        
        td.name>*{
            display:inline-block
        }
        tr {
            text-align:center;
        }
        th {
            // justify-content: space-between;
            // flex-direction: column;
            // align-items: flex-start;
            font-weight: var(--text-weight-regular);
            font-size: var(--text-s12-font-size);
            line-height: var(--text-s-line-height);
            color: var(--color-grey-4);
            width: 1114px;
            height: 60px;
        }
        td {
            width: 1114px;
            height: 60px;
            background-color:#fff;

            // text-align: center;
            // flex-direction: row;
            // justify-content: space-between;
            // padding: 16px 0px;
        }
        .class {
            display: flex;
            flex-direction: column;
        }
        img {
            max-width: 28px;
            max-height: 28px;
        }
    }
</style>