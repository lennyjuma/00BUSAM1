<template>
    <div class="dashboard">
        <dash-layout></dash-layout>
        <div class="content-view container-fluid">
            <div class="d-sm-flex justify-content-between align-items-center mb-4">
                <h4 class="text-dark mb-0">Dashboard</h4>
            </div>
            <div class="row">
                <div class="col-md-6 col-xl-3 mb-4">
                    <el-card class="main-card" shadow="hover">
                        Jobs
                        <span>{{totaljobs}}</span>
                    </el-card>
                </div>
                <div class="col-md-6 col-xl-3 mb-4">
                    <el-card class="main-card" shadow="hover">
                        Services
                        <span>{{totalServices}}</span>
                    </el-card>
                </div>
                <div class="col-md-6 col-xl-3 mb-4">
                    <el-card class="main-card" shadow="hover">
                        Publications
                        <span>{{totalPublications}}</span>
                    </el-card>
                </div>
                <div class="col-md-6 col-xl-3 mb-4">
                    <el-card class="main-card" shadow="hover">
                        Team
                        <span>{{totalMembers}}</span>
                    </el-card>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 mb-4">
                    <div class="card shadow mb-4"></div>
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="text-primary font-weight-bold m-0">Appointments</h6>
                        </div>
                        <ul class="appointmentData list-group list-group-flush">
                            <li v-for="appointment in appointmentdata" class="list-group-item">
                                <div class="row align-items-center">
                                    <div class="col mr-2">
                                        <h6 class="mb-0"><strong>From:</strong> {{ new Date(appointment.slotData.from).toDateString() }}  <br> <strong>To:</strong> {{ new Date(appointment.slotData.to).toDateString() }} </h6>
                                        <strong>Full Name: </strong>
                                        <span class="text-xs">{{ appointment.first_name.toUpperCase() }}</span>
                                        <span class="text-xs">{{ appointment.last_name.toUpperCase() }}</span>
                                        <br>
                                        <span class="text-xs"><strong>Cellphone: </strong>{{ appointment.phone_number }}</span>
                                        <br>
                                        <strong>Service: </strong> <span class="text-xs">{{ appointment.serviceName.toUpperCase() }}</span>
                                    </div>
                                    <div class="col-auto">
                                        <el-button size="small" icon="el-icon-top-right" circle @click="handleView(appointment)"></el-button>
                                        <el-button size="small" icon="el-icon-delete" circle @click="handleDelete2(appointment.id)"></el-button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6 mb-4">
                    <div class="card shadow mb-4"></div>
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="text-primary font-weight-bold m-0">Defined Dates &nbsp | &nbsp <el-button v-if="dateMode === true" @click="handleAdd" size="small" type="primary" icon="el-icon-plus" circle></el-button>
                            </h6>
                        </div>
                        <ul v-if="dateMode === true" class="appointmentData list-group list-group-flush">
                            <li v-for="date in dates" class="list-group-item">
                                <div class="row align-items-center no-gutters">
                                    <div class="col mr-2">
                                        <h6 class="mb-0"><strong>{{ date.caption }}</strong></h6><span class="text-xs">{{ new Date(date.day).toDateString()}}</span>
                                    </div>
                                    <div class="col-auto">
                                        <el-button size="small" icon="el-icon-delete" circle @click="handleDelete(date.id)"></el-button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col"></div>
            </div>
        </div>
        <el-drawer
            title="Appointment Details"
            size="50%"
            :visible.sync="drawer"
            :destroy-on-close="true"
            :direction="direction"
            :before-close="handleClose">
            <appointment-component :appointmentId="appointmentId"></appointment-component>
        </el-drawer>
        <el-drawer
            title="Add Appointment Dates"
            size="70%"
            :destroy-on-close="true"
            :visible.sync="drawer2"
            :direction="direction"
            :before-close="handleClose">
            <date-component></date-component>
        </el-drawer>
    </div>
</template>
<script>
    import DashLayout from "../components/DashLayout.vue";
    import Dates from "../components/date.vue";
    import Appointment from "../components/appointment.vue";
    import { mapState } from 'vuex';
    export default {
        name: 'Dashboard',
        components: {
            'dash-layout' : DashLayout,
            'date-component': Dates,
            'appointment-component': Appointment
        },
        beforeMount() {
            this.setPublicationsData();
        },
        mounted() {
            this.setServiceNames()
        },
        data: function () {
            return {
                drawer: false,
                drawer2: false,
                direction: 'rtl',
                totalMembers: null,
                totalServices: null,
                totalPublications: null,
                totaljobs: null,
                appointmentdata: null,
                servicedata: null,
                datesdata: null,
                slotdata: null,
                dateMode: true,
                appointmentId: null
            }
        },
        methods: {
            handleClose (done) {
                this.getDBDates();
                done();
            },
            handleView(id) {
                this.drawer = true;
                this.appointmentId = id;
            },
            setPublicationsData () {
                this.totaljobs = this.jobs;
                this.totalPublications = this.publications;
                this.totalServices = this.services;
                this.totalMembers = this.members;
            },
            handleAdd () {
                this.drawer2 = true;
            },
            handleDelete(id) {
                this.$store.dispatch('doDelete', { url: `/api/dates/${id}`}).then( results => {
                    console.log('deleted', results);
                    if(results === 204) {
                        console.log('removing date');
                        this.getDBDates()
                    }
                }).catch(error => {
                    console.log(error)
                })
            },
            handleDelete2(id) {
                this.$store.dispatch('doDelete', { url: `/api/appointments/${id}`}).then( results => {
                    console.log('deleted', results);
                    if(results === 204) {
                        console.log('removing appointment');
                        this.doGetBooking()
                    }
                }).catch(error => {
                    console.log(error)
                })
            },
            doGetBooking () {
                return this.$store.dispatch('doGet', { url: '/api/appointments'}).then( results => {
                    this.$store.commit('setDBAppointments', results);
                    console.log('component booking', results);
                    this.setServiceNames()
                }).catch( error => {
                    console.log('booking data', error);
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
            },
            mineServiceNames(appointment) {
                let name;
                if (appointment !== undefined) {
                    this.servicesDB.filter( service => {
                        if(appointment.service_id === service.id) {
                            name = service.service_type
                        }
                    });
                }

                return name
            },
            mineSlots(appointment) {
                let slotdata;
                if (appointment !== undefined) {
                    this.slots.filter( slot => {
                        if(appointment.slot_id === slot.id) {
                            slotdata = slot
                        }
                    });
                }

                return slotdata
            },
            mineServices() {
                let newAppointments = [];
                this.appointments.filter(appointment => {
                    let modded = {
                        ...appointment,
                        serviceName: this.mineServiceNames(appointment),
                        slotData: this.mineSlots(appointment)
                    };
                    newAppointments.push(modded)
                });
                console.log(newAppointments);
                return newAppointments
            },
            setServiceNames() {
                this.appointmentdata = this.mineServices()
            }
        },
        computed: mapState({
            jobs(state) {
                let total = 0;
                state.jobs.forEach(() => {
                    total = total + 1
                });
                return total
            },
            publications(state) {
                let total = 0;
                state.publications.forEach(() => {
                    total = total + 1
                });
                return total
            },
            services(state) {
                let total = 0;
                state.services.forEach(() => {
                    total = total + 1
                });
                return total
            },
            members(state) {
                let total = 0;
                state.members.forEach(() => {
                    total = total + 1
                });
                return total
            },
            appointments(state) {
                return state.dbAppointments
            },
            servicesDB(state) {
                return state.dbServices
            },
            slots(state) {
                return state.dbSlots
            },
            dates(state) {
                return state.dbDates
            }
        })
    }
</script>
