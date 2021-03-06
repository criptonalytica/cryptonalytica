<template>
   <section>
    <Header />

      <main class="container">
        <section id="new-coins-index" class="section-content">
            <div class="section-title flex between middle">
                <n-text type="h4" weight="bold">New coins index</n-text>
                <n-button size="small" hierarchy="secondary" icon="question-circle">What is this?</n-button>
            </div>

            <section class="index-content flex gap-spacing-xs stretch">
                <section class="flex column gap-spacing-2-xs flex-1">
                    <section id="new-coins-launch" class="box h32 v24 w100 flex-1">
                        <coinsLaunchChart :data="newCoinLaunchData"/>
                    </section>
                    
                    <number-highlight id="new-coins-numbers" :data="indexHighlights"></number-highlight>
                </section>

                <section id="index-info" class="flex column gap-spacing-2-xs">

                    <index-details :data="indexDetails"></index-details>

                    <div id="index-about" class="box h32 v24 flex column flex-1 between">
                        <div class="content">
                            <div class="box-title">
                                <n-text type="h6">About index</n-text>
                            </div>
                            <article>
                                <p>Índice Bovespa é o mais importante indicador do desempenho médio das cotações das ações negociadas na B3 - Brasil, Bolsa, Balcão. É formado pelas ações com maior volume negociado nos últimos meses.</p>
                            </article>
                        </div>
                        <div class="button flex w100 center middle">
                            <n-button size="small" hierarchy="secondary" iconPosition="right" icon="arrow-right">Learn more</n-button>
                        </div>
                    </div>
                </section>
            </section>
            
            <section id="index-coin-list" class="top-spacing-xs box h32 v24">
                    <div class="box-title flex middle between">
                        <div class="flex middle">
                            <n-text type="h6">Index coin list</n-text>
                            <n-button size="small" hierarchy="secondary" iconPosition="right" icon="grey-question-circle"></n-button>
                        </div>
                        <n-button size="small" hierarchy="secondary" iconPosition="right" icon="arrow-right"> <NuxtLink to="indexCoinList">See all</NuxtLink> </n-button>
                    </div>

                    <coin-list-cards :data="indexCoinList" :max="4"/>
            </section>
        </section>

        <section id="list-new-coins" class="section-content">
            <div class="section-title flex between middle">
                <n-text type="h4" weight="bold">List of new coins</n-text>
                <n-button size="small" hierarchy="secondary" iconPosition="right" icon="arrow-right"> <NuxtLink to="/newCoinsList">See all</NuxtLink> </n-button>
            </div>

            <div class="box h32">
                <coin-table :data="tableData" :max="10" />
            </div>
        </section>

        <section id="performance-by-category" class="section-content">
            <div class="section-title flex between middle">
                <div class="text flex middle">
                    <n-text type="h4" weight="bold">Performance by categories</n-text>
                    <n-button size="small" hierarchy="secondary" iconPosition="right" icon="grey-question-circle"></n-button>
                </div>
                <n-button size="small" hierarchy="secondary" iconPosition="right" icon="arrow-right"> <NuxtLink to="/categoriesPerformance">See all</NuxtLink> </n-button>
            </div>
            <category-box class="top-spacing-m" :indexCoinList="indexCoinList" :max="5" :cols="5"/>
        </section>

        <section>
            <categoryCompare/>
        </section>

        <section id="vcs-portfolio" class="section-content top-spacing-4-xl">
            <div class="section-title flex between middle">
                <n-text type="h4" weight="bold">VCs Portfolio composition</n-text>
                <n-button size="small" hierarchy="secondary" iconPosition="right" icon="arrow-right"> <NuxtLink to="/portfolio">See all</NuxtLink> </n-button>
            </div>
            <portfolio-composition/>
        </section>

        <section id="social-numbers" class="section-content">
            <div class="section-title flex between middle">
                <n-text type="h4" weight="bold">Social numbers</n-text>
            </div>

            <section class="flex wrap gap-spacing-xs">
                <div class="box v24 h32 flex-1">
                    <div class="box-title flex middle ">
                        <img class="icon" src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="Twitter Icon">
                        <n-text type="h6">Twitter followers</n-text>
                    </div>
                    <coin-table :data="socialTwitter" :max="10"/>
                </div>
                <div class="box v24 h32 flex-1">
                    <div class="box-title flex middle ">
                        <img class="icon" src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png" alt="Github Icon">
                        <n-text type="h6">Github commits</n-text>
                    </div>
                    <coin-table :data="socialGithub" :max="10"/>
                </div>
                
            </section>
        </section>
      </main>
    <Footer />
    </section>
</template>

<script>
export default {
    data() {
        return {

            newCoinLaunchData: [
                {
                    label: 'New coin',
                    backgroundColor: '#4d4dff',
                    borderColor: "#4d4dff",
                    borderWidth: 3,
                    fill: false,
                    data: [64, 30, 13, 30, 40, 20, 30, 20, 29, 54, 50],
                },
                {
                    label: "BTC Change",
                    backgroundColor: '#f473b9',
                    borderColor: '#f473b9',
                    borderWidth: 3,
                    fill: false,
                    data: [40, 45, 65, 54, 32, 20, 50, 43, 72, 31, 86],
                }
            ],
        
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
                    price: 118.49,
                    oneDay: 2.32,
                    sevenDays: -4.12,
                    start: "Mar, 2022",
                    marketcap: "28M",
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
                    oneDay: 2.32,
                    sevenDays: -4.12,
                    start: "Feb, 2022",
                    marketcap: "28M",
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
                    oneDay: 2.32,
                    sevenDays: -2.92,
                    start: "Mar, 2022",
                    marketcap: "28M",
                    volume: "16",
                    circ: "54M",
                    weight: "11%",
                    icon: "https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png",
                    ticker: "SLN",
                    category: "Web3",
                },
            ],

            // Exemplo de Json que gera a tabela
            // List of new coins
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


            socialTwitter: {
                tbody: [
                    {
                        ranking: "01", coin: "Woo network", followers: '393.490', growth: '+23.98%',
                        supports: { icon: "https://s2.coinmarketcap.com/static/img/coins/200x200/7501.png", ticker: "WOO" }
                    },
                    {
                        ranking: "02", coin: "Anchor Crypto", followers: '393.490', growth: '+23.98%',
                        supports: { icon: "https://avatars.githubusercontent.com/u/67821563?s=280&v=4", ticker: "WOO" }
                    },
                    {
                        ranking: "03", coin: "Woo network", followers: '393.490', growth: '+23.98%',
                        supports: { icon: "https://s2.coinmarketcap.com/static/img/coins/200x200/7501.png", ticker: "WOO" }
                    },
                    {
                        ranking: "04", coin: "Anchor Crypto", followers: '393.490', growth: '+23.98%',
                        supports: { icon: "https://avatars.githubusercontent.com/u/67821563?s=280&v=4", ticker: "WOO" }
                    },
                ],
                thead: {
                    ranking: "#",
                    coin: "Project",
                    followers: "Followers",
                    growth: "Growth",
                },
            },

            socialGithub: {
                tbody: [
                    {
                        ranking: "01", coin: "Woo network", followers: '393.490', growth: '+23.98%',
                        supports: { icon: "https://s2.coinmarketcap.com/static/img/coins/200x200/7501.png", ticker: "WOO" }
                    },
                    {
                        ranking: "02", coin: "Anchor Crypto", followers: '393.490', growth: '+23.98%',
                        supports: { icon: "https://avatars.githubusercontent.com/u/67821563?s=280&v=4", ticker: "WOO" }
                    },
                    {
                        ranking: "03", coin: "Woo network", followers: '393.490', growth: '+23.98%',
                        supports: { icon: "https://s2.coinmarketcap.com/static/img/coins/200x200/7501.png", ticker: "WOO" }
                    },
                    {
                        ranking: "04", coin: "Anchor Crypto", followers: '393.490', growth: '+23.98%',
                        supports: { icon: "https://avatars.githubusercontent.com/u/67821563?s=280&v=4", ticker: "WOO" }
                    },
                ],
                thead: {
                    ranking: "#",
                    coin: "Project",
                    followers: "Commits",
                    growth: "Growth",
                },
            },

        };
    },
}
</script>