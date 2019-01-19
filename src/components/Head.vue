<template>
    <div class="head">
        <Dropdown trigger="click" class="fl-right">
            <a href="javascript:void(0)">
                <div class="uImg fl-right">
                    <img class="gravatar" :src="currentUser.uname.profileImg">
                </div>
                <div class="uName fl-right"><p>Welcome <strong>{{currentUser.uname.userName}}</strong>!</p></div>
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

</template>

<script>
    import {auth} from './../firebase';
    export default {
        name: 'Head',
        props:{
            currentUser:'',
        },
        data(){
            return{
                userName:'',
                showHead: false,
            }
        },
        methods: {
            logout(e) {
                e.preventDefault();
                auth.signOut()
                    .then(() => {
                        this.$router.go({ path: this.$router.path });
                    });
            }
        }
    }
</script>
