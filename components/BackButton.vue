<template>
  <v-btn text :ripple="false" @click="to">
    <v-icon small>mdi-arrow-left</v-icon>
    <span class="grey--text">Back</span>
  </v-btn>
</template>
<script>
export default {
  name: 'BackButton',
  props: {},
  methods: {
    to() {
      this.$router.go(-1)
    },
  },
}
</script>
