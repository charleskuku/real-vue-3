<template>
  <div class="event-list">
    <EventCard v-for="event in events"
      :key="event.id"
      :event="event"
     />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard'
import EventService from '@/services/EventService'

export default {
  name: "EventList",
  components: {
    EventCard,
  },

  data() {

    return {
      events: null

    }
  },

  created() {
    EventService.getEvents()
          .then( ({data}) => {
            this.events = data
          })
          .catch( error => {
            console.log(error)
          })
  }
};
</script>
