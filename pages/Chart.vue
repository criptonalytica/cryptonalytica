<template>
  <div class="chart-div">
    <h1>Eleições 2022</h1>
      <BarChart id="bar-chart" :chartData="chartData" :options="chartOptions" />
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
    h1{
        color: coral;
        text-align: center;
    }
    #bar-chart {
        color: aqua;
        width: 40vw;
        height: 20vh;
    }
</style>