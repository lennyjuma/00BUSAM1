<template>
    <div>
        <form v-if="!okay" :model="form" @submit.prevent="makeSubmit">
            <div class="container-fluid" style="margin-top: 50px;">
                <div class="row mb-3">
                    <div class="col-lg-4">
                        <div class="card mb-3">
                            <div style="height: 330px;" class="card-body text-center shadow">
                                <div class="mb-3">
                                    <div class="form-group">
                                        <label><strong>Featured Image</strong></label>
                                        <input v-on:change="onImageAdd" type="file"><br><br>
                                        <span v-if="featuredImg !== null">
                                            <el-image
                                                :src="featuredImg"
                                                fit="cover">
                                            </el-image>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col">
                                <div class="card shadow mb-3">
                                    <div class="card-header py-3">
                                        <p class="text-primary m-0 font-weight-bold">Service Details</p>
                                    </div>
                                    <div class="card-body">
                                        <div class="form-row">
                                            <div class="col">
                                                <div class="form-group">
                                                    <label><strong>Title</strong><br></label>
                                                    <input id="title" v-model="form.title" class="form-control" type="text" name="title" aria-required="true">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="col">
                                                <div class="form-group">
                                                    <label><strong>Type</strong><br></label>
                                                    <input id="type" v-model="form.type" class="form-control" type="text" name="type" aria-required="true">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-group">
                                                    <label><strong>Price</strong></label>
                                                    <input id="price" v-model="form.price" class="form-control" type="text" name="price" aria-required="true">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="col">
                                                <div class="form-group">
                                                    <label style="display: block;"><strong>Tags</strong></label>
                                                    <el-select
                                                        v-model="form.tags"
                                                        multiple
                                                        filterable
                                                        remote
                                                        reserve-keyword
                                                        placeholder="Please enter a keyword"
                                                        :remote-method="remoteMethod"
                                                        :loading="loading">
                                                        <el-option
                                                            v-for="item in options"
                                                            :key="item.value"
                                                            :label="item.label"
                                                            :value="item.value">
                                                        </el-option>
                                                    </el-select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card shadow mb-5">
                    <div class="card-header py-3">
                        <p class="text-primary m-0 font-weight-bold">Excerpt</p>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6 col-xl-12">
                                <editor v-model="form.excerpt" api-key="mtb1w2le4xo5fgte5ixt2mdz1ib9e6aoxqqdbqsstfo1yuz0" :init="{plugins: ['link', 'code']}"></editor>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card shadow mb-5">
                    <div class="card-header py-3">
                        <p class="text-primary m-0 font-weight-bold">Description</p>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6 col-xl-12">
                                <editor v-model="form.content" api-key="mtb1w2le4xo5fgte5ixt2mdz1ib9e6aoxqqdbqsstfo1yuz0" :init="{plugins: ['link', 'code']}"></editor>
                            </div>
                            <div class="submit-btn col-md-6 col-xl-12">
                                <button class="btn btn-primary btn-sm" type="submit">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <el-alert v-if="okay"
            title="success alert"
            type="success"
            description="more text description"
            show-icon>
        </el-alert>
    </div>
</template>

<script>
    import Editor from '@tinymce/tinymce-vue';
    import { mapState } from 'vuex';
    export default {
        name: "service",
        components: {
            'editor': Editor
        },
        data: function () {
            return {
                form: {
                    title: null,
                    type: null,
                    price: null,
                    tags: [],
                    excerpt: null,
                    content: null
                },
                selectedImage: null,
                featuredImg: null,
                hasMedia: false,
                hasMeta: false,
                postContext: null,
                options: [],
                value: [],
                list: [],
                loading: false,
                postOfInterest: null,
                okay: false
            }
        },
        props: ['postId'],
        methods: {
            makeSubmit() {
                let outgoingData = {
                    ...this.form,
                    featuredImage: this.selectedImage,
                    token: this.jwttoken,
                    hasMedia: this.hasMedia,
                    hasMeta: this.hasMeta,
                    category: [4]
                };

                outgoingData.postContent = {
                    title: outgoingData.title,
                    excerpt: outgoingData.excerpt,
                    content: outgoingData.content,
                    tags: outgoingData.tags,
                    category: outgoingData.category
                };
                delete outgoingData.title;
                delete outgoingData.excerpt;
                delete outgoingData.content;
                delete outgoingData.tags;
                delete outgoingData.category;

                outgoingData.metaObj = [{
                    "field_name": "price",
                    "value": outgoingData.price
                },{
                    "field_name": "serviceType",
                    "value": outgoingData.type
                }
                ];

                outgoingData.mediaObj = {
                    "featuredImage": outgoingData.featuredImage,
                    "details": {
                        "title": "body sculpt service",
                        "alt_text": "body sculpt service alt",
                        "caption": "body sculpt service caption",
                        "description": `${outgoingData.type}`
                    }
                };

                delete outgoingData.price;

                delete outgoingData.type;

                delete outgoingData.featuredImage;

                if (typeof this.postId !== 'undefined') {
                    outgoingData.id = this.postId;
                    this.$store.dispatch('editPublications', outgoingData).then(result => {
                        console.log(result);
                        this.$store.commit('setComplete', true);
                        this.okay = true;
                    }).catch(err => {
                        console.log(err)
                    });
                } else {
                    console.log("New Service Data", outgoingData);
                    this.$store.dispatch('createPublications', outgoingData).then(result => {
                        this.$store.commit('setComplete', true);
                        this.okay = true;
                        console.log(result);
                    }).catch(err => {
                        console.log(err)
                    });
                }
            },
            onImageAdd(event) {
                this.selectedImage = event.target.files[0];
                this.hasMedia = true;
            },
            remoteMethod(query) {
                if (query !== '') {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        this.options = this.list.filter(item => {
                            return item.label.toLowerCase()
                                .indexOf(query.toLowerCase()) > -1;
                        });
                    }, 200);
                } else {
                    this.options = [];
                }
            },
            doDataBinding() {
                _.filter(this.allServices, (service) => {
                    if (service.id === this.postId) {
                        this.postOfInterest = service;
                    }
                });

                this.postContext = this.postOfInterest.id;
                this.form.title = this.postOfInterest.title.rendered;
                 this.form.type = (this.postOfInterest['metadata']['serviceType'] !== undefined) ? this.postOfInterest['metadata']['serviceType'][0] : '';
                 this.form.price = (this.postOfInterest['metadata']['price'] !== undefined) ? this.postOfInterest['metadata']['price'][0]: '';
                this.form.excerpt = this.postOfInterest.excerpt.rendered;
                this.form.content = this.postOfInterest.content.rendered;
                this.featuredImg = (this.postOfInterest['_embedded']['wp:featuredmedia'] !== undefined) ? this.postOfInterest['_embedded']['wp:featuredmedia'][0]['media_details']['sizes']['medium']['source_url'] : '';
            },
            genTags() {
                this.list = this.allTags.map(item => {
                    return { value: item.id, label: item.name };
                });
                this.hasMeta = true;
            }
        },
        mounted() {

            if (typeof this.postId !== 'undefined') {
                this.doDataBinding();
            }

            this.genTags();
            console.log(this.post)
        },
        computed: mapState({
            jwttoken(state) {
                return state.cmsSec['token'];
            },
            allServices(state) {
                return state.services
            },
            allTags(state) {
                return state.tags
            },
            allCategories(state){
                return state.categories
            }
        })
    }
</script>

<style scoped>

</style>
