<template>
  <ValidationProvider v-slot="{ errors }" :name="$attrs.label" :rules="rules">
    <v-text-field
      v-model="innerValue"
      :error-messages="errors"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationProvider,
  },
  props: {
    rules: {
      type: [Object, String],
      default: '',
    },
    // must be included in props
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
    if (this.value !== null) {
      this.innerValue = this.value
    }
  },
}
</script>
