<template>
    <p>Event Detail</p>
    <p>{{event.category}}</p>
</template>

<script>

    export default {

        props: {

            event: {
                required: true
            }
        }
    }

</script>