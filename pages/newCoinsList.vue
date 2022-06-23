<template>
  <section>
    <Header/>
        <section id="list-new-coins" class="section-content container">
                <div class="section-title flex between middle">
                    <n-text type="h4" weight="bold">List of new coins</n-text>
                </div>
                <div class="box h32">
                    <coin-table :data="tableData" :maxrows="3"/>   <!-- this.tableData.length -->
                </div>
            </section>
        <Footer/>
  </section>
</template>

<script>
import Header from "../components/structure/Header.vue";
import Footer from "~/components/structure/Footer.vue";
export default {
    data() {
        return {
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
                    {
                        ranking: "05",
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
                        ranking: "06",
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
                },
            },
        };
    },
    components: { Header, Footer }
}
</script>

<style>

</style>