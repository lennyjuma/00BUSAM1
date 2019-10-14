<template>
    <div class="team">
        <dash-layout></dash-layout>
        <div class="content-view">
            <!--<div class="heading">
                <div class="control-buttons">
                    <el-row>
                        <span class="sorters">
                            <el-select class="selector"
                                       v-model="value"
                                       multiple
                                       filterable
                                       allow-create
                                       default-first-option
                                       placeholder="Select Position" value="">
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                            <el-select class="selector"
                                       v-model="value2"
                                       multiple
                                       filterable
                                       allow-create
                                       default-first-option
                                       placeholder="Select Specialization" value="">
                                <el-option
                                    v-for="item in options2"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </span>
                        <span class="add-button">
                            <el-button size="small" type="primary"  @click="drawer = true" icon="el-icon-edit">Add</el-button>
                        </span>
                    </el-row>
                </div>
            </div>-->
            <div class="container-fluid">
                    <h3 class="text-dark mb-4">Team &nbsp | &nbsp<el-button size="small" @click="handleAdd" type="primary" icon="el-icon-plus" circle></el-button></h3>
                <div class="card shadow">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6 text-nowrap">
                                <div id="dataTable_length" class="dataTables_length" aria-controls="dataTable"><label>Show <select class="form-control form-control-sm custom-select custom-select-sm"><option value="10" selected>10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select></label></div>
                            </div>
                            <div class="col-md-6">
                                <div class="text-md-right dataTables_filter" id="dataTable_filter"><label><input type="search" class="form-control form-control-sm" aria-controls="dataTable" placeholder="Search" /></label></div>
                            </div>
                        </div>
                        <div class="table-responsive table mt-2" role="grid" aria-describedby="dataTable_info">
                            <table class="table dataTable my-0" id="dataTable">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Specialization</th>
                                    <th>Date Updated</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="member in activeChunk">
                                    <td>{{ member.title.rendered }}</td>
                                    <td><span v-for="spec in member.metadata.specialization">{{ spec }} </span></td>
                                    <td>{{ member.modified }}</td>
                                    <td><el-button size="small" type="primary" icon="el-icon-edit" circle @click="handleEdit(member.id)"></el-button></td>
                                    <td><el-button size="small" class="el-icon-delete" circle @click="handleDelete(member.id)"></el-button></td>
                                </tr>
                                </tbody>
                                <tfoot>
                                <tr>
                                    <td><strong>Name</strong></td>
                                    <td><strong>Specialization</strong></td>
                                    <td><strong>Date Updated</strong></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div class="row" style="display: none;">
                            <div class="col-md-6 align-self-center">
                                <p id="dataTable_info" class="dataTables_info" role="status" aria-live="polite">Showing 1 to 10 of 27</p>
                            </div>
                            <div class="col-md-6">
                                <nav class="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                                    <jw-pagination :pageSize="pageSize" :items="doctors" @changePage="onChangePage"></jw-pagination>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-drawer
            title="Team Profile"
            size="100%"
            :visible.sync="drawer"
            :direction="direction"
            :before-close="handleClose">
            <profile :postId="postId"></profile>
        </el-drawer>
        <el-drawer
            title="New Member"
            size="100%"
            :visible.sync="drawer2"
            :direction="direction"
            :before-close="handleClose">
            <profile></profile>
        </el-drawer>
    </div>
</template>
<script>
    import DashLayout from "../components/DashLayout.vue";
    import Profile from "../components/profile.vue";
    import JwPagination from 'jw-vue-pagination';
    import { mapState } from 'vuex';
    export default {
        name: 'Team',
        components: {
            'dash-layout' : DashLayout,
            'profile': Profile,
            'jw-pagination' : JwPagination
        },
        data: function () {
            return {
                options: [{
                    value: 'doctor',
                    label: 'Doctor'
                },{
                    value: 'general',
                    label: 'General'
                }],
                options2: [{
                    value: 'specialization 1',
                    label: 'SPEC 1'
                },{
                    value: 'specialization 2',
                    label: 'SPEC 2'
                }],
                value: [],
                value2: [],
                drawer: false,
                drawer2: false,
                direction: 'rtl',
                pageSize: 5,
                activeChunk: [],
                currentPage: 0,
                postId: null
            }
        },
        methods: {
            handleAdd() {
                this.drawer2 = true;
            },
            handleClose(done) {
                done();
            },
            handleEdit(id) {
                this.drawer = true;
                this.postId = id;
            },
            handleDelete(id) {
                this.$store.dispatch('deletePublications', {id: id, token: this.jwttoken}).then( results => {
                    console.log('deleted', results);
                }).catch(error => {
                    console.log(error)
                })
            },
            onChangePage(pageOfItems) {
                this.activeChunk = pageOfItems;
                this.currentPage += 1
            }
        },
        computed: mapState({
            doctors(state) {
                return state.doctors
            },
            activeTab() {
                return this.activeChunk.filter()
            }
        }),
        mounted() {
            console.log("team component loaded");
        }
    }
</script>
<style scoped>

</style>
