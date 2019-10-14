<template>
    <div class="services">
        <dash-layout></dash-layout>
        <div class="content-view">
            <div class="container-fluid">
                <h3 style="margin-bottom: 10px !important;" class="text-dark mb-4">Services &nbsp | &nbsp<el-button @click="handleAdd" size="small" type="primary" icon="el-icon-plus" circle></el-button></h3>
                <div class="card shadow">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6 text-nowrap">
                                <div id="dataTable_length" class="dataTables_length" aria-controls="dataTable">
                                    <label>Show 
                                        <select class="form-control form-control-sm custom-select custom-select-sm">
                                            <option value="10" selected>10</option>
                                            <option value="25">25</option><option value="50">50</option>
                                            <option value="100">100</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="text-md-right dataTables_filter" id="dataTable_filter"><label><input type="search" v-model="search" class="form-control form-control-sm" aria-controls="dataTable" placeholder="Search" /></label></div>
                            </div>
                        </div>
                        <div class="table-responsive table mt-2" role="grid" aria-describedby="dataTable_info">
                            <table class="table dataTable my-0" id="dataTable">
                                <thead>
                                <tr>
                                    <th><strong>Service Name</strong></th>
                                    <th><strong>Title</strong></th>
                                    <th><strong>Date Updated</strong></th>
                                    <th><strong>Category</strong></th>
                                    <th><strong>Price</strong></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="practice in activeChunk">
                                    <td><span >{{ practice.serviceType.toLowerCase() }} </span></td>
                                    <td>{{ practice.title.rendered }}</td>
                                    <td>{{ practice.modified }}</td>
                                    <td><span v-for="category in practice.tag">{{ category }}, <br></span></td>
                                    <td><span v-for="cost in practice.metadata.price">{{ cost }} </span></td>
                                    <td><el-button size="small" type="primary" icon="el-icon-edit" circle @click="handleEdit(practice.id)"></el-button></td>
                                    <td><el-button size="small" class="el-icon-delete" circle @click="handleDelete(practice.id)"></el-button></td>
                                </tr>
                                </tbody>
                                <tfoot>
                                <tr>
                                    <td><strong>Service Name</strong></td>
                                    <td><strong>Title</strong></td>
                                    <td><strong>Date Updated</strong></td>
                                    <td><strong>Category</strong></td>
                                    <td><strong>Price</strong></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div class="row" >
                            <div class="col-md-6 align-self-center">
                                <p id="dataTable_info" class="dataTables_info" role="status" aria-live="polite">Showing {{ currentPage }} to 5 of {{ practices.length }}</p>
                            </div>
                            <div class="col-md-6">
                                <nav class="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                                    <jw-pagination :pageSize="pageSize" :items="practices" @changePage="onChangePage"></jw-pagination>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-drawer
            title="Add Services"
            size="100%"
            :destroy-on-close="true"
            :visible.sync="drawer"
            :direction="direction"
            :before-close="handleClose">
            <service></service>
        </el-drawer>
        <el-drawer
            title="Edit Service"
            size="100%"
            :destroy-on-close="true"
            :visible.sync="drawer2"
            :direction="direction"
            :before-close="handleClose">
            <service :postId="postId"></service>
        </el-drawer>
    </div>
</template>

<script>
    import DashLayout from "../components/DashLayout.vue";
    import Service from "../components/service.vue";
    import JwPagination from 'jw-vue-pagination';
    import { mapState } from 'vuex';
    export default {
        name: "Services",
        components: {
            'dash-layout' : DashLayout,
            'service': Service,
            'jw-pagination' : JwPagination
        },
        data: function () {
            return {
                drawer: false,
                direction: 'rtl',
                drawer2: false,
                practices: null,
                currentPage: 0,
                totalPages: null,
                chunks: null,
                activeChunk: [],
                pageSize: 5,
                postId: null,
                search: ''
            }
        },
        computed: mapState({
            serviceTypes(state) {
                return state.services
            },
            jwttoken(state) {
                return state.cmsSec['token'];
            },
            activeTab() {
                return this.activeChunk.filter()
            },
            closeRes(state) {
                return this.doClose(state.complete)
            }
        }),
        beforeMount() {
            console.log("services component loaded");
            this.setServiceTypes()
        },
        methods: {
            handleAdd() {
                this.drawer = true;
            },
            doClose() {
                return this.handleClose
            },
            handleClose(done) {
                done()
            },
            handleEdit(id) {
                this.drawer2 = true;
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
                this.currentPage +=1
            },
            mineTag(service) {
                let service_tag = [];

                service['_embedded']['wp:term'].filter(taxonomy => {
                    taxonomy.filter(term => {
                        if (term.taxonomy === "post_tag") {
                            service_tag.push(term.name)
                        }
                    })
                });

                return service_tag
            },
            mineServiceType(service) {
                if (service['metadata']['serviceType'] !== undefined){
                    return service['metadata']['serviceType'][0]
                }
                return ''
            },
            minePrice(service) {
                if (service['metadata']['price'] !== undefined) {
                    return service['metadata']['price'][0]
                }
                return ''
            },
            mineServices() {
                let newServices = [];

                this.serviceTypes.filter(service => {
                    let moded = {
                        ...service,
                        tag: this.mineTag(service),
                        serviceType: this.mineServiceType(service),
                        price: this.minePrice(service)
                    };
                    newServices.push(moded)
                });

                return  newServices
            },
            setServiceTypes() {
                this.practices = this.mineServices();
            }
        }
    }
</script>

<style scoped>

</style>
