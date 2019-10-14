<template>
    <div>
        <form :model="form" @submit.prevent="makeSubmit">
            <div class="container-fluid">
                <div class="row mb-3">
                    <div class="col-lg-4">
                        <div class="card mb-3">
                            <div class="card-body text-center shadow">
                                <span v-if="featuredImg !== null">
                                            <el-image class="rounded-circle"
                                                style="width: 200px; height: 200px"
                                                :src="featuredImg"
                                                fit="cover">
                                            </el-image>
                                </span>
                                <div class="mb-3">
                                    <input v-on:change="onImageAdd" type="file">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col">
                                <div class="card shadow mb-3">
                                    <div class="card-header py-3">
                                        <p class="text-primary m-0 font-weight-bold">Doctor Details</p>
                                    </div>
                                    <div class="card-body">
                                            <div class="form-row">
                                                <div class="col">
                                                    <div class="form-group">
                                                        <label><strong>Specialization</strong><br></label>
                                                        <input id="specializations" v-model="form.specialization" class="form-control" type="text" placeholder="user.name" name="username">
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div class="form-group">
                                                        <label><strong>Email Address</strong></label>
                                                        <input id="emails" v-model="form.email" class="form-control" type="email" placeholder="user@example.com" name="email">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <div class="col">
                                                    <div class="form-group">
                                                        <label><strong>Full Name</strong><br></label>
                                                        <input id="names" v-model="form.name" class="form-control" type="text" placeholder="John Doe">
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
    </div>
</template>

<script>
    import Editor from '@tinymce/tinymce-vue';
    import { mapState } from 'vuex';
    export default {
        name: "profile",
        components: {
            'editor': Editor
        },
        data: function () {
            return {
                form: {
                    specialization: null,
                    email: null,
                    name: null,
                    excerpt: null,
                    content: null
                },
                selectedImage: null,
                selectedDoctor: null,
                featuredImg: null,
                postContext: null,
                postOfInterest: null
            }
        },
        props: ['postId'],
        methods: {
            makeSubmit() {
                let outgoingData = {
                    ...this.form,
                    featuredImage: this.selectedImage
                };
                console.log(outgoingData)
            },
            onImageAdd(event) {
                this.selectedImage = event.target.files[0]
            },
            populatePostData(post_id) {
                this.doctors.forEach(doctor => {
                    if (doctor.id === post_id) {
                        this.selectedDoctor = doctor
                    }
                });

                console.log('Our Doctor Profile', this.selectedDoctor);
            },
            doDataBinding() {
                _.filter(this.doctors, (doctor) => {
                    if (doctor.id === this.postId) {
                        this.postOfInterest = doctor;
                    }
                });

                this.postContext = this.postOfInterest.id;
                console.log(this.postOfInterest);
                this.form.name = this.postOfInterest.title.rendered;
                this.form.email = (this.postOfInterest['metadata']['email'] !== undefined) ? this.postOfInterest['metadata']['email'][0] : '';
                this.form.specialization = (this.postOfInterest['metadata']['specialization'] !== undefined) ? this.postOfInterest['metadata']['specialization'][0]: '';
                this.form.excerpt = this.postOfInterest.excerpt.rendered;
                this.form.content = this.postOfInterest.content.rendered;
                this.featuredImg = (this.postOfInterest['_embedded']['wp:featuredmedia'] !== undefined) ? this.postOfInterest['_embedded']['wp:featuredmedia'][0]['media_details']['sizes']['medium']['source_url'] : '';
            }
        },
        mounted() {
            this.populatePostData(this.selectedPost);
            if (typeof this.postId !== 'undefined') {
                this.doDataBinding();
            }
        },
        computed: mapState({
            jwttoken(state) {
                return state.cmsSec['token'];
            },
            selectedPost(state) {
                return state.selectedPost
            },
            doctors(state) {
                return state.doctors
            }
        })
    }
</script>
