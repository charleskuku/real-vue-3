<template>
    <h1>Slots</h1>
    <div>
        <BlogLayout>

            <template v-slot:[slotHeader]>
                <p>Blog Events</p>
            </template>

            <template #content="{defaultContent}">
                <p>Contents goes here</p>
                <p>default {{defaultContent}}</p>
            </template>

            <template v-slot:side>
                <p>side contents goes here</p>
            </template>

        </BlogLayout>

        <button v-on="buttonEvents">click</button>
    </div>
</template>

<script>
import BlogLayout from '@/components/slots/BlogLayout'

export default {
    
    components :{
        BlogLayout
    },

    data () {
        return {
            slotHeader: 'header'
        }
    },

    computed: {
        buttonEvents () {

            return {
                click: this.clickButton
            }
        }
    },

    methods: {
        clickButton () {
            alert('nice click')

        }
    }
}
</script>
