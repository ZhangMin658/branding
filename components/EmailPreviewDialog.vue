<template>
  <v-dialog v-model="dialog" hide-overlay transition="dialog-bottom-transition">
    <template #activator="{ on, attrs }">
      <v-btn color="green" large dark v-bind="attrs" class="mr-2" v-on="on">
        Preview
      </v-btn>
    </template>
    <v-card>
      <v-toolbar>
        <v-btn icon @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Email Preview</v-toolbar-title>
        <v-spacer />
      </v-toolbar>
      <v-card-text>
        <div class="ma-4" v-html="emailItem.html" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'EmailPreviewDialog',
  props: {
    emailItem: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    }
  },
}
</script>
