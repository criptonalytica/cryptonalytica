<template>
<section>
    <Header/>
        <section class="box h32 v24">
            <div class="box-title flex middle between">
                <div class="flex middle">
                    <n-text type="h6">Index coin list</n-text>
                    <n-button size="small" hierarchy="secondary" iconPosition="right" icon="grey-question-circle"></n-button>
                </div>
            </div>
            <coinListCards :data="indexCoinList" :max="this.indexCoinList.length"/>
        </section>
    <Footer/>
</section>
</template>

<script>
export default {
    data(){
        return {
            indexCoinList: [
                {
                    ranking: "01",
                    name: "Woo network",
                    price: 118.49,
                    oneDay: +2.32,
                    sevenDays: -4.12,
                    start: "Mar, 2022",
                    market: 28,
                    volume: "16",
                    circ: "54M",
                    weight: "11%",
                    icon: "https://s2.coinmarketcap.com/static/img/coins/200x200/7501.png",
                    ticker: "WOO",
                    category: "DeFi",
                },
                {
                    ranking: "02",
                    name: "Anchor Crypto",
                    price: 203.49,
                    oneDay: +2.32,
                    sevenDays: -4.12,
                    start: "Feb, 2022",
                    market: 28,
                    volume: "16",
                    circ: "54M",
                    weight: "11%",
                    icon: "https://avatars.githubusercontent.com/u/67821563?s=280&v=4",
                    ticker: "ACH",
                    category: "Mobile",
                },
                {
                    ranking: "03",
                    name: "Woo network",
                    price: 322.45,
                    oneDay: -2.32,
                    sevenDays: +4.12,
                    start: "Mar, 2022",
                    marketcap: "28M",
                    volume: "16",
                    circ: "54M",
                    weight: "11%",
                    icon: "https://s2.coinmarketcap.com/static/img/coins/200x200/7501.png",
                    ticker: "WOO",
                    category: "Gaming",
                },
                {
                    ranking: "04",
                    name: "Anchor Crypto",
                    price: 203.49,
                    oneDay: -1.32,
                    sevenDays: +2.12,
                    start: "Feb, 2022",
                    marketcap: "28M",
                    volume: "16",
                    circ: "54M",
                    weight: "11%",
                    icon: "https://avatars.githubusercontent.com/u/67821563?s=280&v=4",
                    ticker: "WOO",
                    category: "Payment",
                },
                {
                    ranking: "05",
                    name: "Solano Network",
                    price: 280.918,
                    oneDay: +2.32,
                    sevenDays: -2.92,
                    start: "Mar, 2022",
                    market: 28,
                    volume: "16",
                    circ: "54M",
                    weight: "11%",
                    icon: "https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png",
                    ticker: "SLN",
                    category: "Web3",
                },
            ],
        }
    },
}
</script>

<style>

</style>