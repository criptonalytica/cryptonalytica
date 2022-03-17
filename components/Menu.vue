<template>
        <header>
          <nav>
              <div class="menu-item"><NuxtLink to="#">Home</NuxtLink></div>
              <div class="menu-item"><NuxtLink to="chart">Primeiro Turno</NuxtLink></div>
              <div class="menu-item"><NuxtLink to="segundoturno">Segundo Turno</NuxtLink></div>
              <div class="menu-item"><NuxtLink to="coinTable">Coin Table</NuxtLink></div>
          </nav>
      </header>
</template>

<script>
export default {

}
</script>

<style scoped>
    * {margin: 0; padding: 0;
      box-sizing: border-box;
    }
    
    body {font-family: 'Open Sans', sans-serif;}
    
    header {
        width: 100vw;
        background-color: #222;
        padding: 20px;
        margin-bottom: 20px;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    nav .menu-item.active, nav .menu-item:hover {
        background-color: #444;
        border-bottom-color: coral;
    }

    nav .menu-item {
        color: #fff;
        padding: 10px 20px;
        position: relative;
        text-align: center;
        border-bottom: 3px solid transparent;
        display: flex;
        transition: 0.4s;
    }
    nav .menu-item:nth-child(2) {
        margin-left: 3px;
        margin-right: 3px;
    }

    nav .menu-item a {
        color: inherit;
        text-decoration: none;
    }
    
</style>>
