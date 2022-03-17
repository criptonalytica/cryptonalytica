<template>
   <div>
         <header>
          <nav>
              <div class="menu-item"><NuxtLink to="#">Home</NuxtLink></div>
              <div class="menu-item"><NuxtLink to="chart">Primeiro Turno</NuxtLink></div>
              <div class="menu-item"><NuxtLink to="segundoturno">Segundo Turno</NuxtLink></div>
              <div class="menu-item"><NuxtLink to="coinTable">Coin Table</NuxtLink></div>
          </nav>
      </header>
      <div class="container" id="content">
          <h1>Tabela de valores</h1>
          <CoinTable :client="tableData" />
      </div>
    </div>
</template>

<script>
import CoinTable from '../components/CoinTable.vue'

export default {
    components: {
        CoinTable
    },
    
}
</script>

<style>
 * {margin: 0; padding: 0;
      box-sizing: border-box;
    }
    body {font-family: 'Open Sans', sans-serif;}
    .container {
    max-width: 1200px;
    margin: auto;
    }

    h1{
        margin-bottom: 30px;
    }
    #content {
        
    }
    
</style>