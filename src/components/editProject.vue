<template>
    <div>
        <a @click="openProModal()"><Icon type="edit"></Icon> Edit</a>
        <Modal  width="80%"
                v-model="editProModal"
                title="Edit project">

            <Form ref="editProjectForm" :model="editProjectForm" :rules="rules" :label-width="80">
                <Tabs v-model="tabName">
                    <TabPane label="1 - SEO" name="seo">
                        <h4>SEO for your template.</h4>
                        <br>
                        <FormItem label="Web Title" prop="seoTitle">
                            <Input v-model="editProjectForm.seoTitle" placeholder="Enter web page title.."></Input>
                        </FormItem>
                        <FormItem label="Author" prop="seoAuthor">
                            <Input v-model="editProjectForm.seoAuthor" placeholder="Enter author name.."></Input>
                        </FormItem>
                        <FormItem label="Keywords" prop="seoKeywords">
                            <Input v-model="editProjectForm.seoKeywords" placeholder="Enter keywords .. (e.g tech,html5,css)"></Input>
                        </FormItem>
                        <FormItem label="Web Description" prop="seoDesc">
                            <Input v-model="editProjectForm.seoDesc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter web page description.."></Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" @click="continueTab">Continue</Button>
                        </FormItem>
                    </TabPane>
                    <TabPane label="2 - Project" name="projectForm">
                        <h4>Name your project.</h4>
                        <br>
                        <FormItem label="Title" prop="title">
                            <Input v-model="editProjectForm.title" placeholder="Enter project title.."></Input>
                        </FormItem>
                        <FormItem label="Description" prop="desc">
                            <Input v-model="editProjectForm.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Project Description.."></Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary"  @click="handleSubmit('editProjectForm')">Update</Button>
                            <Button type="ghost" @click="handleReset('editProjectForm')"  style="margin-left: 8px">Reset</Button>
                        </FormItem>
                    </TabPane>
                </Tabs>
            </Form>
        </Modal>
    </div>
</template>
<script>
    import {auth,user_db} from "../firebase";
    export default {
        name: 'edit_project',
        props:{
            key_id:''
        },
        data () {
            return {
                tabName:'',
                editProModal: false,
                editProjectForm:{
                    title: '',
                    desc:'',
                    seoTitle: '',
                    seoAuthor: '',
                    seoKeywords: '',
                    seoDesc: '',
                    gram_assets: '',
                    gram_components: '',
                    gram_html: '',
                    gram_css: '',
                    gram_styles: '',
                },
                rules: {
                    title: [
                        {required: true, message: 'The project title cannot be empty', trigger: 'blur'}
                    ],
                    desc: [
                        { required: true, message: 'Project description cannot be empty', trigger: 'blur' },
                        { type: 'string', min: 5, message: 'Please add no less than 5 words', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        let pData = {
                            date: Date.now(),
                            project_title: this.editProjectForm.title,
                            project_description: this.editProjectForm.desc,
                            seo_title:this.editProjectForm.seoTitle,
                            seo_author:this.editProjectForm.seoAuthor,
                            seo_keywords:this.editProjectForm.seoKeywords,
                            seo_desc:this.editProjectForm.seoDesc,
                            gram_assets: this.editProjectForm.gram_assets,
                            gram_components: this.editProjectForm.gram_components,
                            gram_html: this.editProjectForm.gram_html,
                            gram_css: this.editProjectForm.gram_css,
                            gram_styles: this.editProjectForm.gram_styles,
                        }
                        let project_db = user_db.child(auth.currentUser.uid).child('projects').child(this.key_id);
                        project_db.update(pData);
                        this.$Message.success('😊 Project updated!');
                        this.editProModal = false;
                    } else {
                        this.$Message.error('😓 Validation fail, please check your input!');
                    }
                })
            },
            openProModal(){
                this.tabName = 'seo';
                let self = this;
                let project_db = user_db.child(auth.currentUser.uid).child('projects');
                let pro_db = project_db.child(self.key_id);
                pro_db.once('value', function(e){
                    if (null != e.val()) {
                        self.editProjectForm.title = e.val().project_title;
                        self.editProjectForm.desc = e.val().project_description;
                        self.editProjectForm.seoTitle = e.val().seo_title;
                        self.editProjectForm.seoAuthor = e.val().seo_author;
                        self.editProjectForm.seoKeywords = e.val().seo_keywords;
                        self.editProjectForm.seoDesc =  e.val().seo_desc;
                        self.editProjectForm.gram_assets = e.val().gram_assets;
                        self.editProjectForm.gram_components = e.val().gram_components;
                        self.editProjectForm.gram_html = e.val().gram_html;
                        self.editProjectForm.gram_css = e.val().gram_css;
                        self.editProjectForm.gram_styles = e.val().gram_styles;
                    }
                })
                self.editProModal = true;
            },
            continueTab(){
                this.tabName = 'projectForm';
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>