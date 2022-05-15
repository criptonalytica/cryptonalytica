<template>
   <main>
    <Header />
      <div class="container" id="content">
          <n-text type="h1">Esse é um texto h1</n-text>
          <n-text type="h2">Esse é um texto h2</n-text>
          <n-text type="h3" weight="regular">Esse é um texto h3 regular</n-text>


          <n-button>Um botao pequeno</n-button>
          <n-button size="medium">Um botao grande</n-button>
          <n-button size="medium" hierarchy="secondary">Um botao secundário</n-button>
          <n-button size="medium" hierarchy="secondary" iconPosition="right" icon="arrow-right">Um botao com icone</n-button>
      </div>
    </main>
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

<style  scoped>    
</style>