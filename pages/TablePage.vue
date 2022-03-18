<template>
   <div>
       <Menu />
      <div class="container" id="content">
          <h1>Tabela de valores</h1>
          <CoinTable :client="tableData" />
      </div>
    </div>
</template>

<script>
import CoinTable from '../components/CoinTable.vue'
import Menu from '../components/Menu.vue'

export default {
    components: {
        CoinTable,
        Menu
    },
    
}
</script>

<style  scoped>
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
        color: coral;
        text-align: center;
    }
    #content {
        
    }
    
</style>