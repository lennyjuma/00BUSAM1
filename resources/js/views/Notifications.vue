<template>
    <div class="notifications">
        <dash-layout></dash-layout>
        <div class="content-view">
        </div>
    </div>
</template>

<script>
    import DashLayout from "../components/DashLayout.vue";

    export default {
        name: "Notifications",
        components: {
            'dash-layout' : DashLayout
        },
        data: function () {
            return {

            }
        },
        mounted() {
            console.log('notification component mounted')
        }
    }
</script>

<style scoped>

</style>
