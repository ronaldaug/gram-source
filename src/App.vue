<template>
    <div id="app">
        <p class="mobi-msg" v-if="isMobile">😓 Sorry! As Gramateria is a drag and drop builder,<br> you can't use it on mobile or in a small screens size.</p>
        <div  v-if="!isMobile" class="layout">
            <Layout :style="{minHeight: '100vh'}">
                <Sider ref="side1" :class="{hide:!isLoggedIn}" collapsible :collapsed-width="78" :style="{background:'#fff'}" v-model="isCollapsed">
                    <Menu active-name="1" theme="light" width="auto" :class="menuitemClasses">
                        <MenuItem v-if="isLoggedIn" name="1">
                            <router-link to="/"><Icon type="ios-list-outline"></Icon>
                                <span>Project</span></router-link>
                        </MenuItem>
                        <MenuItem v-if="isLoggedIn" name="2">
                            <router-link to="/feedback"><Icon type="ios-email-outline"></Icon>
                                <span>Feedback</span></router-link>
                        </MenuItem>
                        <hr>
                        <MenuItem v-if="isLoggedIn" class="profile" name="3">
                            <router-link to="/profile"><Icon type="ios-person-outline"></Icon>
                                <span>{{userData.userName}}</span></router-link>
                        </MenuItem>
                    </Menu>
                </Sider>
                <Layout>
                    <Spin v-if="isLoading" fix>
                        <Icon type="load-c" size=22 class="spin-icon-load"></Icon>
                        <div>Loading</div>
                    </Spin>
                    <Content :style="{padding:'10px'}" v-else>
                        <router-view :isLog="isLoggedIn" :uname="userData"></router-view>
                    </Content>
                </Layout>
            </Layout>
        </div>
    </div>
</template>

<script>
    import {auth,user_db} from './firebase';
    import Head from './components/Head.vue';
    import Foot from './components/Foot.vue'
    export default {
        name: 'app',
        components: {
            Foot,Head
        },
        data() {
            return {
                isMobile: false,
                isCollapsed: false,
                isLoggedIn: false,
                isLoading: true,
                userData: {
                    userName: '',
                    profileImg: ''
                }
            };
        },
        mounted() {
            if (/Mobi|Android/i.test(navigator.userAgent)) {
                this.isMobile = true;
            }
            this.ifNoUserData();
            this.fetchUser();
        },
        methods: {
            fetchUser() {
                let self = this;
                if (auth.currentUser) {
                    self.isLoggedIn = true;
                    let curr_user_db = user_db.child(auth.currentUser.uid);
                    curr_user_db.on("value", function (e) {
                        self.isLoading = false;
                        if (null != e.val()) {
                            self.userData.userName = e.val().name;
                            self.userData.profileImg = e.val().profileImg;
                        }
                    })
                }else{
                    self.isLoading = false;
                }
            },
            logout(e) {
                e.preventDefault();
                auth.signOut()
                    .then(() => {
                        this.$router.go({path: this.$router.path});
                    });
            }
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        }
    }
</script>


<style>
    p.empty,.section-title{
        margin:14px;
    }
    .ivu-menu,.ivu-layout-sider-trigger{
        z-index:10 !important;
    }
    .hide{
        display:none;
    }
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .menu-item span{
        padding-left: 10px;
        display: inline-block;
        overflow: hidden;
        width: 90px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
    .profile span{
        opacity:1;
        height:auto;
        transition:all .2s ease;
    }
    .collapsed-menu .profile span{
        opacity:0;
        height:0;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .ivu-modal-footer{
        display:none !important;
    }
    .ivu-layout-sider-trigger{
        background:#fff !important;
        color:#57a3f3 !important;
    }

    /* common css */
    .head .uName p{
        margin-top:6px;
    }
    .head{
        clear:both;
        padding:10px;
        width:100%;
        margin-bottom:10px;
    }
    .head div{
        display:inline-block;
    }
    .head .uName{
        margin-right:10px;
    }
    .fl-right{
        float:right;
    }
    .center{
        text-align:center;
    }
    hr{
        color:#eee;
        border-top:none;
    }
    .projects a{
        color:#495060;
    }
    .gravatar{
        width:28px;
        height:28px;
        border:1px solid #ddd;
        border-radius: 100%;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
    }
    .ivu-form-item-content input,textarea.ivu-input{
        max-width:500px !important;
    }
    #blockForm .ivu-modal, #projectForm .ivu-modal{
        max-width:80% !important;
        width:80% !important;
    }
    #blockForm form.ivu-form{
        max-width:800px;
        margin:0 auto;
    }
    .spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    h4.m20{
        margin:10px 0 10px;
    }
    .mobi-msg{
        width:80%;
        margin:100px auto;
        font-size:24px;
        border:1px solid #eee;
        padding:20px;
        text-align:center;
        color:#004066;
    }
    @keyframes ani-demo-spin {
        from {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(180deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>
