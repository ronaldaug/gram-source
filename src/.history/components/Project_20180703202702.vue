<template>
    <div id="project-page">
        <div class="head">
            <div>
                <add_new></add_new>
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
        <Row>
            <Col span="24">
                <h3 class="section-title">Projects</h3>
            </Col>
        </Row>
        <div v-if="!is_empty" class="projects">
            <Row>
                <Col span="8" v-for="project in projects" track-by="$index">
                    <div class="project" v-bind:id="project.id">
                        <Card :bordered="false">
                            <Dropdown trigger="click" class="fl-right">
                                <a href="javascript:void(0)">
                                    <Icon type="more"></Icon>
                                </a>
                                <DropdownMenu slot="list">
                                    <DropdownItem>
                                        <edit_project :key_id="project.id"></edit_project>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <a href="#" @click="deleteProject(project.id)">
                                            <Icon type="android-delete"></Icon>
                                            Delete
                                        </a>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <a href="#" @click="loadProjectToBuilder(project.id)" class="project_url"><h4>{{
                                project.project_title }}</h4>
                                <p>{{ project.project_desc }}</p>
                                <hr>
                                <p class="fl-right">
                                    <small>
                                        <Icon type="clock"></Icon>
                                        {{ project.date }}
                                    </small>
                                </p>
                                <br><br>
                            </a>
                        </Card>
                    </div>
                </Col>
            </Row>
        </div>
        <p class="empty" v-else>You have no project yet.</p>
    </div>
</template>

<script>
    import add_new from './addNew.vue';
    import edit_project from './editProject.vue';
    import {auth, user_db} from './../firebase';

    export default {
        name: "Project",
        components: {
            add_new,edit_project
        },
        props:{
            uname:''
        },
        data() {
            return {
                is_empty: false,
                projects: []
            }
        },
        mounted: function () {
            let self = this;
            auth.onAuthStateChanged(function (user) {
                if (!user) {
                    return false;
                }
                let project_db = user_db.child(auth.currentUser.uid).child('projects');
                project_db.on("value", function (e) {
                    self.projects = [];
                    if (null != e.val()) {
                        e.forEach((pro) => {
                            const data = {
                                'id': pro.key,
                                'project_title': pro.val().project_title,
                                'project_desc': pro.val().project_description,
                                'date': self.date_format(new Date(pro.val().date)),
                            }
                            self.projects.push(data);
                        })
                        self.is_empty = false;
                    }else{
                        self.is_empty = true;
                    }
                })
            })
        },
        methods: {
            loadProjectToBuilder(id) {
                localStorage.setItem('project_id', id);
                let project_db = user_db.child(auth.currentUser.uid).child('projects').child(id);
                project_db.on("value", function (e) {
                    if (null != e.val()) {
                        localStorage.setItem('gjs-assets', e.val().gram_assets);
                        localStorage.setItem('gjs-components', e.val().gram_components);
                        localStorage.setItem('gjs-html', e.val().gram_html);
                        localStorage.setItem('gjs-css', e.val().gram_css);
                        localStorage.setItem('seo_title', e.val().seo_title);
                        localStorage.setItem('seo_author', e.val().seo_author);
                        localStorage.setItem('seo_desc', e.val().seo_desc);
                        localStorage.setItem('seo_keywords', e.val().seo_keywords);
                    }
                })
                this.$router.push('/builder')
            },
            deleteProject(id) {
                auth.onAuthStateChanged(function (user) {
                    if (!user) {
                        return false;
                    }
                    let project_db = user_db.child(auth.currentUser.uid).child('projects');
                    project_db.child(id).remove();
                })
            },
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

<style scoped>
    .project {
        padding: 10px;
    }

    .project p {
        margin: 10px 0;
    }
</style>