<script>
import { Line, mixins } from 'vue-chartjs'
// import annotationPlugin from 'chartjs-plugin-annotation';


export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: ['chartData', 'chartOptions'],
  mounted () {
    this.renderChart(this.chartData, this.chartOptions)
  }
}
</script>