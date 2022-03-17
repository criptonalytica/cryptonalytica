<script>
import {Line} from 'vue-chartjs'

export default {
    extends: Line,
    props: ["chartData"],
    mounted() {
        this.renderChart(this.chartData)
    },
    
}
</script>