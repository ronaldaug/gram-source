<template>
    <div>
        <div class="head">
            <div>
                <save_option :key_id="{project_id}"></save_option>
            </div>
            <div class="fl-right">
                <Dropdown trigger="click">
                    <a href="javascript:void(0)">
                        <div class="uImg fl-right">
                            <img class="gravatar" :src="uname.profileImg">
                        </div>
                        <div class="uName fl-right"><p>Welcome <strong>{{uname.userName}}</strong>!</p></div>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem>
                            <router-link to="/profile">
                                <Icon type="person"></Icon>
                                Account
                            </router-link>
                        </DropdownItem>
                        <DropdownItem>
                            <a href="#" @click="logout">
                                <Icon type="log-out"></Icon>
                                Logout</a>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>
        <div id="gjs">
        </div>
    </div>
</template>

<script>
    import {auth} from './../firebase'
    import save_option from './saveOption.vue';
    export default {
        name: 'builder',
        components:{
            save_option
        },
        props:{
            uname: '',
        },
        data(){
            return{
                project_id:''
            }
        },
        mounted () {
            this.gramateria();
            this.project_id = localStorage.getItem('project_id');
        },
        methods:{
            logout(e) {
                e.preventDefault();
                auth.signOut()
                    .then(() => {
                        this.$router.go({ path: this.$router.path });
                    });
            },
        }
    }
</script>

<style scoped>
    #gjs{
        height:640px !important;
    }
    @import '../../static/vendors/grapesjs/css/grapes.min.css';
    @import '../../static/vendors/grapesjs/gram.min.css';
</style>