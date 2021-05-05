<template>
  <ValidationProvider v-slot="{ errors }" :name="$attrs.label" :rules="rules">
    <v-select
      v-model="innerValue"
      :error-messages="errors"
      :data-testid="$attrs.label"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'VSelectWithValidation',
  components: {
    ValidationProvider,
  },
  props: {
    rules: {
      type: [Object, String],
      default: '',
    },
    // eslint-disable-next-line vue/require-default-prop
    value: {
      type: null,
    },
  },
  data: () => ({
    innerValue: '',
  }),
  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      this.$emit('input', newVal)
    },
    // Handles external model changes.
    value(newVal) {
      this.innerValue = newVal
    },
  },
  created() {
    if (this.value) {
      this.innerValue = this.value
    }
  },
}
</script>
