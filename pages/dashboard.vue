<template>
  <v-container class="custom_grey">
    <v-row>
      <v-col cols="4"><h3>Data for week starting</h3></v-col>
      <v-spacer />
    </v-row>
    <panel-group />
    <v-row>
      <v-col cols="6">
        <app-widget title="Performance Level">
          <v-btn slot="widget-header-action" icon>
            <v-icon>mdi-refresh</v-icon>
          </v-btn>
          <bar-chart
            slot="widget-content"
            :data="barChartData"
            :options="barChartOptions"
            :height="225"
          />
        </app-widget>
      </v-col>
      <v-col cols="6">
        <app-widget title="Performance over time">
          <v-btn slot="widget-header-action" icon>
            <v-icon>mdi-refresh</v-icon>
          </v-btn>
          <doughnut-chart
            slot="widget-content"
            :data="doughnutChartData"
            :options="doughnutChartOptions"
            :height="300"
          />
        </app-widget>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import PanelGroup from '@/components/PanelGroup'
import AppWidget from '@/components/AppWidget'
// eslint-disable-next-line no-unused-vars
import ChartJSPluginDatalabels from 'chartjs-plugin-labels'
import DoughnutChart from '~/components/charts/DoughnutChart'
// eslint-disable-next-line no-unused-vars
import BarChart from '~/components/charts/BarChart'

export default {
  components: {
    DoughnutChart,
    AppWidget,
    PanelGroup,
    BarChart,
  },
  meta: {
    title: 'Dashboard',
  },
  data() {
    return {
      doughnutChartData: {
        labels: ['Pass', 'Fail'],
        datasets: [
          {
            backgroundColor: ['#01b82f', '#DD1B16'],
            data: [86, 14],
          },
        ],
      },
      doughnutChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          position: 'bottom',
        },
        plugins: {
          // Change options for ALL labels of THIS CHART
          datalabels: {
            font: {
              color: '#ffffff',
            },
            textAlign: 'center',
            position: 'outside',
          },
        },
      },
      barChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          {
            label: 'Data Set 1',
            backgroundColor: '#01b82f',
            data: [100, 65, 70, 100, 35],
          },
          {
            label: 'Data Set 1',
            backgroundColor: '#DD1B16',
            data: [35, 8, 10, 60, 15],
          },
        ],
      },
      barChartOptions: {
        responsive: true,
        legend: {
          display: false,
        },
        title: {
          display: false,
          text: 'Monthly Income',
        },
        layout: {
          padding: {
            top: 15,
          },
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    }
  },
}
</script>
