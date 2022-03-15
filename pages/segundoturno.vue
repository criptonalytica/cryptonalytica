<template>
    <div class="container">
        <h1>Eleições do segundo turno</h1>
        <div id="link">
            <LineChart id="bar-chart" :chartData="chartData" :options="chartOptions" />
            <p><NuxtLink to="chart"> Clique aqui</NuxtLink> para conferir os votos no primeiro turno </p>
        </div>
    </div>
</template>

<script>
import LineChart from '../components/LineChart.vue' //não sei pq mas ta ficando vermelho como se fosse erro, mas ta funcionando

export default 
    { 
    data() {
        return {
            chartData: {
                labels:["13h", "14h", "15h", "16h", "17h"],
                datasets: [
                    {
                        label :"Quantidade de votos por hora",
                        backgroundColor: "blue",
                        borderColor: "blue",
                        borderWidth: 3,
                        fill: false,
                        data: [8, 11, 37, 63, 50, 36]

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