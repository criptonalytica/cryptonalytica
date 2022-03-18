<template>
  <div>
      <Menu/>
    <div class="container">
        <h1>Eleições 2022</h1>
        <div id="link">
            <BarChart id="bar-chart" :chartData="barData" :options="chartOptions" />
        </div>
    </div>
  </div>
</template>

<script>
import BarChart from '../components/BarChart.vue'
import Menu from '../components/Menu.vue'

export default { 
    components: {
        BarChart,
        Menu
    },
    data() {
        return {
            barData: {
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
    },
}
</script>

<style >
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

</style>