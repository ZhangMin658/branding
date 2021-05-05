export default {
  methods: {
    toLocalDate(date, timeZoneString) {
      return new Date(date + ' UTC').toLocaleString('en-GB', {
        timeZone: timeZoneString,
      })
    },
  },
}
