<template>
  <div>
      <header>
          <nav>
              <div class="menu-item"><NuxtLink to="#">Home</NuxtLink></div>
              <div class="menu-item"><NuxtLink to="chart">Primeiro Turno</NuxtLink></div>
              <div class="menu-item"><NuxtLink to="segundoturno">Segundo Turno</NuxtLink></div>
          </nav>
      </header>
    <div class="container">
        <h1>Eleições 2022</h1>
        <div id="link">
            <BarChart id="bar-chart" :chartData="chartData" :options="chartOptions" />
        </div>
    </div>
  </div>
</template>

<script>
import { Tooltip } from 'chart.js'
import BarChart from '../components/BarChart.vue'
export default { 
    data() {
        return {
            chartData: {
                labels:["Lula", "Ciro Gomes", "Bolsonaro", "Thomas"],
                datasets: [
                    {
                        label :"Quantidade de votos",
                        borderColor: "#222",
                        backgroundColor:"#222",
                        borderWidth: 3,
                        // fill: false,
                        data: [49,20, 3, 28 ]

                    },
                ]
            },
            chartOptions: {
                responsive: true
            }
        }
    }
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
    
    header {
        width: 100vw;
        background-color: #222;
        padding: 20px;
        margin-bottom: 20px;
    }
     h1{
        color: coral;
        text-align: center;
        margin-top: 30;

    }
    #bar-chart {
        color: aqua;
        width: 40vw;
        height: 20vh;
    }
    #link{
        display: flex;
        justify-content: space-between;    
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
</style>