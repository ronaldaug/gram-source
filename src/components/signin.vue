<template>
    <div>
    <Button type="primary" size="large" @click="signInGoogle" icon="social-googleplus" long> Google</Button>
    <h4 class="center m20">Or</h4>
    <Form ref="signInForm" :model="signInForm" :rules="signInRules">
        <FormItem prop="email">
            <Input v-model="signInForm.email" placeholder="Email">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>

        <FormItem prop="password">
            <Input type="password" v-model="signInForm.password" placeholder="Password">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>

        <FormItem>
            <Button type="primary" @click="handleSubmit('signInForm')" long>Sign In</Button>
        </FormItem>
    </Form>
    <p class="center"><a href="#">Forget Password?</a></p>
    </div>
</template>
<script>
    import { auth, fb} from './../firebase';
    export default {
        data () {
            return {
                signInForm: {
                    email: '',
                    password: ''
                },
                signInRules: {
                    email: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        let self = this;
                        auth.signInWithEmailAndPassword(self.signInForm.email, self.signInForm.password)
                            .then(function(){
                                self.$Message.success('😊 Sign In Successful!');
                                self.$router.push('/');
                            }).catch(function(error) {
                                // Handle Errors here.
                                var errorCode = error.code;
                                var errorMessage = error.message;
                                if (errorCode === 'auth/wrong-password') {
                                    self.$Message.error('😓 Wrong password.');
                                } else {
                                    self.$Message.error('😓 ' + errorMessage);
                                }
                            });
                    } else {
                        this.$Message.error('😓 Sign In Fail!');
                    }
                })
            },
            signInGoogle(){
                var provider = new fb.auth.GoogleAuthProvider();
                provider.addScope('https://www.googleapis.com/auth/plus.login');
                let self = this;
                auth.signInWithPopup(provider).then(function () {
                    self.$router.push('/');
                }).catch(function () {
                });
            }
        }
    }
</script>
