<template>
    <div class="save-option">
        <Dropdown trigger="click">
            <a href="javascript:void(0)">
                <Button type="primary">
                <Icon type="archive"></Icon>
                    Save
                </Button>
            </a>
            <DropdownMenu slot="list">
                <DropdownItem>
                    <a href="#" @click="saveThis()">
                        <Icon type="archive"></Icon>
                        save this current project
                    </a>
                </DropdownItem>
                <DropdownItem>
                    <a href="#" @click="openSaveModal()">
                        <Icon type="archive"></Icon>
                        save as a new project
                    </a>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
        <Modal width="80%"
               v-model="saveOptionForm"
               title="Save as a new project">

            <Form ref="saveOptionFrom" :model="saveOptionFrom" :rules="rules" :label-width="80">
                <Tabs v-model="tabName">
                    <TabPane label="1 - SEO" name="seo">
                        <h4>SEO for your new project.</h4>
                        <br>
                        <FormItem label="Web Title" prop="seoTitle">
                            <Input v-model="saveOptionFrom.seoTitle" placeholder="Enter web page title.." />
                        </FormItem>
                        <FormItem label="Author" prop="seoAuthor">
                            <Input v-model="saveOptionFrom.seoAuthor" placeholder="Enter author name.." />
                        </FormItem>
                        <FormItem label="Keywords" prop="seoKeywords">
                            <Input v-model="saveOptionFrom.seoKeywords"
                                   placeholder="Enter keywords .. (e.g tech,html5,css)" />
                        </FormItem>
                        <FormItem label="Web Description" prop="seoDesc">
                            <Input v-model="saveOptionFrom.seoDesc" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                                   placeholder="Enter web page description.." />
                        </FormItem>
                        <FormItem>
                            <Button type="primary" @click="continueTab">Continue</Button>
                        </FormItem>
                    </TabPane>
                    <TabPane label="2 - Project" name="projectForm">
                        <h4>Name your new project.</h4>
                        <br>
                        <FormItem label="Title" prop="title">
                            <Input v-model="saveOptionFrom.title" placeholder="Enter project title.." />
                        </FormItem>
                        <FormItem label="Description" prop="desc">
                            <Input v-model="saveOptionFrom.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                                   placeholder="Project Description.." />
                        </FormItem>
                        <FormItem>
                            <Button type="primary" @click="handleSubmit('saveOptionFrom')">Save</Button>
                            <Button type="ghost" @click="handleReset('saveOptionFrom')" style="margin-left: 8px">Reset
                            </Button>
                        </FormItem>
                    </TabPane>
                </Tabs>
            </Form>
        </Modal>
    </div>
</template>
<script>
    import {auth, user_db} from "../firebase";
    export default {
        name: 'save_option',
        props: {
            key_id: ''
        },
        data() {
            return {
                tabName: '',
                saveOptionForm: false,
                saveOptionFrom: {
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
                        {type: 'string', min: 5, message: 'Please add no less than 5 words', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                let self = this;
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        let pData = {
                            date: Date.now(),
                            project_title: self.saveOptionFrom.title,
                            project_description: self.saveOptionFrom.desc,
                            seo_title: self.saveOptionFrom.seoTitle,
                            seo_author: self.saveOptionFrom.seoAuthor,
                            seo_keywords: self.saveOptionFrom.seoKeywords,
                            seo_desc: self.saveOptionFrom.seoDesc,
                            gram_assets: self.saveOptionFrom.gram_assets,
                            gram_components: self.saveOptionFrom.gram_components,
                            gram_html: self.saveOptionFrom.gram_html,
                            gram_css: self.saveOptionFrom.gram_css,
                            gram_styles: self.saveOptionFrom.gram_styles,
                        }
                        let project_db = user_db.child(auth.currentUser.uid).child('projects');
                        project_db.push(pData);
                        self.$Message.success('😊 New project has been added!');
                        self.saveOptionForm = false;
                    } else {
                        self.$Message.error('😓 Validation fail, please check your input!');
                    }
                })
            },
            openSaveModal() {
                this.tabName = 'seo';
                let self = this;
                let project_db = user_db.child(auth.currentUser.uid).child('projects');
                let pro_db = project_db.child(self.key_id.project_id);
                pro_db.once('value', function (e) {
                    if (null != e.val()) {
                        self.saveOptionFrom.title = e.val().project_title;
                        self.saveOptionFrom.desc = e.val().project_description;
                        self.saveOptionFrom.seoTitle = e.val().seo_title;
                        self.saveOptionFrom.seoAuthor = e.val().seo_author;
                        self.saveOptionFrom.seoKeywords = e.val().seo_keywords;
                        self.saveOptionFrom.seoDesc = e.val().seo_desc;
                        self.saveOptionFrom.gram_assets = e.val().gram_assets;
                        self.saveOptionFrom.gram_components = e.val().gram_components;
                        self.saveOptionFrom.gram_html = e.val().gram_html;
                        self.saveOptionFrom.gram_css = e.val().gram_css;
                        self.saveOptionFrom.gram_styles = e.val().gram_styles;
                    }
                })
                this.saveOptionForm = true;
            },
            saveThis(){
                let self = this;
                auth.onAuthStateChanged(function (user) {
                    if (!user) {
                        return false;
                    }
                    let curr_user_db = user_db.child(user.uid).child('projects').child(self.key_id.project_id);
                    const pData = {
                        'gram_assets': localStorage.getItem('gjs-assets'),
                        'gram_components': localStorage.getItem('gjs-components'),
                        'gram_html': localStorage.getItem('gjs-html'),
                        'gram_css': localStorage.getItem('gjs-css'),
                        'gram_styles': localStorage.getItem('gjs-styles')
                    }
                    curr_user_db.update(pData);
                    self.$Message.success('😊 Project has been saved!');
                })
            },
            continueTab() {
                this.tabName = 'projectForm';
            },
            handleReset(name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>
<style scoped>
    .ivu-dropdown-item a{
        color:#444;
    }
    .save-option{
        margin-right:40px;
    }
</style>