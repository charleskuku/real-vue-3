<template>
    <p>{{event.title}}</p>
    <router-link :to="{name: 'EventDetail'}">
      Details
    </router-link>
    
    <router-link :to="{name: 'EventRegister'}">
      Register
    </router-link>

    <router-link :to="{name: 'EventEdit'}">
      Edit
    </router-link>

    <router-view :event="event"/>
</template>

<script>

    import EventService from '@/services/EventService'

    export default {

        props: {

            id: {
                required: true
            }
        },

        data () {
            return {
                event: Object
            }
        },

        created () {
            EventService.getEvent(this.id)
                .then( ({data}) => {
                    
                    this.event = data

                })
                .catch( error => {
                    console.log(error)
                })
        }

        
    }

</script>