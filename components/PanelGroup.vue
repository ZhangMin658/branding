<template>
  <v-row dense>
    <panel-group-item
      title="Total Number users"
      icon="mdi-account-multiple"
      bg-color="primary"
      icon-color="white"
      chart="newVisitis"
      :description="'Users have activated an account to date'"
      :buttons="totalUsersButton"
      :start="0"
      :end="1024"
      :duration="2600"
    />
    <panel-group-item
      title="Weekly Active users"
      icon="mdi-message-bulleted"
      bg-color="orange"
      icon-color="blue"
      chart="messages"
      :description="'For the week starting: 19th October'"
      :buttons="weeklyActiveUsersButton"
      :start="0"
      :end="8121"
      :duration="3000"
    />
    <panel-group-item
      title="Monthly users"
      icon="mdi-currency-usd"
      bg-color="teal lighten-2"
      icon-color="blue-grey"
      chart="purchases"
      :description="'For the month of: September'"
      :buttons="monthlyUsersButton"
      :start="0"
      :end="9280"
      :duration="3200"
    />
  </v-row>
</template>

<script>
import PanelGroupItem from './PanelGroupItem.vue'

export default {
  name: 'PanelGroup',
  components: {
    PanelGroupItem,
  },
  data() {
    return {
      totalUsersButton: [
        { text: 'View Users', action: '' },
        { text: 'Export to CSV', action: '' },
      ],
      weeklyActiveUsersButton: [
        { text: 'View Users', action: '' },
        { text: 'Export to CSV', action: '' },
      ],
      monthlyUsersButton: [
        { text: 'View Users', action: '' },
        { text: 'Export to CSV', action: '' },
      ],
    }
  },
}
</script>
