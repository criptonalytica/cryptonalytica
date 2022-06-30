<script>
import { Line, mixins } from 'vue-chartjs'


export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: ['chartData', 'chartOptions'],
  data() {
    return {
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.chartOptions)
    this.$emit('sendLegend', this.generateLegend())
  },
  watch: {
    chartData: function() {
        console.log('mudou??')
        this.renderChart(this.chartData, this.options);
    },
    redraw: function() {
        console.log('mudou??')
    },
  }
}
</script>