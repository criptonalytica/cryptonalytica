<template>
    <div>
        <Header />
        <div class="container">
        <h1>Eleições do segundo turno</h1>
        <div id="link">
            <LineChart :chartData="ChData"/>
        </div>
      </div>
    </div>
</template>

<script>
import LineChart from '../components/LineChart.vue'
import Header from '../components/Header.vue'

export default {
    components: {
        LineChart,
        Header
    },
    data() {
        return {
            ChData: {
                labels:["13h", "14h", "15h", "16h", "17h"],
                datasets: [
                    {
                    label :"Quantidade de votos por hora",
                    data: [8, 11, 37, 63, 50, 36],
                    backgroundColor: "blue",
                    borderColor: "blue",
                    borderWidth: 3,
                    fill: false,
                    },
                ]
            }
        }
    }
}

</script>

<style scoped>

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
    
</style>