<template>
    <div class="feedback">
        <Head :currentUser="{uname}"></Head>
        <Row>
            <Col span="24">
                <h3 class="section-title">Feedback form</h3>
            </Col>
        </Row>
        <Form ref="sendFeedbackForm" :model="sendFeedbackForm" :rules="rules" :label-width="80">
            <FormItem label="Subject" prop="subject">
                <Input v-model="sendFeedbackForm.subject" placeholder="Subject.."></Input>
            </FormItem>
            <FormItem label="Feedback" prop="feedback">
                <Input v-model="sendFeedbackForm.feedback" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                       placeholder="Project Description.."></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('sendFeedbackForm')">Send</Button>
                <Button type="ghost" @click="handleReset('sendFeedbackForm')" style="margin-left: 8px">Reset
                </Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    import {feedback_db,auth} from './../firebase'
    import Head from './Head.vue'
    export default {
        name: "Feedback",
        components:{
            Head
        },
        props:{
            uname:''
        },
        data(){
            return{
                sendFeedbackForm:{
                    subject:'',
                    feedback:''
                },
                rules: {
                    subject: [
                        {required: true, message: 'The subject cannot be empty', trigger: 'blur'}
                    ],
                    feedback: [
                        {required: true, message: 'Feedback cannot be empty', trigger: 'blur'},
                        {type: 'string', min: 5, message: 'Please add no less than 5 words', trigger: 'blur'},
                        {max: 400, message: 'Please add no more than 400 words', trigger: 'blur'}
                    ]
                }
            }
        },
        methods:{
            handleSubmit(name) {
                let self = this;
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        auth.onAuthStateChanged(function (user) {
                            if (!user) {
                                return false;
                            }
                            const fData = {
                                "Email" : auth.currentUser.email,
                                "Title" : self.sendFeedbackForm.subject,
                                "Feedback" : self.sendFeedbackForm.feedback
                            }
                            feedback_db.push(fData);
                          })
                        self.$Message.success('🙂 Feedback sent, thanks for your valued feedback.');
                        setTimeout(function(){
                            self.$refs[name].resetFields();
                        },2000)
                        }else{
                        self.$Message.error('😓 Sending fail, please check your input!');
                      }
                   })
                },
                handleReset(name) {
                   this.$refs[name].resetFields();
                }
            }
        }
</script>

<style scoped>
    .feedback{
      margin:10px;
    }
</style>