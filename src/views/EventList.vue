<template>
  <div class="event-list">
    <EventCard v-for="event in events"
      :key="event.id"
      :event="event"
     />

     <router-link
      :to="{ name: 'EventList', query: { page: page - 1 }}"
      rel="prev"
      v-if="page != 1"
     >
        Prev Page
     </router-link>

     <router-link
      :to="{ name: 'EventList', query: {page: page + 1 }}"
      rel="next"
      v-if="hasNextPage"
     >
        Next Page
     </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard'
import EventService from '@/services/EventService'
import {watchEffect} from 'vue'

export default {
  name: "EventList",

  props: ['page'],

  components: {
    EventCard,
  },

  data() {

    return {
      events: null,
      totalEvents: 0

    }
  },

  created() {

    watchEffect(() => {
      this.events = null
      EventService.getEvents(2, this.page)
          .then( ({data,headers}) => {
            this.events = data
            this.totalEvents = headers['x-total-count']
          })
          .catch( error => {
            console.log(error)
          })

    })
    
  },

  computed: {

    hasNextPage () {
      var totalPages = Math.ceil(this.totalEvents / 2)
      console.log(totalPages)
      return this.page < totalPages

    }
  }
};
</script>
