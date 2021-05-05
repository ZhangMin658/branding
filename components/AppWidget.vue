<template>
  <v-card :color="color" :dark="dark" elevation="0">
    <v-app-bar v-if="!headerHide" flat color="transparent">
      <v-toolbar-title class="display-1 font-weight-light">
        {{ title }}
      </v-toolbar-title>
      <v-spacer />
      <slot v-if="!actionHide" name="widget-header-action">
        <v-btn icon>
          <v-icon>{{ icon }}</v-icon>
        </v-btn>
      </slot>
    </v-app-bar>
    <v-divider v-if="!headerHide" class="mx-4" />

    <v-card-text v-if="!paddingHide">
      <slot name="widget-content" />
    </v-card-text>
    <slot v-else name="widget-content" />
  </v-card>
</template>

<script>
export default {
  name: 'AppWidget',
  props: {
    title: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: 'mdi-dots-vertical',
    },
    color: {
      type: String,
      default: '#fffff',
    },
    headerHide: Boolean,
    paddingHide: Boolean,
    actionHide: Boolean,
    dark: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({}),
}
</script>
