<template>
    <transition name="fade" mode="out-in">
        <router-view class="view"></router-view>
    </transition>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: "appComponent",
        data: function () {
            return {
                fullscreenLoading: false
            }
        },
        mounted() {
            this.getAPISec();
            // this.doGetBooking();
            // this.getDBSlots();
            // this.getDBServices();
            // this.getDBDates();
        },
        computed: mapState({
            jwttoken(state) {
                return state.cmsSec['token'];
            }
        }),
        methods: {
            doRedirect() {
                return this.$router.push('/dashboard')
            },
            getAPISec() {
                this.openFullScreen();
                return this.$store.dispatch('doSecurity')
                    .then(results => {
                        if(results) {
                            this.getPosts();
                            this.getTaxonomies();
                            this.getCategories()
                        }
                    }).catch( error => {
                        console.log('app component jwt error', error)
                    })
            },
            getTaxonomies() {
                return this.$store.dispatch('getTags', { token: this.jwttoken }).then(result => {
                    console.log('all tags', result)
                }).catch(err => {
                    console.log('error getting tags', err)
                })
            },
            getCategories() {
                return this.$store.dispatch('getCategories', { token: this.jwttoken }).then(result => {
                    console.log('all categories', result)
                }).catch(err => {
                    console.log('error getting categories', err)
                })
            },
            getPosts() {
                return this.$store.dispatch('getPublications', { token: this.jwttoken }).then(
                    results => {
                        this.doRedirect()
                    }).catch(
                    error => {
                        console.log('app component posts error', error)
                    })
            },
            openFullScreen() {
                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                setTimeout(() => {
                    loading.close();
                }, 5000);
            },
            doGetBooking () {
                return this.$store.dispatch('doGet', { url: '/api/appointments'}).then( results => {
                    this.$store.commit('setDBAppointments', results);
                    console.log('component booking', results)
                }).catch( error => {
                    console.log('booking data', error);
                })
            },
            getDBSlots () {
                return this.$store.dispatch('doGet', { url: '/api/slots'}).then(
                    results => {
                        console.log('slots results', results);
                        this.$store.commit('setDBSlots', results);
                    }
                ).catch( error => {
                    console.log('slots error', error);
                })
            },
            getDBServices () {
                return this.$store.dispatch('doGet', { url: '/api/services'}).then(
                    results => {
                        console.log('Step 1 services results', results);
                        this.$store.commit('setDBServices', results);
                    }
                ).catch( error => {
                    console.log('services error', error);
                })
            },
            getDBDates () {
                return this.$store.dispatch('doGet', { url: '/api/dates'}).then(
                    results => {
                        console.log('dates results', results);
                        this.$store.commit('setDBDates', results);
                    }
                ).catch( error => {
                    console.log('dates error', error);
                })
            }
        }
    }
</script>

<style scoped>

</style>

