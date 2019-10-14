<template>
    <div>
        <!--<el-menu
                class="el-menu-demo parent"
                mode="horizontal"
                @select="handleSelect"
                text-color="#fff"
                position="absolute"
                active-text-color="#2EF0FA">
            <el-radio-group v-model="isCollapse" style="line-height: 40px; margin-right: 0; right: 0; top: 0; position: absolute;" class="el-menu-item rads" size="small">
                <el-radio-button :label="false" class="rad-tabs"><span class="tabtab">expand</span></el-radio-button>
                <el-radio-button :label="true" class="rad-tabs"><span class="tabtab">collapse</span></el-radio-button>
            </el-radio-group>
            <div class="spacer"></div>
            <router-link style="height: 40px; line-height: 40px; position: absolute; right: 0; top: -40px;" class="el-menu-item" to="/notifications" tag="li" index="1">
                <el-badge :value="notifications" class="item" type="warning">
                    <i class="el-icon-bell"></i>
                </el-badge>
            </router-link>
        </el-menu>

        <el-menu
            class="el-menu-vertical-demo"
            @open="handleOpen" @close="handleClose"
            :collapse="isCollapse"
            background-color="#343a40"
            text-color="#fff"
            position="absolute"
            active-text-color="#2EF0FA">
            <router-link class="el-menu-item" to="/dashboard" tag="li" index="1">
                    <i class="el-icon-view"></i>
                    <span class="menu-list">Dashboard</span>
            </router-link>
            <router-link to="/services" tag="li" class="el-menu-item" index="3">
                <i class="el-icon-files"></i>
                <span class="menu-list">Services</span>
            </router-link>
            <router-link class="el-menu-item" index="2" to="/publications" tag="li">
                    <i class="el-icon-tickets"></i>
                    <span class="menu-list">Publications</span>
            </router-link>
            <router-link to="/team" tag="li" class="el-menu-item" index="3">
                    <i class="el-icon-user"></i>
                    <span class="menu-list">Team</span>
            </router-link>
            <router-link to="/offers" tag="li" class="el-menu-item" index="4">
                <i class="el-icon-discount"></i>
                <span class="menu-list">Offers</span>
            </router-link>
        </el-menu>-->
    </div>
</template>

<script>
    import $ from "jquery";
    export default {
        name: "DashLayout",
        data: () => {
            return {
                isCollapse: true,
                activeIndex: '1',
                activeIndex2: '1',
                authentication: "Logoff",
                notifications: 0
            }
        },
        mounted() {

        },
        computed: {

        },
        methods: {
            handleOpen: function(key, keyPath) {
                console.log('closing', key, keyPath);
                $('.menu-list').css("display", "none")
            },
            handleClose: function(key, keyPath) {
                console.log('closing', key, keyPath);
                $('.menu-list').css("display", "none")
            },
            handleSelect(key, keyPath) {
                console.log('closing', key, keyPath);
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
