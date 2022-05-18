<template>
   <div>
       <Header />
      <div class="container" id="content">
          <h1>Tabela de valores</h1>
          <coinTable :client="tableData" />
      </div>
    </div>
</template>

<script>
import coinTable from '../components/coinTable.vue'
import Header from '../components/Header.vue'

export default {
    components: {
        coinTable,
        Header
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