<template>
   <div class="container-fluid">
       <div class="row">
           <div class="col-md-6 mb-4">
                <small class="text-muted">&nbsp; Time Leap - Seed days</small>
               <br>
                <div>
                    <el-input-number v-model="leapTime" @change="handleLeap" :min="0" :max="365"></el-input-number>
                </div>
           </div>
           <div class="col-md-6 mb-4">
               <div v-if="!hideSingle">
                   <small class="text-muted">&nbsp; Specific Day *</small>
                   <br>
                   <el-date-picker
                       v-model="selectedDate"
                       type="date"
                       placeholder="Pick a day">
                   </el-date-picker>
               </div>
               <small class="text-muted">&nbsp; Days Description</small>
               <div>
                   <el-input name="description" type="textarea" :rows="2" placeholder="Launch Day" v-model="caption"></el-input>
               </div>
           </div>
       </div>
       <div class="row">
           <h6 class="dropdown-header">Slot 1</h6>
           <div class="col-md-6 col-xl-3 mb-4">
               <el-time-select
                   placeholder="Start time"
                   v-model="startTime1"
                   :picker-options="{
                          start: '09:00',
                          step: '01:00',
                          end: '17:00'
                        }">
               </el-time-select>
           </div> &nbsp;
           <div class="col-md-6 col-xl-3 mb-4">
               <el-time-select
                   placeholder="End time"
                   v-model="endTime1"
                   :picker-options="{
                          start: '09:00',
                          step: '01:00',
                          end: '17:00',
                          minTime: startTime1
                        }">
               </el-time-select>
           </div>
           <div class="col-md-6 col-xl-3 mb-4">
               <el-select v-model="service_id1" filterable placeholder="Services" >
                   <el-option v-for="service in services" v-bind:label="service.service_type" v-bind:key="service.id" v-bind:value="service.id">
                       <span style="float: left" v-html="service.service_type.toUpperCase()"></span>
                   </el-option>
               </el-select>
           </div>
       </div>
       <div class="row">
           <h6 class="dropdown-header">Slot 2</h6>
           <div class="col-md-6 col-xl-3 mb-4">
               <el-time-select
                   placeholder="Start time"
                   v-model="startTime2"
                   :picker-options="{
                          start: '09:00',
                          step: '01:00',
                          end: '17:00'
                        }">
               </el-time-select>
           </div> &nbsp;
           <div class="col-md-6 col-xl-3 mb-4">
               <el-time-select
                   placeholder="End time"
                   v-model="endTime2"
                   :picker-options="{
                          start: '09:00',
                          step: '01:00',
                          end: '17:00',
                          minTime: startTime2
                        }">
               </el-time-select>
           </div>
           <div class="col-md-6 col-xl-3 mb-4">
               <el-select v-model="service_id2" filterable placeholder="Services" >
                   <el-option v-for="service in services" v-bind:label="service.service_type" v-bind:key="service.id" v-bind:value="service.id">
                       <span style="float: left" v-html="service.service_type.toUpperCase()"></span>
                   </el-option>
               </el-select>
           </div>
       </div>
       <div class="row">
           <h6 class="dropdown-header">Slot 3</h6>
           <div class="col-md-6 col-xl-3 mb-4">
               <el-time-select
                   placeholder="Start time"
                   v-model="startTime3"
                   :picker-options="{
                          start: '09:00',
                          step: '01:00',
                          end: '17:00'
                        }">
               </el-time-select>
           </div> &nbsp;
           <div class="col-md-6 col-xl-3 mb-4">
               <el-time-select
                   placeholder="End time"
                   v-model="endTime3"
                   :picker-options="{
                          start: '09:00',
                          step: '01:00',
                          end: '17:00',
                          minTime: startTime3
                        }">
               </el-time-select>
           </div>
           <div class="col-md-6 col-xl-3 mb-4">
               <el-select v-model="service_id3" filterable placeholder="Services" >
                   <el-option v-for="service in services" v-bind:label="service.service_type" v-bind:key="service.id" v-bind:value="service.id">
                       <span style="float: left" v-html="service.service_type.toUpperCase()"></span>
                   </el-option>
               </el-select>
           </div>
       </div>
       <div class="row">
           <h6 class="dropdown-header">Slot 4</h6>
           <div class="col-md-6 col-xl-3 mb-4">
               <el-time-select
                   placeholder="Start time"
                   v-model="startTime4"
                   :picker-options="{
                          start: '09:00',
                          step: '01:00',
                          end: '17:00'
                        }">
               </el-time-select>
           </div> &nbsp;
           <div class="col-md-6 col-xl-3 mb-4">
               <el-time-select
                   placeholder="End time"
                   v-model="endTime4"
                   :picker-options="{
                          start: '09:00',
                          step: '01:00',
                          end: '17:00',
                          minTime: startTime4
                        }">
               </el-time-select>
           </div>
           <div class="col-md-6 col-xl-3 mb-4">
               <el-select v-model="service_id4" filterable placeholder="Services" >
                   <el-option v-for="service in services" v-bind:label="service.service_type" v-bind:key="service.id" v-bind:value="service.id">
                       <span style="float: left" v-html="service.service_type.toUpperCase()"></span>
                   </el-option>
               </el-select>
           </div>
       </div>


       <div class="row">
           <h6 class="dropdown-header">Slot 5</h6>
           <div class="col-md-6 col-xl-3 mb-4">
               <el-time-select
                   placeholder="Start time"
                   v-model="startTime5"
                   :picker-options="{
                          start: '09:00',
                          step: '01:00',
                          end: '17:00'
                        }">
               </el-time-select>
           </div> &nbsp;
           <div class="col-md-6 col-xl-3 mb-4">
               <el-time-select
                   placeholder="End time"
                   v-model="endTime5"
                   :picker-options="{
                          start: '09:00',
                          step: '01:00',
                          end: '17:00',
                          minTime: startTime5
                        }">
               </el-time-select>
           </div>
           <div class="col-md-6 col-xl-3 mb-4">
               <el-select v-model="service_id5" filterable placeholder="Services" >
                   <el-option v-for="service in services" v-bind:label="service.service_type" v-bind:key="service.id" v-bind:value="service.id">
                       <span style="float: left" v-html="service.service_type.toUpperCase()"></span>
                   </el-option>
               </el-select>
           </div>
       </div>
       <div class="row">
           <h6 class="dropdown-header">Slot 6</h6>
           <div class="col-md-6 col-xl-3 mb-4">
               <el-time-select
                   placeholder="Start time"
                   v-model="startTime6"
                   :picker-options="{
                          start: '09:00',
                          step: '01:00',
                          end: '17:00'
                        }">
               </el-time-select>
           </div> &nbsp;
           <div class="col-md-6 col-xl-3 mb-4">
               <el-time-select
                   placeholder="End time"
                   v-model="endTime6"
                   :picker-options="{
                          start: '09:00',
                          step: '01:00',
                          end: '17:00',
                          minTime: startTime6
                        }">
               </el-time-select>
           </div>
           <div class="col-md-6 col-xl-3 mb-4">
               <el-select v-model="service_id6" filterable placeholder="Services" >
                   <el-option v-for="service in services" v-bind:label="service.service_type" v-bind:key="service.id" v-bind:value="service.id">
                       <span style="float: left" v-html="service.service_type.toUpperCase()"></span>
                   </el-option>
               </el-select>
           </div>
       </div>
       <div class="row">
           <h6 class="dropdown-header">Slot 7</h6>
           <div class="col-md-6 col-xl-3 mb-4">
               <el-time-select
                   placeholder="Start time"
                   v-model="startTime7"
                   :picker-options="{
                          start: '09:00',
                          step: '01:00',
                          end: '17:00'
                        }">
               </el-time-select>
           </div> &nbsp;
           <div class="col-md-6 col-xl-3 mb-4">
               <el-time-select
                   placeholder="End time"
                   v-model="endTime7"
                   :picker-options="{
                          start: '09:00',
                          step: '01:00',
                          end: '17:00',
                          minTime: startTime7
                        }">
               </el-time-select>
           </div>
           <div class="col-md-6 col-xl-3 mb-4">
               <el-select v-model="service_id7" filterable placeholder="Services" >
                   <el-option v-for="service in services" v-bind:label="service.service_type" v-bind:key="service.id" v-bind:value="service.id">
                       <span style="float: left" v-html="service.service_type.toUpperCase()"></span>
                   </el-option>
               </el-select>
           </div>
       </div>
       <div class="row">
           <h6 class="dropdown-header">Slot 8</h6>
           <div class="col-md-6 col-xl-3 mb-4">
               <el-time-select
                   placeholder="Start time"
                   v-model="startTime8"
                   :picker-options="{
                          start: '09:00',
                          step: '01:00',
                          end: '17:00'
                        }">
               </el-time-select>
           </div> &nbsp;
           <div class="col-md-6 col-xl-3 mb-4">
               <el-time-select
                   placeholder="End time"
                   v-model="endTime8"
                   :picker-options="{
                          start: '09:00',
                          step: '01:00',
                          end: '17:00',
                          minTime: startTime8
                        }">
               </el-time-select>
           </div>
           <div class="col-md-6 col-xl-3 mb-4">
               <el-select v-model="service_id8" filterable placeholder="Services" >
                   <el-option v-for="service in services" v-bind:label="service.service_type" v-bind:key="service.id" v-bind:value="service.id">
                       <span style="float: left" v-html="service.service_type.toUpperCase()"></span>
                   </el-option>
               </el-select>
           </div>
       </div>
       <!--<div class="row">
           <h6 class="dropdown-header">Slot 9</h6>
           <div class="col-md-6 col-xl-3 mb-4">
               <el-time-select
                   placeholder="Start time"
                   v-model="startTime9"
                   :picker-options="{
                          start: '09:00',
                          step: '01:00',
                          end: '17:00'
                        }">
               </el-time-select>
           </div> &nbsp;
           <div class="col-md-6 col-xl-3 mb-4">
               <el-time-select
                   placeholder="End time"
                   v-model="endTime9"
                   :picker-options="{
                          start: '09:00',
                          step: '01:00',
                          end: '17:00',
                          minTime: startTime9
                        }">
               </el-time-select>
           </div>
           <div class="col-md-6 col-xl-3 mb-4">
               <el-select v-model="service_id9" filterable placeholder="Services" >
                   <el-option v-for="service in services" v-bind:label="service.service_type" v-bind:key="service.id" v-bind:value="service.id">
                       <span style="float: left" v-html="service.service_type.toUpperCase()"></span>
                   </el-option>
               </el-select>
           </div>
       </div>-->

       <div class="row">
           <div class="col-md-6 col-xl-3 mb-4">
                <el-button type="primary" @click="AddDateSlots" plain>SAVE</el-button>
           </div>
           <el-alert v-if="okay"
                     title="success alert"
                     type="success"
                     description="more text description"
                     show-icon>
           </el-alert>
       </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: "date",
        data: function () {
            return {
                selectedDate: '',
                startTime1: '',
                endTime1: '',
                startTime2: '',
                endTime2: '',
                startTime3: '',
                endTime3: '',
                startTime4: '',
                endTime4: '',
                startTime5: '',
                endTime5: '',
                startTime6: '',
                endTime6: '',
                startTime7: '',
                endTime7: '',
                startTime8: '',
                endTime8: '',
                /*startTime9: '',
                endTime9: '',*/
                caption: '',
                service_id1: '',
                service_id2: '',
                service_id3: '',
                service_id4: '',
                service_id5: '',
                service_id6: '',
                service_id7: '',
                service_id8: '',
                // service_id9: '',
                slot1Out: '',
                slot2Out: '',
                slot3Out: '',
                slot4Out: '',
                slot5Out: '',
                slot6Out: '',
                slot7Out: '',
                slot8Out: '',
                // slot9Out: '',
                okay: false,
                leapTime: 0,
                leapJump: null,
                hideSingle: false,
                bulkOut: null
            }
        },
        methods: {
            handleLeap(value) {
                console.log('number of days to add', value);
                this.hideSingle = true;
                this.leapJump = value;
            },
            AddDateSlots() {
                Date.prototype.addDays = function(days) {
                    let date = new Date(this.valueOf());
                    date.setDate(date.getDate() + days);
                    return date;
                };

                if (this.selectedDate !== '') {
                    let selectedDate = this.selectedDate.addDays(1);
                    let outgoingDate = selectedDate.toISOString().slice(0, 19).replace('T', ' ');
                    let temp = outgoingDate.slice(0,10);
                    outgoingDate = `${outgoingDate.slice(0,10)} 00:00:00`;
                    let outDate = {
                        day: outgoingDate,
                        caption: this.caption
                    };
                    let slot1Out = {
                        from: `${temp} 00:${this.startTime1}`,
                        to: `${temp} 00:${this.endTime1}`,
                        service_id: this.service_id1
                    };
                    let slot2Out = {
                        from: `${temp} 00:${this.startTime2}`,
                        to: `${temp} 00:${ this.endTime2}`,
                        service_id: this.service_id2
                    };
                    let slot3Out = {
                        from: `${temp} 00:${this.startTime3}`,
                        to: `${temp} 00:${this.endTime3}`,
                        service_id: this.service_id3
                    };
                    let slot4Out = {
                        from: `${temp} 00:${this.startTime4}`,
                        to: `${temp} 00:${this.endTime4}`,
                        service_id: this.service_id4
                    };
                    let slot5Out = {
                        from: `${temp} 00:${this.startTime5}`,
                        to: `${temp} 00:${this.endTime5}`,
                        service_id: this.service_id5
                    };
                    let slot6Out = {
                        from: `${temp} 00:${this.startTime6}`,
                        to: `${temp} 00:${this.endTime6}`,
                        service_id: this.service_id6
                    };
                    let slot7Out = {
                        from: `${temp} 00:${this.startTime7}`,
                        to: `${temp} 00:${this.endTime7}`,
                        service_id: this.service_id7
                    };
                    let slot8Out = {
                        from: `${temp} 00:${this.startTime8}`,
                        to: `${temp} 00:${this.endTime8}`,
                        service_id: this.service_id8
                    };
                    /*let slot9Out = {
                        from: `${temp} 00:${this.startTime9}`,
                        to: `${temp} 00:${this.endTime9}`,
                        service_id: this.service_id9
                    };*/

                    console.log(outDate, slot1Out, slot2Out, slot3Out, slot4Out, slot5Out, slot6Out, slot7Out, slot8Out);
                    this.uploadDate(outDate);
                    this.slot1Out = slot1Out;
                    this.slot2Out = slot2Out;
                    this.slot3Out = slot3Out;
                    this.slot4Out = slot4Out;
                    this.slot5Out = slot5Out;
                    this.slot6Out = slot6Out;
                    this.slot7Out = slot7Out;
                    this.slot8Out = slot8Out;
                    // this.slot9Out = slot9Out;
                }

                if (this.leapJump !== null) {
                    let date = new Date();
                    let leapDays = [];
                    for (let i = 0; i < this.leapJump; i++) {
                        let day = date.addDays(i+1).toISOString().slice(0, 19).replace('T', ' ');
                        let temp = day.slice(0,10);
                        let slot1Out = {
                            from: `${temp} 00:${this.startTime1}`,
                            to: `${temp} 00:${this.endTime1}`,
                            service_id: this.service_id1
                        };
                        let slot2Out = {
                            from: `${temp} 00:${this.startTime2}`,
                            to: `${temp} 00:${ this.endTime2}`,
                            service_id: this.service_id2
                        };
                        let slot3Out = {
                            from: `${temp} 00:${this.startTime3}`,
                            to: `${temp} 00:${this.endTime3}`,
                            service_id: this.service_id3
                        };
                        let slot4Out = {
                            from: `${temp} 00:${this.startTime4}`,
                            to: `${temp} 00:${this.endTime4}`,
                            service_id: this.service_id4
                        };
                        let slot5Out = {
                            from: `${temp} 00:${this.startTime5}`,
                            to: `${temp} 00:${this.endTime5}`,
                            service_id: this.service_id5
                        };
                        let slot6Out = {
                            from: `${temp} 00:${this.startTime6}`,
                            to: `${temp} 00:${this.endTime6}`,
                            service_id: this.service_id6
                        };
                        let slot7Out = {
                            from: `${temp} 00:${this.startTime7}`,
                            to: `${temp} 00:${this.endTime7}`,
                            service_id: this.service_id7
                        };
                        let slot8Out = {
                            from: `${temp} 00:${this.startTime8}`,
                            to: `${temp} 00:${this.endTime8}`,
                            service_id: this.service_id8
                        };
                        /*let slot9Out = {
                            from: `${temp} 00:${this.startTime9}`,
                            to: `${temp} 00:${this.endTime9}`,
                            service_id: this.service_id9
                        };*/

                        let respSlots = [
                            slot1Out,
                            slot2Out,
                            slot3Out,
                            slot4Out,
                            slot5Out,
                            slot6Out,
                            slot7Out,
                            slot8Out
                        ];

                        let outDate = {
                            day: `${day.slice(0,10)} 00:00:00`,
                            caption: this.caption,
                            slots: respSlots
                        };

                        leapDays.push(outDate);
                    }
                    this.bulkOut = leapDays;
                    this.uploadBulk();
                }
            },
            uploadSlot(data) {
                return this.$store.dispatch('doPost', { url: '/api/slots', data: {slot_data: data}}).then(
                    results => {
                        console.log('slots results', results);
                    }
                ).catch( error => {
                    console.log('slots error', error);
                })
            },
            uploadBulk() {
                _.forEach(this.bulkOut, (snippet) => {
                    this.$store.dispatch('doPost', { url: '/api/dates', data: {date_data: {day: snippet.day, caption: snippet.caption}}})
                    .then(
                        results => {
                            let s1 = {
                                ...snippet.slots[0],
                                date_id: results.id
                            };
                            let s2 = {
                                ...snippet.slots[1],
                                date_id: results.id
                            };
                            let s3 = {
                                ...snippet.slots[2],
                                date_id: results.id
                            };
                            let s4 = {
                                ...snippet.slots[3],
                                date_id: results.id
                            };
                            let s5 = {
                                ...snippet.slots[4],
                                date_id: results.id
                            };
                            let s6 = {
                                ...snippet.slots[5],
                                date_id: results.id
                            };
                            let s7 = {
                                ...snippet.slots[6],
                                date_id: results.id
                            };
                            let s8 = {
                                ...snippet.slots[7],
                                date_id: results.id
                            };
                            this.uploadSlot(s1);
                            this.uploadSlot(s2);
                            this.uploadSlot(s3);
                            this.uploadSlot(s4);
                            this.uploadSlot(s5);
                            this.uploadSlot(s6);
                            this.uploadSlot(s7);
                            this.uploadSlot(s8);
                        }
                    ).catch( error => {
                        console.log('dates error', error);
                    })
                })
            },
            uploadDate(data) {
                return this.$store.dispatch('doPost', { url: '/api/dates', data: {date_data: data}}).then(
                    results => {
                        let s1 = {
                            ...this.slot1Out,
                            date_id: results.id
                        };
                        let s2 = {
                            ...this.slot2Out,
                            date_id: results.id
                        };
                        let s3 = {
                            ...this.slot3Out,
                            date_id: results.id
                        };
                        let s4 = {
                            ...this.slot4Out,
                            date_id: results.id
                        };
                        let s5 = {
                            ...this.slot5Out,
                            date_id: results.id
                        };
                        let s6 = {
                            ...this.slot6Out,
                            date_id: results.id
                        };
                        let s7 = {
                            ...this.slot7Out,
                            date_id: results.id
                        };
                        let s8 = {
                            ...this.slot8Out,
                            date_id: results.id
                        };
                        /*let s9 = {
                            ...this.slot9Out,
                            date_id: results.id
                        };*/

                        this.uploadSlot(s1);
                        this.uploadSlot(s2);
                        this.uploadSlot(s3);
                        this.uploadSlot(s4);
                        this.uploadSlot(s5);
                        this.uploadSlot(s6);
                        this.uploadSlot(s7);
                        this.uploadSlot(s8);
                        /*this.uploadSlot(s9);*/

                        console.log('slots results', results);
                        this.okay = true;
                    }
                ).catch( error => {
                    console.log('dates error', error);
                })
            }
        },
        computed: mapState({
            services(state) {
                return state.dbServices
            }
        })
    }
</script>

<style scoped>

</style>
