import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import { getPosts, createPosts, updatePosts, deletePosts, getToken, getPostTags, getPostCategories, getBooking, postData, deleteData} from './api/cms'

export function createStore() {
    return  new Vuex.Store({
        state: {
            authorized: false,
            complete: false,
            cmsSec: null,
            selectedPost: null,
            publications: [],
            doctors: [],
            offers: [],
            services: [],
            categories: [],
            tags: [],
            hasPosts: null,
            dbServices: [],
            dbSlots: [],
            dbAppointments: [],
            dbDates: []
        },
        mutations: {
            setSec(state, payload = {}) {
                state.cmsSec = payload;
            },
            setComplete(state, payload = true) {
              state.complete = payload;
            },
            setPublication(state, payload = []) {
                state.publications = payload;
            },
            setDoctors(state, payload = []) {
                state.doctors = payload;
            },
            setOffers(state, payload = []) {
                state.offers = payload;
            },
            setServices(state, payload = []) {
                state.services = payload;
            },
            setAuth(state, payload = false) {
                state.authorized = payload;
            },
            setPostsStatus(state, payload = false) {
                state.hasPosts = payload;
            },
            setActivePost(state, payload = null) {
                state.selectedPost = payload;
            },
            setCategories(state, payload = []){
                state.categories = payload;
            },
            setTags(state, payload = []) {
                state.tags = payload
            },
            setDBServices(state, payload = []) {
                state.dbServices = payload
            },
            setDBAppointments(state, payload = []) {
                state.dbAppointments = payload
            },
            setDBDates(state, payload = []) {
                state.dbDates = payload
            },
            setDBSlots(state, payload = []) {
                state.dbSlots = payload
            }
        },
        actions: {
            doSecurity({dispatch, commit}) {
                return new Promise((resolve, reject) => {
                    getToken()
                        .then(d => {
                            dispatch('doAddAuth', true);
                            commit('setSec', d);
                            resolve(d)
                        }).catch(error => {
                            dispatch('doAddAuth', false);
                            console.log("Security Error", error);
                            reject(error)
                        })
                })
            },
            doAddAuth({commit}, payload) {
                return commit('setAuth', payload)
            },
            doGet({commit}, payload) {
              return new Promise((resolve,reject) => {
                  getBooking(payload)
                  .then( data => {
                      resolve(data)
                  })
                  .catch( error => {
                      console.log('booking data error', error);
                      reject(error)
                  })
              })
            },
            doPost({commit}, payload) {
                console.log('out post payload', payload);
                return new Promise ((resolve, reject) => {
                    postData(payload)
                        .then( results => {
                            console.log('post results', results);
                            resolve(results)
                        }).catch(error => reject(error))
                })
            },
            doDelete({commit}, payload) {
                console.log('out post payload', payload);
                return new Promise ((resolve, reject) => {
                    deleteData(payload)
                        .then( results => {
                            console.log('delete results', results);
                            resolve(results)
                        }).catch(error => reject(error))
                })
            },
            getPublications({dispatch, commit}, payload) {
                return new Promise((resolve, reject) => {
                    getPosts(payload)
                        .then(d => {
                            commit('setPostsStatus', true);
                            dispatch('doAddPosts', d);
                            console.log(d);
                            resolve(d)
                        }).catch(error => {
                            commit('setPostsStatus', false);
                            console.log("Getting Publications Error", error);
                            reject(error)
                        })
                })
            },
            editPublications({dispatch, commit}, payload) {
                return new Promise((resolve, reject) => {
                    updatePosts(payload)
                        .then( result => {
                            console.log('Vuex Entity Update Result', result);
                            resolve(payload)
                        })
                        .catch(error => {
                            console.log('Updating Entity Error', error);
                            reject(error)
                        })
                })
            },
            createPublications({dispatch, commit}, payload) {
                return new Promise((resolve, reject) => {
                    createPosts(payload)
                        .then( result => {
                            console.log('Vuex create publication Result', result);
                            resolve(result)
                        })
                        .catch( error => {
                            console.log('vuex create publication Error', error);
                            reject(error)
                        })
                })
            },
            deletePublications({dispatch, commit}, payload) {
                return new Promise((resolve, reject) => {
                    deletePosts(payload)
                    .then( result => {
                        console.log('Vuex publication delete Result', result);
                        resolve(result)
                    })
                    .catch(error => {
                        console.log('vuex delete publication Error', error);
                        reject(error)
                    })
                })
            },
            getTags({commit}, payload) {
                return new Promise((resolve, reject) => {
                    getPostTags(payload)
                        .then( result => {
                            console.log('Vuex tags Result', result);
                            commit('setTags', result);
                        })
                        .catch(error => {
                            console.log('vuex tags Error', error);
                            reject(error)
                        })
                })
            },
            getCategories({commit}, payload) {
                return new Promise((resolve, reject) => {
                    getPostCategories(payload)
                        .then( result => {
                            console.log('Vuex category Result', result);
                            commit('setCategories', result);
                        })
                        .catch(error => {
                            console.log('vuex category Error', error);
                            reject(error)
                        })
                })
            },
            doAddPosts({commit}, payload) {
                let publications = [];
                let doctors = [];
                let services = [];
                let offers = [];
                _.filter(payload, (post) => {
                    _.forEach(post.categories, category => {
                        if (category === 1) {
                            doctors.push(post)
                        }
                        if (category === 2) {
                            publications.push(post)
                        }
                        if (category === 3) {
                            offers.push(post)
                        }
                        if (category === 4) {
                            services.push(post)
                        }
                    })
                });

                if (publications.length > 0) {
                    commit('setPublication', publications);
                }

                if (doctors.length > 0) {
                    commit('setDoctors', doctors);
                }

                if (services.length > 0) {
                    commit('setServices', services);
                }

                if (offers.length > 0) {
                    commit('setOffers', offers);
                }
            }
        }
    })
}
