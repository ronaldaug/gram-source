<template>
    <div id="edit-profile">
        <Head :currentUser="{uname}"></Head>
        <Row>
            <Col span="24">
                <h3 class="section-title">Edit Profile</h3>
            </Col>
        </Row>
        <Form id="editForm" ref="editProfileForm" :model="editProfileForm" :rules="rules">
        <FormItem label="Name" prop="name">
            <Input v-model="uname.userName" placeholder="Name"></Input>
        </FormItem>
        <FormItem>
            <p>You can change your profile image at <a target="_blank" href="https://en.gravatar.com/">www.gravatar.com</a>
                <br>
                <small>Make sure your email is the same with the one on gravatar.</small>
            </p>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('editProfileForm')">Updated</Button>
        </FormItem>
    </Form>
    </div>
</template>

<script>
    import {auth, user_db} from './../firebase';
    import Head from './Head.vue';

    export default {
        name: "EditProfile",
        components:{
            Head
        },
        props:{
            uname:''
        },
        data() {
            return {
                editProfileForm: {
                    name: '',
                },
                rules: {
                    name: [
                        {required: true, message: 'Name cannot be empty', trigger: 'blur'},
                        {max: 30, message: 'Name cannot be longer than 30 words', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                let self = this;
                self.editProfileForm.name = self.uname.userName;
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        auth.onAuthStateChanged(function (user) {
                            if (!user) {
                                return false;
                            }
                            const uData = {
                                'name': self.editProfileForm.name
                            }
                            let curr_user_db = user_db.child(user.uid);
                            curr_user_db.update(uData);
                            self.$Message.success('😊 Profile updated!');
                        })
                    }
                })
            }
        }
    }
</script>

<style scoped>
    #editForm{
        margin:10px;
        max-width:600px;
        background:#fff;
        padding:20px;
    }
</style>