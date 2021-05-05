<template>
  <v-col cols="12" sm="6" md="4">
    <app-widget
      :color="bgColor"
      :title="title"
      :dark="true"
      :action-hide="true"
    >
      <v-card
        slot="widget-content"
        elevation="0"
        :color="bgColor"
        @click.stop="handleSetLineChartData(`${chart}`)"
      >
        <v-list-item>
          <v-list-item-content>
            <v-row dense align="center">
              <v-col cols="4" class="display-1 font-weight-bold"
                ><count-to
                  :start-val="start"
                  :end-val="end"
                  :duration="duration"
              /></v-col>
              <v-col cols="8" class="subtitle-1 font-weight-medium">{{
                description
              }}</v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
        <v-card-actions>
          <v-row class="pr-3" dense>
            <v-col v-for="button in buttons" :key="button.text" cols="6">
              <v-btn light color="primary--text"> {{ button.text }} </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </app-widget>
  </v-col>
</template>

<script>
import CountTo from 'vue-count-to'
import AppWidget from '@/components/AppWidget'

export default {
  name: 'PanelGroupItem',
  components: {
    AppWidget,
    CountTo,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    bgColor: {
      type: String,
      default: '#fffff',
    },
    iconColor: {
      type: String,
      required: true,
    },
    chart: {
      type: String,
      required: true,
    },
    start: {
      type: Number,
      required: true,
    },
    end: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    buttons: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
  },
  methods: {
    handleSetLineChartData(type) {
      this.$parent.$emit('handleSetLineChartData', type)
    },
  },
}
</script>
