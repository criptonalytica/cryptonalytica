<template>
   <section>
    <Header />

      <main class="container">
          <n-text type="h1">Esse é um texto h1</n-text>
          <n-text type="h2">Esse é um texto h2</n-text>
          <n-text type="h3" weight="regular">Esse é um texto h3 regular</n-text>


          <n-button>Um botao pequeno</n-button>
          <n-button size="medium">Um botao grande</n-button>
          <n-button size="medium" hierarchy="secondary">Um botao secundário</n-button>
          <n-button size="medium" hierarchy="secondary" iconPosition="right" icon="arrow-right">Um botao com icone</n-button>

          <hr>
          <br><br><br><br>

        <section id="new-coins-index">
            <div class="top-box flex between middle">
                <n-text type="h4">Esse é um texto h2</n-text>
                <n-button size="small" hierarchy="secondary">What is this</n-button>
            </div>

            <section class="flex gap-spacing-xs">
                <section class="flex column gap-spacing-2-xs flex-1">
                    <section id="new-coins-launch" class="card w100">
                        New coins launch
                    </section>
                    <section id="new-coins-numbers" class="flex gap-spacing-2-xs">
                        <div v-for="x in [1,2,3,4]" class="flex card card h24 v24">
                            <div class="icon">XX</div>
                            <div class="text">
                                <h4>Today</h4>
                                <span class="number up">+3.28</span>
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

        </section>
      </main>
    </section>
</template>

<script>
import Header from '../components/Header.vue'

import nButton from '../components/designsystem/nButton.vue'

export default {
    components: {
        Header,
        nButton,
    },
    
}
</script>

<style lang="scss" scoped>    
    #index-info {
        max-width: 352px;
    }
</style>