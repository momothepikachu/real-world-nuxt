<template>
  <div>
    <h1>Events</h1>
    <EventCard
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      :data-index="index"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EventCard from '@/components/EventCard.vue'

export default {
  head() {
    return {
      title: 'Event Listing'
    }
  },
  components: {
    EventCard
  },
  computed: mapState({
    // By default, Nuxt has all of our Modules Namespaced
    // eslint-disable-next-line prettier/prettier
    events: state => state.events.events
  }),
  async fetch({ store, error }) {
    try {
      await store.dispatch('events/fetchEvents')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time. Please try again.'
      })
    }

    // return $axios
    //   .get('http://localhost:3002/events')
    //   .then((response) => {
    //     return {
    //       events: response.data
    //     }
    //   })
    //   .catch((e) => {
    //     error({
    //       statusCode: 503,
    //       message: 'Unable to fetch events at this time. Please try again.'
    //     })
    //   })
  }
}
</script>
