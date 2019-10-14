<template>
    <div class="publications">
        <dash-layout></dash-layout>
        <div class="content-view">
            <div class="container-fluid">
                <h3 class="text-dark mb-4">Publications &nbsp | &nbsp<el-button @click="drawer = true" size="small" type="primary" icon="el-icon-plus" circle></el-button></h3>
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
                                    <th><strong>Title</strong></th>
                                    <th><strong>Date Updated</strong></th>
                                    <th><strong>Category</strong></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="publication in activeChunk">
                                    <td>{{ publication.title.rendered.toLowerCase() }}</td>
                                    <td>{{ publication.modified }}</td>
                                    <td><span v-for="tag in publication.tag">{{ tag }}, <br></span></td>
                                    <td><el-button size="small" type="primary" icon="el-icon-edit" circle @click="handleEdit(publication.id)"></el-button></td>
                                    <td><el-button size="small" class="el-icon-delete" circle @click="handleDelete(publication.id)"></el-button></td>
                                </tr>
                                </tbody>
                                <tfoot>
                                <tr>
                                    <td><strong>Title</strong></td>
                                    <td><strong>Date Updated</strong></td>
                                    <td><strong>Category</strong></td>
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
                                    <jw-pagination :pageSize="pageSize" :items="publications" @changePage="onChangePage"></jw-pagination>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-drawer
            title="Add Articles"
            size="100%"
            :visible.sync="drawer"
            :destroy-on-close="true"
            :direction="direction"
            :before-close="handleClose">
            <publication></publication>
        </el-drawer>
        <el-drawer
            title="Edit Article"
            size="100%"
            :destroy-on-close="true"
            :visible.sync="drawer2"
            :direction="direction"
            :before-close="handleClose">
            <publication :postId="postId"></publication>
        </el-drawer>
    </div>
</template>
<script>
    import DashLayout from "../components/DashLayout.vue";
    import Publication from "../components/publication.vue";
    import JwPagination from 'jw-vue-pagination';
    import { mapState } from 'vuex';
    export default {
        name: 'Publications',
        components: {
            'dash-layout' : DashLayout,
            'publication' : Publication,
            'jw-pagination' : JwPagination
        },
        data: function () {
            return {
                drawer: false,
                direction: 'rtl',
                drawer2: false,
                publications: null,
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
            publicationTypes(state) {
                return state.publications
            },
            jwttoken(state) {
                return state.cmsSec['token'];
            },
            activeTab() {
                return this.activeChunk.filter()
            }
        }),
        beforeMount() {
            console.log("publications component loaded");
            this.setPublicationTypes()
        },
        mounted() {

        },
        methods: {
            handleAdd() {
                this.drawer = true;
            },
            handleClose(done) {
                done()
            },
            handleEdit(id) {
                this.drawer2 = true;
                this.postId = id;
            },
            handleDelete() {
                this.$store.dispatch('deletePublications', { id: id, token: this.jwttoken })
                .then( results => {
                    console.log('Publications Deleted', results);
                }).catch(error => {
                    console.log(error)
                })
            },
            onChangePage(pageOfItems) {
                this.activeChunk = pageOfItems;
                this.currentPage += 1
            },
            mineTag(service){
                let publication_tag = [];

                service['_embedded']['wp:term'].filter(taxonomy => {
                    taxonomy.filter(term => {
                        if (term.taxonomy === "post_tag") {
                            publication_tag.push(term.name)
                        }
                    })
                });

                return publication_tag
            },
            setPublicationTypes() {
                this.publications = this.minePublications();
            },
            minePublications() {
                let newPublications = [];
                this.publicationTypes.filter( service => {
                    let moded = {
                        ...service,
                        tag: this.mineTag(service)
                    };
                    newPublications.push(moded)
                });

                return newPublications
            }
        }

    }
</script>
