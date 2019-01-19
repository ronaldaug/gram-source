<template>
    <div class="add-new">
        <Button type="primary" @click="openAddProModal()">
            <Icon type="plus-round"></Icon>
            Project
        </Button>
        <Modal id="projectForm" @on-cancel="closeModal('addProjectForm')"
               v-model="projectModal"
               title="Add new project">
            <Form ref="addProjectForm" :model="addProjectForm" :rules="rules" :label-width="80">
                <Tabs v-model="tabName">
                    <TabPane label="1 - Templates" name="templates">
                        <div class="templates">
                            <Row>
                                <Col span="8">
                                    <div class="template" v-bind:class="{select:isSelectTemplate == 'newblank'}"
                                         @click="getTemplate('newblank')">
                                        <h3>Blank</h3>
                                        <div class="blank"></div>
                                    </div>
                                </Col>
                                <Col span="8">
                                    <div class="template" :class="{select:isSelectTemplate == 'defu'}"
                                         @click="getTemplate('defu')">
                                        <h3>Default</h3>
                                        <img class="flud-img" src="../assets/templates/default.jpg" alt="">
                                    </div>
                                </Col>
                                <Col span="8">
                                    <div class="template" :class="{select:isSelectTemplate == 'lightblue'}"
                                         @click="getTemplate('lightblue')">
                                        <h3>Light Blue</h3>
                                        <img class="flud-img" src="../assets/templates/lightblue.jpg" alt="">
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                 <Col span="8">
                                    <div class="template" :class="{select:isSelectTemplate == 'modern'}"
                                         @click="getTemplate('modern')">
                                        <h3>Modern</h3>
                                        <img class="flud-img" src="../assets/templates/modern.jpg" alt="">
                                    </div>
                                </Col>
                                <Col  span="8"></Col>
                            </Row>
                        </div>
                    </TabPane>
                    <TabPane label="2 - SEO" name="seo">
                        <h4>SEO for your template.</h4>
                        <br>
                        <FormItem label="Web Title" prop="seoTitle">
                            <Input v-model="addProjectForm.seoTitle" placeholder="Enter web page title.."></Input>
                        </FormItem>
                        <FormItem label="Author" prop="seoAuthor">
                            <Input v-model="addProjectForm.seoAuthor" placeholder="Enter author name.."></Input>
                        </FormItem>
                        <FormItem label="Keywords" prop="seoKeywords">
                            <Input v-model="addProjectForm.seoKeywords"
                                   placeholder="Enter keywords .. (e.g tech,html5,css)"></Input>
                        </FormItem>
                        <FormItem label="Web Description" prop="seoDesc">
                            <Input v-model="addProjectForm.seoDesc" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                                   placeholder="Enter web page description.."></Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" @click="continueTab">Continue</Button>
                        </FormItem>
                    </TabPane>
                    <TabPane label="3 - Project" name="projectForm">
                        <h4>Name your project.</h4>
                        <br>
                        <FormItem label="Title" prop="title">
                            <Input v-model="addProjectForm.title" placeholder="Enter project title.."></Input>
                        </FormItem>
                        <FormItem label="Description" prop="desc">
                            <Input v-model="addProjectForm.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                                   placeholder="Project Description.."></Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" @click="handleSubmit('addProjectForm')">Finished</Button>
                            <Button type="ghost" @click="handleReset('addProjectForm')" style="margin-left: 8px">Reset
                            </Button>
                        </FormItem>
                    </TabPane>
                </Tabs>
            </Form>
        </Modal>
    </div>
</template>
<script>
    import {template_db, user_db, auth} from './../firebase';

    export default {
        name: 'add_new',
        data() {
            return {
                tabName: '',
                isSelectTemplate: '',
                projectModal: false,
                addProjectForm: {
                    title: '',
                    desc: '',
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
                        {required: true, message: 'Project description cannot be empty', trigger: 'blur'},
                        {type: 'string', min: 5, message: 'Please add no less than 5 words', trigger: 'blur'},
                        {max: 225, message: 'Please add no more than 255 words', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            openAddProModal() {
                this.projectModal = true;
            },
            handleSubmit(name) {
                if (this.isSelectTemplate == '') {
                    this.$Message.error("You haven't selected any template yet.");
                    return false;
                }
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        let pData = {
                            date: Date.now(),
                            project_title: this.addProjectForm.title,
                            project_description: this.addProjectForm.desc,
                            seo_title: this.addProjectForm.seoTitle,
                            seo_author: this.addProjectForm.seoAuthor,
                            seo_keywords: this.addProjectForm.seoKeywords,
                            seo_desc: this.addProjectForm.seoDesc,
                            gram_assets: this.addProjectForm.gram_assets,
                            gram_components: this.addProjectForm.gram_components,
                            gram_html: this.addProjectForm.gram_html,
                            gram_css: this.addProjectForm.gram_css,
                            gram_styles: this.addProjectForm.gram_styles,
                        }
                        let project_db = user_db.child(auth.currentUser.uid).child('projects');
                        project_db.push(pData);
                        this.$Message.success('😊 Project Added!');
                        this.isSelectTemplate = '';
                        this.closeModal('addProjectForm');
                        this.projectModal = false;
                    } else {
                        this.$Message.error('😓 Validation fail, please check your input!');
                    }
                })
            },
            getTemplate(name) {
                this.isSelectTemplate = name;
                let self = this;
                if (name == 'newblank') {
                    self.$Message.success('😊 Template selected!');
                    setTimeout(function () {
                        self.tabName = 'seo';
                    }, 1000)
                    return false;
                }
                let tem_name = template_db.child(name);
                tem_name.on("value", function (e) {
                    if (null != e.val()) {
                        self.addProjectForm.gram_assets = e.val().gram_assets;
                        self.addProjectForm.gram_components = e.val().gram_components;
                        self.addProjectForm.gram_html = e.val().gram_html;
                        self.addProjectForm.gram_css = e.val().gram_css;
                        self.addProjectForm.gram_styles = e.val().gram_styles;
                    }
                    self.$Message.success('😊 Template selected!');
                    setTimeout(function () {
                        self.tabName = 'seo';
                    }, 1000)
                })
            },
            closeModal(name) {
                this.isSelectTemplate = '';
                this.$refs[name].resetFields();
                document.querySelector('.ivu-input').value = '';
            },
            continueTab() {
                this.tabName = 'projectForm';
            },
            handleReset(name) {
                this.isSelectTemplate = '';
                this.$refs[name].resetFields();
            }
        }
    }
</script>
<style scoped>
    .flud-img {
        width: 100%;
        height: auto;
    }

    .templates {
        max-width: 800px;
        margin: 20px auto;
        text-align: center;
    }
    .template {
        margin: 10px;
        transition: all ease 0.3s;
        -moz-transition: all ease 0.3s;
        -webkit-transition: all ease 0.3s;
    }

    .select {
        border: 2px solid #7398c9;
    }

    .blank {
        width: 100%;
        height: 195px;
        border: 1px solid #eee;
    }
</style>