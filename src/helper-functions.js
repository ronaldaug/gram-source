import Vue from 'vue'
import {auth, user_db} from "./firebase";
import {MD5} from "./md5";
require('grapesjs-plugin-export')
Vue.mixin({
    methods: {
        date_format(date) {
            var d = date.getDate();
            var m = date.getMonth() + 1;
            var y = date.getFullYear();
            return '' + y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
        },
        ifNoUserData() {
            auth.onAuthStateChanged(function (user) {
                if (!user) {
                    return false;
                }
                let userID = (user.uid);
                let curr_user_db = user_db.child(userID);
                curr_user_db.once("value", function (e) {
                    let md5Email = MD5(auth.currentUser.email);
                    const uData = {
                        profileImg: 'https://www.gravatar.com/avatar/'+md5Email+'?s100'
                    }
                    curr_user_db.update(uData);
                    if (null != e.val()) {
                        if (e.val().name) {
                            return false;
                        }
                    }else{
                        const nameNew = {
                            'name': user.email.replace(/@.*/, ""),
                        }
                        curr_user_db.update(nameNew);
                    }
                })

            })
        },
        getData(dbname) {
            if (dbname !== 'user_db') {
                auth.onAuthStateChanged(function (user) {
                    if (!user) {
                        return false;
                    }
                });
            } else {
                auth.onAuthStateChanged(function (user) {
                    if (!user) {
                        return false;
                    }
                    return user_db.child(user.uid);
                })
            }
        }
    }
})