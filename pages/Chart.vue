<template>
  <div class="chart-div container">
        <h1>Eleições 2022</h1>
    <div id="link">
        <BarChart id="bar-chart" :chartData="chartData" :options="chartOptions" />
        <p><NuxtLink to="segundoturno"> Clique aqui</NuxtLink> para conferir as eleições no segundo turno</p>
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
                        borderColor: "black",
                        backgroundColor:"black",
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
    p{
        margin-top: 250px;
    }
    
</style>