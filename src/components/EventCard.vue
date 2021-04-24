<template>
  <div class="event-card">
    
    <router-link :to="{name: 'EventDetail', params: {id:event.id}}">
      <span>@ {{event.time}} on {{event.date}}</span>
      <h4>{{event.title}}</h4>
    </router-link>
  </div>
</template>

<script>

  export default {
    
    name: "EventCard",

    props: {

      event: {
        required: true,
        type: Object
      }
    }
    // props: {
    //   msg: String,
    // },
  };
</script>

<style scoped>

</style>

