<template>
    <h1>Event Detail</h1>
    <p>{{event.category}}</p>
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