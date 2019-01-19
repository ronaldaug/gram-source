import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/components/NotFound'
import Project from '@/components/Project'
import Login from '@/components/Login'
import Feedback from '@/components/Feedback'
import EditProfile from '@/components/EditProfile'
import Builder from '@/components/Builder'
import { auth } from './../firebase';
Vue.use(Router)

let router = new Router({
    routes: [
        {
            path: '*',
            name: 'NotFound',
            component: NotFound,
        },
        {
            path: '/',
            name: 'Project',
            component: Project,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: {
                requiresGuest: true
            }
        },
        {
            path: '/profile',
            name: 'Profile',
            component: EditProfile,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/builder',
            name: 'Builder',
            component: Builder,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/feedback',
            name: 'Feedback',
            component: Feedback,
            meta: {
                requiresAuth: true
            }
        }
    ]
})

// Nav Guard
router.beforeEach((to, from, next) => {
    // Check for requiresAuth guard
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // Check if NO logged user
        if (!auth.currentUser) {
            // Go to login
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            });
        } else {
            // Proceed to route
            next();
        }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
        // Check if NO logged user
        if (auth.currentUser) {
            // Go to login
            next({
                path: '/',
                query: {
                    redirect: to.fullPath
                }
            });
        } else {
            // Proceed to route
            next();
        }
    } else {
        // Proceed to route
        next();
    }
});

export default router
