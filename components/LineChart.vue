<script>
import { Line, mixins } from 'vue-chartjs'
<<<<<<< HEAD
=======
// import annotationPlugin from 'chartjs-plugin-annotation';
>>>>>>> 0ab2795ddc9c46c14edfe355845930647cbd0107


export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: ['chartData', 'chartOptions'],
  mounted () {
    this.renderChart(this.chartData, this.chartOptions)
  }
}
</script>