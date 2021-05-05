<template>
  <v-dialog v-model="dialog" width="500">
    <template #activator="{ on: dialogOn, attrs: dialogAttrs }">
      <v-tooltip bottom>
        <template #activator="{ on: tooltip, attrs: tooltipAttrs }">
          <v-btn
            :class="btnSize"
            color="lighten-2"
            :disabled="disabled"
            :data-testid="buttonId"
            v-bind="{ ...dialogAttrs, ...tooltipAttrs }"
            v-on="{ ...dialogOn, ...tooltip }"
          >
            <v-icon small> {{ icon }}</v-icon>
            {{ text }}
          </v-btn>
        </template>
        {{ toolTipText }}
      </v-tooltip>
    </template>
    <span class="text-center">
      <v-card>
        <v-card-title class="headline lighten-2"> Confirm Dialog </v-card-title>
        <v-card-text>
          {{ message }}
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="error"
            text
            data-testid="cancel-button"
            @click="onCancelClick"
          >
            Cancel</v-btn
          >
          <v-btn
            color="primary"
            text
            data-testid="ok-button"
            @click="onOKClick"
          >
            OK</v-btn
          >
        </v-card-actions>
      </v-card>
    </span>
  </v-dialog>
</template>
<script>
export default {
  name: 'VConfirmButton',
  props: {
    message: {
      type: String,
      required: true,
    },
    action: {
      type: Function,
      required: true,
    },
    toolTipText: {
      type: String,
      required: true,
      default: 'Delete',
    },
    icon: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      required: false,
    },
    size: {
      type: String,
      required: false,
      default: 'small',
    },
    buttonId: {
      type: String,
      default: 'button',
    },
  },
  data() {
    return {
      dialog: false,
    }
  },
  computed: {
    btnSize() {
      return `v-size--${this.size}`
    },
  },
  methods: {
    onCancelClick() {
      this.dialog = false
    },
    async onOKClick() {
      await this.action()
      this.dialog = false
    },
  },
}
</script>
