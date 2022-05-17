<template>
    <div>
        <table>
            <thead>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>24h</th>
                <th>7 Days</th>
                <th>Start</th>
                <th>Market Cap</th>
                <th>24h Volume</th>
                <th>Circ. Supply</th>
                <th>Weight</th>
            </thead>
            <tbody v-for="item in table.tbody" :key="item.ranking">
                <td>{{item.ranking}}</td>
                <td class="icon"> <img :src="item.icon"> </td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>{{item.oneDay}}%</td>
                <td>{{item.sevenDays}}%</td>
                <td>{{item.star}}</td>
                <td>{{item.market}}</td>
                <td>{{item.volume}}</td>
                <td>{{item.circ}}</td>
                <td>{{item.wight}}</td>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {

    data() {
        return {
            table: {
                tbody: [
                    {ranking: '01',icon:'https://s2.coinmarketcap.com/static/img/coins/200x200/7501.png', name: 'Woo network', price: 118.00, oneDay: +2.32, sevenDays: +4.12, star:'Feb,24', market: '281M', volume: '16M', circ: '54M', weight: '11%'},
                    {ranking: '02', icon: 'https://avatars.githubusercontent.com/u/67821563?s=280&v=4', name: 'Anchor Cripto', price: 324.00, oneDay: -4.23, sevenDays: +4.12, star:'Jan,9', market: '21M', volume: '14M', circ: '23M', weight: '81%'},
                    {ranking: '03', icon: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png', name: 'Solano Network', price: 543.00, oneDay: +2.98, sevenDays: +1.12, star:'Dec,4', market: '81M', volume: '11M', circ: '11M', weight: '41%'},
                    {ranking: '04', icon:'https://s2.coinmarketcap.com/static/img/coins/64x64/6756.png', name: 'Alaca Token', price: 232.00, oneDay: +3.6, sevenDays: +4.12, star:'Oct,18', market: '65M', volume: '36M', circ: '17M', weight: '14%'},
                    ]
            }
        }
    }

}
</script>

<style lang="scss" scoped>
    table {
        display: grid;
        box-sizing: border-box;
        text-align: center;
        background-color:#fff;
        width: 1114px;
        height: 60px;
        margin-bottom: 76px;
        th {
            // justify-content: space-between;
            // flex-direction: column;
            // align-items: flex-start;
            width: 1114px;
            height: 60px;
        }
        tbody{
            // align-items: center;
            // text-align: center;
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
        img {
            max-width: 28px;
            max-height: 28px;
        }
    }
</style>