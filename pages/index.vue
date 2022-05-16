<template>
   <section>
    <Header />

      <main class="container">
          <n-text type="h1">Esse é um texto h1</n-text>
          <n-text type="h2">Esse é um texto h2</n-text>
          <n-text type="h3">Esse é um texto h3 regular</n-text>

          <n-text>Esse é um texto h3 regular</n-text>


          <n-button>Um botao pequeno</n-button>
          <n-button size="medium">Um botao grande</n-button>
          <n-button size="medium" hierarchy="secondary">Um botao secundário</n-button>
          <n-button size="medium" hierarchy="secondary" iconPosition="right" icon="arrow-right">Um botao com icone</n-button>

          <hr>
          <br><br><br><br>


        <section id="new-coins-index">
            <div class="session-title flex between middle">
                <n-text type="h4">Esse é um texto h2</n-text>
                <n-button size="small" hierarchy="secondary" icon="question-circle">What is this?</n-button>
            </div>

            <section class="flex gap-spacing-xs">
                <section class="flex column gap-spacing-2-xs flex-1">
                    <section id="new-coins-launch" class="card w100">
                        <div class="card-title flex middle between">
                            <n-text type="h6" weight="medium">New coins launch</n-text>
                            <div>qq coisa</div>
                        </div>

                        <img src="~/assets/img/fake-chart-coins.png" alt="fake">

                    </section>
                    <section id="new-coins-numbers" class="flex gap-spacing-2-xs">
                        <div v-for="item in indexHighlights" class="flex card card h24 v24">
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
                    <div id="index-defail" class="card h32 v24 w100">
                        <n-text type="h6">Index details</n-text>
                    </div>
                    <div id="index-about" class="card h32 v24">
                        <n-text type="h6">About index</n-text>
                        <article>
                            <p>Índice Bovespa é o mais importante indicador do desempenho médio das cotações das ações negociadas na B3 - Brasil, Bolsa, Balcão. É formado pelas ações com maior volume negociado nos últimos meses. </p>
                        </article>
                    </div>
                </section>
            </section>

            <div v-for="x in tableQualquer.thead">
                {{x}}
            </div>

            <div v-for="item in tableQualquer.tbody">
                {{item.price}}
                {{item.name}}
            </div>

        </section>
      </main>
    </section>
</template>

<script>
// Não precisa, o nuxt importa automatico
// import Header from '../components/Header.vue'

export default {
    /*components: {
        Header,
    },*/

    data() {
        return {
            indexHighlights: [
                {title: 'Today', value: '3.28'},
                {title: '7 Days', value: '-3.28'},
                {title: 'Month', value: '-3.28'}
            ],

            tableQualquer: {
                thead: [
                    '#', 'Name', 'Price', '24h'
                ],
                tbody: [
                    {ranking: '01', name: 'Woo network', price: '118.00', '24h': '+2.32%'},
                    {ranking: '02', name: 'Acala Token', price: '118.00', '24h': '+2.32%'},
                ]
            }
        }
    }

    
    
}
</script>

<style lang="scss" scoped>    
    #index-info {
        max-width: 352px;
    }

    #new-coins-launch {
        .card-title {
            margin-bottom: var(--spacing-xl);
        }
    }
</style>