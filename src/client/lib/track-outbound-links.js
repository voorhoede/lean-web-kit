export default function (destination) {
  // https://developers.google.com/analytics/devguides/collection/analyticsjs/events#outbound_link_and_form_tracking
  this.$ga.event({
    eventCategory: 'Outbound Link',
    eventAction: 'click',
    eventLabel: destination,
    transport: 'beacon',
  })
}