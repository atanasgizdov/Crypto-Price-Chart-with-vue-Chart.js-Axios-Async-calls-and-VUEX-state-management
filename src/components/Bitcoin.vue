<template>
<div>
  <div class="container">
    <img src="https://www.thesun.co.uk/wp-content/uploads/2017/03/nintchdbpict000306226097.jpg?w=620" alt="Avatar" style="width:100%">
    <line-chart
      v-if="loaded"
      :chartdata="chartdata"
      :options="options"/>
  </div>
</div>

</template>

<script>
import LineChart from './BitcoinLineChart.vue'
//import { products } from './mockapi.js';
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  name: 'LineChartContainer',
  components: { LineChart },
  data: () => ({
    products: {},
    labels: [],
    data: [],
    loaded: false,
    chartdata: null,
    options: null,
  }),


  methods: {

  },

  async mounted () {
    this.loaded = false
    Vue.axios
      .get('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD')
      .then((response) => {
        this.products = response.data.open

        for (var key in this.products) {
          this.labels.push(key)
          this.data.push(this.products[key].toFixed(2))
        }
        this.labels.reverse()
        

        this.chartdata = {
        labels: this.labels,
        datasets: [
          {
            label: 'Bitcoin price',
            backgroundColor: '#f87979',
            data: this.data
          }
        ],
      },

      this.options = {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      },

      this.loaded = true
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>
