<template>
    <header>
        <slot name="header"></slot>
    </header>

    <main>
        <slot name="content"
            :defaultContent="defaultContent"
        ></slot>
    </main>

    <aside>
        <slot name="side"></slot>
    </aside>
</template>

<script>

export default {
    
    data () {
        return {
            defaultContent: 'Vue 3 blog content'
        }
    }
}
</script>