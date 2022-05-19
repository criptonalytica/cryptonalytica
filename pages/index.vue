<template>
   <section>
    <Header />

      <main class="container">
        <section id="new-coins-index" class="section-content">
            <div class="section-title flex between middle">
                <n-text type="h4" weight="bold">Esse é um texto h2</n-text>
                <n-button size="small" hierarchy="secondary" icon="question-circle">What is this?</n-button>
            </div>

            <section class="flex gap-spacing-xs">
                <section class="flex column gap-spacing-2-xs flex-1">
                    <section id="new-coins-launch" class="box h32 v24 w100">
                        <div class="box-title flex middle between">
                            <n-text type="h6" weight="medium">New coins launch</n-text>
                            <div class="flex gap-spacing-m">
                                <chart-legend color="primary">New coin</chart-legend>
                                <chart-legend color="pink">BTG Change</chart-legend>
                            </div>
                        </div>

                        <img src="~/assets/img/fake-chart-coins.png" alt="fake">

                    </section>
                    <section id="new-coins-numbers" class="flex w100 gap-spacing-2-xs">
                        <div v-for="item in indexHighlights" class="flex flex-1 box box h24 v24">
                            <div class="icon">
                                <span v-if="item.value > 0">UP</span>
                                <span v-else>DOWN</span>
                            </div>
                            <div class="text">
                                <h4>{{item.title}}</h4>
                                <span class="number up">{{item.value}}</span>
                            </div>
                        </div>
                    </section>
                </section>
                <section id="index-info" class="flex column gap-spacing-2-xs">

                    <index-details :data="indexDetails"></index-details>

                    <div id="index-about" class="box h32 v24">
                        <div class="box-title">
                            <n-text type="h6">About index</n-text>
                        </div>
                        <article>
                            <p>Índice Bovespa é o mais importante indicador do desempenho médio das cotações das ações negociadas na B3 - Brasil, Bolsa, Balcão. É formado pelas ações com maior volume negociado nos últimos meses. </p>
                        </article>
                    </div>
                </section>
            </section>
            
            <section class="top-spacing-xs box h32 v24">
                    <div class="box-title flex middle between">
                        <n-text type="h6">Index coin list</n-text>
                        <n-button size="small" hierarchy="secondary" iconPosition="right" icon="arrow-right">See all</n-button>
                    </div>

                    <coin-list-cards :data="indexCoinList">

                    </coin-list-cards>
            </section>
        </section>

        <section id="list-new-coins" class="section-content">
            <div class="section-title flex between middle">
                <n-text type="h4" weight="bold">List of new coins</n-text>
                <span>Abas vão aqui</span>
            </div>

            <div class="box h32">
                <coin-table :data="tableData" maxrows="10"/>
            </div>
        </section>

        <Social-Table :data="indexCoinList" :head="tableData"/>

      </main>

      <br><br><br><br>
    </section>
</template>

<script>
import SocialTable from "../components/SocialTable.vue";
// Não precisa, o nuxt importa automatico
// import Header from '../components/Header.vue'

export default {
    data() {
        return {
            indexDetails: [
                { title: "Index value", value: "1.200" },
                { title: "1 year variation", start: "-2.00", end: "4.00" },
                { title: "Lifetime variation", start: "-2.00", end: "4.00" },
            ],
            aboutIndex: "Índice Bovespa é o mais importante indicador do desempenho médio das cotações das ações negociadas na B3 - Brasil, Bolsa, Balcão. É formado pelas ações com maior volume negociado nos últimos meses.",
            indexHighlights: [
                { title: "Today", value: "3.28" },
                { title: "7 Days", value: "-3.28" },
                { title: "Month", value: "-3.28" },
                { title: "3 Months", value: "-3.28" }
            ],
            indexCoinList: [
                {
                    ranking: "01",
                    name: "Woo network",
                    price: 118,
                    oneDay: "+2.32",
                    sevenDays: "-4.12",
                    start: "Mar, 2022",
                    market: 28,
                    volume: "16",
                    circ: "54M",
                    weight: "11%",
                    icon: "https://s2.coinmarketcap.com/static/img/coins/200x200/7501.png",
                    ticker: "WOO",
                    category: "DeFi",
                    follower: 643.123,
                    growth: 23.53,
                },
                {
                    ranking: "02",
                    name: "Anchor Crypto",
                    price: 203,
                    oneDay: "+2.32",
                    sevenDays: "-4.12",
                    start: "Feb, 2022",
                    market: 28,
                    volume: "16",
                    circ: "54M",
                    weight: "11%",
                    icon: "https://avatars.githubusercontent.com/u/67821563?s=280&v=4",
                    ticker: "ACH",
                    category: "Mobile",
                    follower: 543.238,
                    growth: 13.83,
                },
                {
                    ranking: "03",
                    name: "Woo network",
                    price: 322,
                    oneDay: "+2.32",
                    sevenDays: "-4.12",
                    start: "Mar, 2022",
                    marketcap: "28M",
                    volume: "16",
                    circ: "54M",
                    weight: "11%",
                    icon: "https://s2.coinmarketcap.com/static/img/coins/200x200/7501.png",
                    ticker: "WOO",
                    category: "Gaming",
                    follower: 123.993,
                    growth: -3.53,
                },
                {
                    ranking: "04",
                    name: "Anchor Crypto",
                    price: 203,
                    oneDay: "+2.32",
                    sevenDays: "-4.12",
                    start: "Feb, 2022",
                    marketcap: "28M",
                    volume: "16",
                    circ: "54M",
                    weight: "11%",
                    icon: "https://avatars.githubusercontent.com/u/67821563?s=280&v=4",
                    ticker: "WOO",
                    category: "Payment",
                    follower: 872.165,
                    growth: 70.53,
                },
            ],
            tableData: {
                tbody: [
                    {
                        ranking: "01",
                        coin: "Woo network",
                        price: 118,
                        oneDay: "+2.32",
                        sevenDays: "-4.12",
                        start: "Mar, 2022",
                        marketcap: "28M",
                        volume: 16,
                        circ: 54,
                        weight: 11,
                        supports: { icon: "https://s2.coinmarketcap.com/static/img/coins/200x200/7501.png", ticker: "WOO" }
                    },
                    {
                        ranking: "02",
                        coin: "Anchor Crypto",
                        price: 203,
                        oneDay: "+2.32",
                        sevenDays: "-4.12",
                        start: "Feb, 2022",
                        marketcap: "28M",
                        volume: 16,
                        circ: 54,
                        weight: 11,
                        supports: { icon: "https://avatars.githubusercontent.com/u/67821563?s=280&v=4", ticker: "WOO" }
                    },
                    {
                        ranking: "03",
                        coin: "Woo network",
                        price: 322,
                        oneDay: "+2.32",
                        sevenDays: "-4.12",
                        start: "Mar, 2022",
                        marketcap: "28M",
                        volume: 16,
                        circ: 54,
                        weight: 11,
                        supports: { icon: "https://s2.coinmarketcap.com/static/img/coins/200x200/7501.png", ticker: "WOO" }
                    },
                    {
                        ranking: "04",
                        coin: "Anchor Crypto",
                        price: 203,
                        oneDay: "+2.32",
                        sevenDays: "-4.12",
                        start: "Feb, 2022",
                        marketcap: "28M",
                        volume: 16,
                        circ: 54,
                        weight: 11,
                        supports: { icon: "https://avatars.githubusercontent.com/u/67821563?s=280&v=4", ticker: "WOO" }
                    },
                ],
                thead: {
                    ranking: "#",
                    coin: "Name",
                    price: "Price",
                    oneDay: "24h",
                    sevenDays: "7 Days",
                    start: "Start",
                    market: "Market Cap",
                    volume: "24h Volume",
                    circ: "Cic. Supply",
                    weight: "Weight",
                    followers: "Followers",
                    growth: "Growth",
                    project: "Project"
                },
            },
        };
    },
    // components: { SocialTable }
}
</script>

<style lang="scss" scoped>    
    #index-info {
        max-width: 352px;
    }

    #new-coins-launch {
        .box-title {
            margin-bottom: var(--spacing-xl);
        }
    }
</style>