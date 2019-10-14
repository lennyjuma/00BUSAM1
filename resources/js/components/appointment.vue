<template>
    <div class="appointmentCl">
        <template v-for="appointment in appointmnt">
            <tr>
                <td class="labl">
                    <strong>From </strong>
                </td>
                <td class="dta">
                    <span>{{ new Date(appointment.slotData.from).toDateString() }}</span>
                </td>
            </tr>
            <tr>
                <td class="labl">
                    <strong>To </strong>
                </td>
                <td class="dta">
                    <span>{{ new Date(appointment.slotData.to).toDateString() }}</span>
                </td>
            </tr>
            <tr>
                <td class="labl">
                    <strong>First Name</strong>
                </td>
                <td class="dta">
                    <span>{{ appointment.first_name }}</span>
                </td>
            </tr>
            <tr>
                <td class="labl">
                    <strong>Last Name</strong>
                </td>
                <td class="dta">
                    <span>{{ appointment.last_name }}</span>
                </td>
            </tr>
            <tr>
                <td class="labl">
                    <strong>Email</strong>
                </td>
                <td class="dta">
                    <span>{{ appointment.email }}</span>
                </td>
            </tr>
            <tr>
                <td class="labl">
                    <strong>Cellphone</strong>
                </td>
                <td class="dta">
                    <span>{{ appointment.phone_number }}</span>
                </td>
            </tr>
            <tr>
                <td class="labl">
                    <strong>Service </strong>
                </td>
                <td class="dta">
                    <span>{{ appointment.serviceName.toUpperCase() }}</span>
                </td>
            </tr>
            <tr>
                <td class="labl">
                    <strong>Description </strong>
                </td>
                <td class="dta">
                    <span>{{ appointment.description }}</span>
                </td>
            </tr>
        </template>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: "appointment",
        data: function () {
            return {
                appointmnt: []
            }
        },
        mounted() {
            console.log(this.appointmentId);
            this.appointmnt.push(this.appointmentId);
        },
        props: ['appointmentId'],
        computed: mapState({

        }),
        methods: {

        }
    }
</script>

<style scoped>
    td {
        text-align: left !important;
        padding: 8px !important;
        border-top: 1px solid lightgrey;
    }
    .appointmentCl {
        text-align: center;
        width: 45vw;
        margin-left: auto;
        margin-right: auto;
        border-left: 1px solid lightgrey;
    }
    .labl {
        width: 40%;
    }
    .dta {
        width: 60%;
    }
</style>
