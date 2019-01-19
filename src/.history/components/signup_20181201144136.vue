<template>
    <div>
    <Button type="primary" size="large" @click="signUpGoogle" icon="social-googleplus" long> Google</Button>
    <h4 class="center m20">Or</h4>
    <Form ref="signUpForm" :model="signUpForm" :rules="signUpRules" >
        <FormItem prop="email">
            <Input type="email" v-model="signUpForm.email" placeholder="Email">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>

        <FormItem prop="password">
            <Input type="password" v-model="signUpForm.password" placeholder="Password">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>

        <FormItem>
            <Button type="primary" @click="handleSubmit('signUpForm')" long>Sign Up</Button>
        </FormItem>
    </Form>
    <p class="center"><a href="#">By signing up, you agree to our Terms & Privacy Policy.</a></p>
    </div>
</template>
<script>
    import { auth,fb } from './../firebase';
    export default {
        data () {
            return {
                signUpForm: {
                    email: '',
                    password: ''
                },
                signUpRules: {
                    email: [
                        { required: true, message: 'Please fill in the email', trigger: 'blur' }
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
                        auth.createUserWithEmailAndPassword(self.signUpForm.email, self.signUpForm.password)
                            .then(function(){
                                self.$Message.success('😊 Account Created!');
                                self.$router.push('/');
                            })
                            .catch(function(error) {
                                // Handle Errors here.
                                var errorCode = error.code;
                                var errorMessage = error.message;
                                if (errorCode == 'auth/weak-password') {
                                    self.$Message.error('😓 The password is too weak.');
                                } else {
                                    self.$Message.error('😓 ' + errorMessage);
                                    self.$Message.error('😓 Account Created Error!');
                                }
                            });
                    } else {
                        this.$Message.error('😓 Form validated Fail!');
                    }
                })
            },
            signUpGoogle(){
                var provider = new fb.auth.GoogleAuthProvider();
                provider.addScope('https://www.googleapis.com/auth/plus.login');
                let self = this;
                auth.signInWithPopup(provider).then(function () {
                    self.$router.push('/');
                }).catch(function (error) {
                    self.$Message.error('😓 '+error.message);
                });
            }
        }
    }
</script>

