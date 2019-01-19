import Vue from 'vue'
import grapesjs from 'grapesjs'
require('grapesjs-plugin-export')

Vue.mixin({
    methods: {
        gramateria() {
            var temName =   localStorage.getItem('template_name')||"no";
            var modernStyle = temName === "modern"?`<link href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightslider/1.1.6/css/lightslider.min.css">`:'';
            var modernScript = temName === "modern"?`<script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/lightslider/1.1.6/js/lightslider.min.js"></script>`:'';
            var seoTitle = localStorage.getItem('seo_title')||"Gramateria Web Builder";
            var seoAuthor = localStorage.getItem('seo_author')||"Gramateria";
            var seoDesc = localStorage.getItem('seo_desc')||"Gramateria - materialize design web builder.";
            var seoKey = localStorage.getItem('seo_keywords')||"HTML5,CSS5,Generator,Web,Maker,Builder,Materialize,GrapeJS,Electron";
           
           var modernTemp = {
            styles: ['https://fonts.googleapis.com/css?family=Roboto', 'https://fonts.googleapis.com/icon?family=Material+Icons', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css','https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css','https://cdnjs.cloudflare.com/ajax/libs/lightslider/1.1.6/css/lightslider.min.css'],
            scripts: ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/js/materialize.min.js','https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js','https://cdnjs.cloudflare.com/ajax/libs/lightslider/1.1.6/js/lightslider.min.js'],
            };
            var orgTemp = {
                styles: ['https://fonts.googleapis.com/css?family=Roboto', 'https://fonts.googleapis.com/icon?family=Material+Icons', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'],
                scripts: ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/js/materialize.min.js'],
            };

            var initCodes = temName === "modern"?modernTemp:orgTemp;

            var editor = grapesjs.init({
                allowScripts: 1,
                showOffsets: 1,
                autorender: 0,
                noticeOnUnload: 0,
                container: '#gjs',
                height: '100%',
                fromElement: true,
                clearOnRender: 0,
                plugins: [
                    'gjs-plugin-export'
                ],
                pluginsOpts: {
                    'gjs-plugin-export': {
                        btnLabel: 'Download Zip',
                        preHtml: `<!doctype html>
                        <html>
                        <head>
                        <title>${seoTitle}</title>
                        <link rel="shortcut icon" href="assets/img/favicon.ico" type="image/x-icon">
                        <link rel="icon" href="assets/img/favicon.ico" type="image/x-icon">
                        <!-- Required meta tags -->
                        <meta charset="utf-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                        <meta name="description" content="${seoDesc}">
                        <meta name="keywords" content="${seoKey}">
                        <meta name="author" content="${seoAuthor}">
                        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
                        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
                        <link rel="stylesheet" href="css/style.css">
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
                        ${modernStyle}
                        </head>
                        <body>`,
                        postHtml: `${modernScript}<!-- this page is generateded by Gramateria -->
                        </body>
                        </html>`
                    }
                },
                canvas: initCodes,
                commands: {
                    defaults: [
                        {
                            id: 'undo',
                            run: function (editor, sender) {
                                sender.set('active', false);
                                editor.UndoManager.undo(true);
                            }
                        }, {
                            id: 'redo',
                            run: function (editor, sender) {
                                sender.set('active', false);
                                editor.UndoManager.redo(true);
                            }
                        }, {
                            id: 'clean-all',
                            run: function (editor, sender) {
                                sender.set('active', false);
                                if (confirm('Are you sure to clean the canvas?')) {
                                    editor.runCommand('core:canvas-clear');
                                }
                            }
                        }],
                },


                assetManager: {
                    upload: 'https://test.page',
                    params: {
                        _token: 'pCYrSwjuiV0t5NVtZpQDY41Gn5lNUwo3it1FIkAj',
                    },
                    assets: [
                        {
                            type: 'image',
                            src: 'https://res.cloudinary.com/ronaldaug/image/upload/v1515419443/background_ckgyqe.jpg',
                            date: '2015-02-01',
                            height: 808,
                            width: 1440
                        },
                        {
                            type: 'image',
                            src: 'https://res.cloudinary.com/ronaldaug/image/upload/v1515419441/background2_gjvaxs.jpg',
                            date: '2015-02-01',
                            height: 800,
                            width: 1600
                        },
                        {
                            type: 'image',
                            src: 'https://res.cloudinary.com/ronaldaug/image/upload/v1515419443/background3_d0ghix.jpg',
                            date: '2015-02-01',
                            height: 743,
                            width: 1440
                        },
                        {
                            type: 'image',
                            src: 'https://res.cloudinary.com/ronaldaug/image/upload/v1515419446/background4_pzh5ou.jpg',
                            date: '2015-02-01',
                            height: 808,
                            width: 1440
                        },
                        {
                            type: 'image',
                            src: 'http://via.placeholder.com/250x350/0174DF/ffffff/',
                            height: 350,
                            width: 250
                        },
                        {
                            type: 'image',
                            src: 'http://via.placeholder.com/250x350/5FB404/ffffff/',
                            height: 350,
                            width: 250
                        },
                        {
                            type: 'image',
                            src: 'http://via.placeholder.com/250x350/BF00FF/ffffff/',
                            height: 350,
                            width: 250
                        },
                        {
                            type: 'image',
                            src: 'http://via.placeholder.com/250x350/B40431/ffffff/',
                            height: 350,
                            width: 250
                        },
                        {
                            type: 'image',
                            src: 'http://via.placeholder.com/250x350/088A68/ffffff/',
                            height: 350,
                            width: 250
                        },
                        {
                            type: 'image',
                            src: 'http://via.placeholder.com/250x350/DF7401/ffffff/',
                            height: 350,
                            width: 250
                        },
                        {
                            type: 'image',
                            src: 'http://via.placeholder.com/250x350/00BFFF/ffffff/',
                            height: 350,
                            width: 250
                        }
                    ]
                },
                blockManager: {
                    blocks: [
                        {
                            id: 'std',
                            label: 'Starter',
                            category: 'Section',
                            content: '<div class="section no-pad-bot" id="banner-gradient">' +
                            '<nav class="bg-none" role="navigation">' +
                            '<div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo white-text">Logo</a>' +
                            '<ul class="right hide-on-med-and-down">' +
                            '<li><a class="white-text" href="#">Navbar Link</a></li>' +
                            '<li><a class="white-text" href="#">Navbar Link 2</a></li>' +
                            '</ul>' +
                            '<ul id="nav-mobile" class="side-nav">' +
                            '<li><a href="#">Navbar Link</a></li>' +
                            '<li><a href="#">Navbar Link 2</a></li>' +
                            '</ul>' +
                            '<a href="#" data-activates="nav-mobile" class="button-collapse white-text"><i class="material-icons">menu</i></a>' +
                            '</div>' +
                            '</nav>' +
                            '<div class="container">' +
                            '<br><br>' +
                            '<h1 class="header center white-text">Starter Template</h1>' +
                            '<div class="row center">' +
                            '<h5 class="header col s12 light white-text">A modern responsive front-end framework based on Material Design</h5>' +
                            '</div>' +
                            '<div class="row center">' +
                            '<a href="#" id="download-button" class="btn-large waves-effect waves-light light-blue">Get Started</a>' +
                            '</div>' +
                            '<br><br>' +
                            '</div>' +
                            '</div>' +
                            `<style>#banner-gradient{background:#7abcff;background:-moz-linear-gradient(45deg,#7abcff 0,#60abf8 44%,#4096ee 100%);background:-webkit-linear-gradient(45deg,#7abcff 0,#60abf8 44%,#4096ee 100%);background:linear-gradient(45deg,#7abcff 0,#60abf8 44%,#4096ee 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#7abcff', endColorstr='#4096ee', GradientType=1)}.bg-none{background:none;}nav .brand-logo,nav ul a{color:#444}</style><script type="text/javascript">
                        $('.button-collapse').sideNav();
                        </script>`,
                            attributes: {
                                class: 'fa fa-credit-card'
                            }
                        },
                        {
                          id:'login',
                          label:'Login',
                          category:'Section',
                          content:`<div class="container">
                            <div class="row">
                            <div class="col m12">
                            <form action="#" id="loginForm" method="POST">
                            <div class="login-box">
                            <h4>
                            Login
                            </h4>
                            <div class="row">
                            <div class="input-field col s12"><label for="username">Username</label>
                    <input type="text" id="username" name="username" class="validate">
                    </div>
                    </div>
                    <div class="row">
                    <div class="input-field col s12">
                    <input id="password" type="password" name="password" class="validate">
                    <label for="password">Password</label>
                    </div>
                    </div>
                    <button class="btn wave-effect">Sign In</button>

                </div>
                </form>
                </div>
                </div>
                </div>
<style>.login-box{max-width:400px;margin:80px auto;}</style>`,
                            attributes:{
                              class:'fa fa-bars'
                            }
                        },
                        {
                            id: 'parallax',
                            label: 'Parallax',
                            category: 'Section',
                            content: '<div class="parallax-container">'
                            + '<div class="parallax">'
                            + '<img src="https://res.cloudinary.com/ronaldaug/image/upload/v1515419443/background_ckgyqe.jpg">'
                            + '</div>'
                            + '</div>'
                            + '<div class="section white">'
                            + '<div class="row container">'
                            + '<h2 class="header">Parallax</h2>'
                            + '<p class="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>'
                            + '</div>'
                            + '</div>'
                            + '<div class="parallax-container">'
                            + '<div class="parallax"><img src="https://res.cloudinary.com/ronaldaug/image/upload/v1515419441/background2_gjvaxs.jpg"></div>'
                            + '</div>' +
                            '<style>.parallax{position:static}@media only screen and (max-width:992px){.parallax-container .section{position:absolute;top:40%}}.parallax-container{min-height:380px;line-height:0;height:auto;color:rgba(255,255,255,.9)}.parallax-container .section{width:100%}</style>'
                            + '<script>$(".parallax").parallax();</script>',
                            attributes: {
                                class: 'fa fa-list-alt'
                            }
                        }
                        ,
                        {
                            id: 'nav',
                            label: 'Navbar 1',
                            category: 'Section',
                            content: '<nav class="light-blue lighten-1" role="navigation">' +
                            '<div class="nav-wrapper container">' +
                            '<a id="logo-container" href="#" class="brand-logo white-text">Logo</a>' +
                            '<ul class="right hide-on-med-and-down">' +
                            '<li><a class="white-text" href="#">Navbar Link</a></li>' +
                            '<li><a class="white-text" href="#">Navbar Link</a></li>' +
                            '</ul>' +
                            '<ul id="nav-mobile" class="side-nav light-blue">' +
                            '<li><a class="white-text" href="#">Navbar Link</a></li>' +
                            '<li><a class="white-text" href="#">Navbar Link</a></li>' +
                            '</ul>' +
                            '<a href="#" data-activates="nav-mobile" class="button-collapse white-text"><i class="material-icons">menu</i></a>' +
                            '</div>' +
                            '</nav>' +
                            `<style>nav .brand-logo,nav ul a{color:#444}</style><script type="text/javascript">
                        $('.button-collapse').sideNav();
                        </script>`,
                            attributes: {
                                class: 'fa fa-minus'
                            }
                        },
                        {
                            id: 'dropdownNav',
                            label: 'Navbar 2',
                            category: 'Section',
                            content: '<!-- Dropdown Structure -->'
                            + '<nav class="light-blue lighten-1" role="navigation">'
                            + '<div class="nav-wrapper container">'
                            + '<a href="#!" class="brand-logo white-text">Logo</a>'
                            + '<ul class="right hide-on-med-and-down">'
                            + '<li><a class="white-text light-blue lighten-1" href="sass.html">Sass</a></li>'
                            + '<li><a class="white-text light-blue lighten-1" href="badges.html">Components</a></li>'
                            + '<!-- Dropdown Trigger -->'
                            + '<li><a class="dropdown-button white-text light-blue lighten-1" href="#!" data-activates="mainmenu-dropdown">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>'
                            + '</ul>'
                            + '<ul id="nav-mobile" class="side-nav light-blue">'
                            + '<li><a class="white-text light-blue lighten-1" href="sass.html">Sass</a></li>'
                            + '<li><a class="white-text light-blue lighten-1" href="badges.html">Components</a></li>'
                            + '<!-- Dropdown Trigger -->'
                            + '<li><a class="dropdown-button white-text light-blue lighten-1" href="#!" data-activates="sidemenu-dropdown">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>'
                            + '</ul>'
                            + '<a href="#" data-activates="nav-mobile" class="button-collapse white-text"><i class="material-icons">menu</i></a>'
                            + '</div>'
                            + '</nav>'
                            + '<ul id="mainmenu-dropdown" class="dropdown-content">'
                            + '<li><a class="white-text light-blue lighten-1" href="#!">one</a></li>'
                            + '<li><a class="white-text light-blue lighten-1" href="#!">two</a></li>'
                            + '<li class="divider"></li>'
                            + '<li><a class="white-text light-blue lighten-1" href="#!">three</a></li>'
                            + '</ul>'
                            + '<ul id="sidemenu-dropdown" class="dropdown-content">'
                            + '<li><a class="white-text light-blue lighten-1" href="#!">one</a></li>'
                            + '<li><a class="white-text light-blue lighten-1" href="#!">two</a></li>'
                            + '<li class="divider"></li>'
                            + '<li><a class="white-text light-blue lighten-1" href="#!">three</a></li>'
                            + '</ul>'
                            + '<script type="text/javascript">$("a.dropdown-button").dropdown();$(".button-collapse").sideNav();</script>',
                            attributes: {
                                class: 'fa fa-toggle-down'
                            }
                        }
                        ,
                        {
                            id: 'footer',
                            label: 'Footer',
                            category: 'Section',
                            content: '<footer class="page-footer light-blue gram-footer">' +
                            '<div class="container">' +
                            '<div class="row">' +
                            '<div class="col l6 s12">' +
                            '<h5 class="white-text">Company Bio</h5>' +
                            '<p class="grey-text text-lighten-4">We are a team of college students working on this project like its our full time job.Any amount would help support and continue development on this project and is greatly appreciated. </p>' +
                            '</div>' +
                            '<div class="col l3 s12">' +
                            '<h5 class="white-text">Settings</h5>' +
                            '<ul class="collection light-blue">' +
                            '<li class="collection-item"><a class="white-text" href="#!">Link 1</a></li>' +
                            '<li class="collection-item"><a class="white-text" href="#!">Link 2</a></li>' +
                            '<li class="collection-item"><a class="white-text" href="#!">Link 3</a></li>' +
                            '<li class="collection-item"><a class="white-text" href="#!">Link 4</a></li>' +
                            '</ul>' +
                            '</div>' +
                            '<div class="col l3 s12">' +
                            '<h5 class="white-text">Connect</h5>' +
                            '<ul class="collection light-blue with-header">' +
                            '<li class="collection-item"><a class="white-text" href="#!">Link 1</a></li>' +
                            '<li class="collection-item"><a class="white-text" href="#!">Link 2</a></li>' +
                            '<li class="collection-item"><a class="white-text" href="#!">Link 3</a></li>' +
                            '<li class="collection-item"><a class="white-text" href="#!">Link 4</a></li>' +
                            '</ul>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '<div class="footer-copyright">' +
                            '<div class="container">' +
                            'Made by <a class="white-text text-lighten-3" href="http://materializecss.com">Materialize</a>' +
                            '</div>' +
                            '</div>' +
                            '</footer><style>footer.gram-footer ul.collection>li.collection-header,footer.gram-footer ul.collection>li.collection-item{background:0 0;border:0}footer.gram-footer ul.collection{border:0}footer.page-footer{margin:0}#contact input#your-email,#contact textarea#your-message{color:#fff}</style>',
                            attributes: {
                                class: 'fa fa-desktop'
                            }
                        },
                        {
                            id: 'b1',
                            label: '1 Block',
                            category: 'Grid',
                            attributes: {
                                class: 'fa fa-reorder'
                            },
                            content: `<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">
                <div class="col m12" data-gjs-draggable=".row" data-gjs-custom-name="col12"></div>
              </div><style>.col:empty{display:table-cell;height:75px}</style>`
                        },
                        {
                            id: 'b2',
                            label: '2 Blocks',
                            category: 'Grid',
                            attributes: {
                                class: 'fa fa-th-large'
                            },
                            content: `<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">
                <div class="col m6" data-gjs-draggable=".row" data-gjs-custom-name="m6"></div>
                <div class="col m6" data-gjs-draggable=".row" data-gjs-custom-name="m6"></div>
              </div><style>.col:empty{display:table-cell;height:75px}</style>`
                        },
                        {
                            id: 'b3',
                            label: '3 Blocks',
                            category: 'Grid',
                            attributes: {
                                class: 'fa fa-th'
                            },
                            content: '<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">'
                            + '<div class="col s6 m4" data-gjs-draggable=".row" data-gjs-custom-name="m4"></div>'
                            + '<div class="col s6 m4" data-gjs-draggable=".row" data-gjs-custom-name="m4"></div>'
                            + '<div class="col s6 m4" data-gjs-draggable=".row" data-gjs-custom-name="m4"></div>'
                            + '</div><style>.col:empty{display:table-cell;height:75px}</style>',
                        },
                        {
                            id: 'b4',
                            label: '4 Blocks',
                            category: 'Grid',
                            attributes: {
                                class: 'fa fa-calendar'
                            },
                            content: '<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">'
                            + '<div class="col s6 m3" data-gjs-draggable=".row" data-gjs-custom-name="m3"></div>'
                            + '<div class="col s6 m3" data-gjs-draggable=".row" data-gjs-custom-name="m3"></div>'
                            + '<div class="col s6 m3" data-gjs-draggable=".row" data-gjs-custom-name="m3"></div>'
                            + '<div class="col s6 m3" data-gjs-draggable=".row" data-gjs-custom-name="m3"></div>'
                            + '</div><style>.col:empty{display:table-cell;height:75px}</style>',
                        },
                        {
                            id: 'b5',
                            label: '4/8 Block',
                            category: 'Grid',
                            attributes: {
                                class: 'fa fa-th-list'
                            },
                            content: '<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">'
                            + '<div class="col m4" data-gjs-draggable=".row" data-gjs-custom-name="m4"></div>'
                            + '<div class="col m8" data-gjs-draggable=".row" data-gjs-custom-name="m8"></div>'
                            + '</div><style>.col:empty{display:table-cell;height:75px}</style>',
                        },
                        {
                            id: 'b6',
                            label: '5/7 Block',
                            category: 'Grid',
                            attributes: {
                                class: 'fa fa-dedent'
                            },
                            content: '<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">'
                            + '<div class="col m5" data-gjs-draggable=".row" data-gjs-custom-name="m5"></div>'
                            + '<div class="col m7" data-gjs-draggable=".row" data-gjs-custom-name="m7"></div>'
                            + '</div><style>.col:empty{display:table-cell;height:75px}</style>',
                        },
                        {
                            id: 'b7',
                            label: '3/9 Block',
                            category: 'Grid',
                            attributes: {
                                class: 'fa fa-list'
                            },
                            content: '<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">'
                            + '<div class="col m3" data-gjs-draggable=".row" data-gjs-custom-name="m3"></div>'
                            + '<div class="col m9" data-gjs-draggable=".row" data-gjs-custom-name="m9"></div>'
                            + '</div><style>.col:empty{display:table-cell;height:75px}</style>',
                        },
                        {
                            id: 'b8',
                            label: 'Center Block',
                            category: 'Grid',
                            attributes: {
                                class: 'fa  fa-minus-square-o'
                            },
                            content: '<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">'
                            + '<div class="center-box" data-gjs-draggable=".row"></div>'
                            + '</div><style>.center-box {margin: 0 auto;max-width: 500px;}.center-box:empty {height: 75px;}</style>',
                        },
                        {
                            id: '3ba',
                            label: 'Badges',
                            category: 'Section',
                            content: '<div class="section"><div class="container">'
                            + '<div class="row">'
                            + '<div class="col s12 m4">'
                            + '<div class="icon-block">'
                            + '<h2 class="center light-blue-text"><i class="material-icons badge-icon">flash_on</i></h2>'
                            + '<h5 class="center">Speeds up development</h5>'

                            + '<p class="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>'
                            + '</div>'
                            + '</div>'

                            + '<div class="col s12 m4">'
                            + '<div class="icon-block">'
                            + '<h2 class="center light-blue-text"><i class="material-icons badge-icon">group</i></h2>'
                            + '<h5 class="center">User Experience Focused</h5>'

                            + '<p class="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>'
                            + '</div>'
                            + '</div>'

                            + '<div class="col s12 m4">'
                            + '<div class="icon-block">'
                            + '<h2 class="center light-blue-text"><i class="material-icons badge-icon">settings</i></h2>'
                            + '<h5 class="center">Easy to work with</h5>'

                            + '<p class="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>'
                            + '</div>'
                            + '</div>'
                            + '</div>'
                            + '</div>'
                            + '</div>'
                            + '<style>.badge-icon{font-size:30px}.icon-block{padding:0 15px}</style>',
                            attributes: {
                                class: 'fa fa-sitemap'
                            }
                        },
                        {
                            id: 'text',
                            label: 'Text',
                            attributes: {
                                class: 'fa fa-text-width'
                            },
                            category: 'Basic',
                            content: {
                                type: 'text',
                                content: 'Insert your text here',
                                activeOnRender: 1
                            },
                        }, {
                            id: 'image',
                            label: 'Image',
                            category: 'Basic',
                            attributes: {
                                class: 'fa fa-file-image-o'
                            },
                            content: {
                                type: 'image',
                                activeOnRender: 1
                            },
                        }, {
                            id: 'list',
                            label: 'List',
                            category: 'Basic',
                            attributes: {
                                class: 'fa fa-bars'
                            },
                            content: `<ul class="collection">
                    <li class="collection-item">List One</li>
                    <li class="collection-item">List Two</li>
                    <li class="collection-item">List Three</li>
                    <li class="collection-item">List Four</li>
                    </ul>`,
                        },

                        {
                            id: 'list2',
                            label: 'List Two',
                            category: 'Basic',
                            attributes: {
                                class: 'fa fa-bars'
                            },
                            content: '<ul class="collection">'
                            + '<li class="collection-item avatar">'
                            + '<img src="https://randomuser.me/api/portraits/women/83.jpg" alt="" class="circle">'
                            + '<span class="title">Title</span>'
                            + '<p>First Line <br> Second Line </p>'
                            + '<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>'
                            + '</li>'
                            + '<li class="collection-item avatar">'
                            + '<i class="material-icons circle">folder</i>'
                            + '<span class="title">Title</span>'
                            + '<p>First Line <br>Second Line</p>'
                            + '<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>'
                            + '</li>'
                            + '<li class="collection-item avatar">'
                            + '<i class="material-icons circle green">insert_chart</i>'
                            + '<span class="title">Title</span>'
                            + '<p>First Line <br>Second Line</p>'
                            + '<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>'
                            + '</li>'
                            + '<li class="collection-item avatar">'
                            + '<i class="material-icons circle red">play_arrow</i>'
                            + '<span class="title">Title</span>'
                            + '<p>First Line <br>Second Line</p>'
                            + '<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>'
                            + '</li>'
                            + '</ul>',
                        },
                        {
                            id: 'table',
                            label: 'Table',
                            category: 'Basic',
                            attributes: {
                                class: 'fa fa-table'
                            },
                            content: '<table class="responsive-table centered striped highlight bordered">'
                            + '<thead>'
                            + '<tr>'
                            + '<th>Name</th>'
                            + '<th>Item Name</th>'
                            + '<th>Item Price</th>'
                            + '</tr>'
                            + '</thead>'
                            + '<tbody>'
                            + '<tr>'
                            + '<td>Alvin</td>'
                            + '<td>Eclair</td>'
                            + '<td>$0.87</td>'
                            + '</tr>'
                            + '<tr>'
                            + '<td>Alan</td>'
                            + '<td>Jellybean</td>'
                            + '<td>$3.76</td>'
                            + '</tr>'
                            + '<tr>'
                            + '<td>Jonathan</td>'
                            + '<td>Lollipop</td>'
                            + '<td>$7.00</td>'
                            + '</tr>'
                            + '</tbody>'
                            + '</table>',
                        },
                        {
                            id: 'res',
                            label: 'respon image',
                            category: 'Media',
                            content: '<img src="http://via.placeholder.com/250x250/0174DF/ffffff/" class="responsive-img">',
                            attributes: {
                                class: 'fa fa-image'
                            }
                        },
                        {
                            id: 'popup',
                            label: 'popup image',
                            category: 'Media',
                            content: '<img class="materialboxed" data-caption="A picture of a way with a group of trees in a park" width="250" src="http://via.placeholder.com/250x250/BF00FF/ffffff/">'
                            + '<script type="text/javascript">$(".materialboxed").materialbox();</script>',
                            attributes: {
                                class: 'fa fa-object-group'
                            }
                        }
                        ,
                        {
                            id: 'dropdown',
                            label: 'dropdown',
                            category: 'Button',
                            content: '<!-- Dropdown Trigger -->'
                            + '<a class="dropdown-button btn orange" href="#" data-activates="dropdown1">Drop Me!</a>'
                            + '<ul id="dropdown1" class="dropdown-content">'
                            + '<li><a class="white-text orange" href="#!">one</a></li>'
                            + '<li><a class="white-text orange" href="#!">two</a></li>'
                            + '<li class="divider"></li>'
                            + '<li><a class="white-text orange" href="#!">three</a></li>'
                            + '<li><a class="white-text orange" href="#!"><i class="material-icons">view_module</i>four</a></li>'
                            + '<li><a class="white-text orange" href="#!"><i class="material-icons">cloud</i>five</a></li>'
                            + '</ul>' +
                            '<script>$(".dropdown-button").dropdown();</script>',
                            attributes: {
                                class: 'fa fa-list'
                            }
                        }
                        , {
                            id: 'modal',
                            label: 'modal',
                            category: 'Button',
                            content: '<!-- Modal Trigger -->'
                            + '<a class="waves-effect waves-light btn modal-trigger orange" href="#modal1">Modal</a>'
                            + '<div id="modal1" class="modal modal-fixed-footer black-text">'
                            + '<div class="modal-content">'
                            + '<h4>Modal Header</h4>'
                            + '<p>A bunch of text</p>'
                            + '</div>'
                            + '<div class="modal-footer">'
                            + '<a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">Agree</a>'
                            + '</div>'
                            + '</div>' +
                            '<script type="text/javascript">$(".modal").modal();</script>',
                            attributes: {
                                class: 'fa fa-object-ungroup'
                            }
                        },
                        {
                            id: 'slider',
                            label: 'Slider',
                            category: 'Section',
                            content: '<div class="slider">' +
                            '<ul class="slides">'
                            + '<li>'
                            + '<img src="https://res.cloudinary.com/ronaldaug/image/upload/v1515419441/background2_gjvaxs.jpg"> <!-- random image -->'
                            + '<div class="caption center-align">'
                            + '<h3>This is our big Tagline!</h3>'
                            + '<h5 class="light grey-text text-lighten-3">Heres our small slogan.</h5>'
                            + '</div>'
                            + '</li>'
                            + '<li>'
                            + '<img src="https://res.cloudinary.com/ronaldaug/image/upload/v1515419443/background_ckgyqe.jpg"> <!-- random image -->'
                            + '<div class="caption left-align">'
                            + '<h3>Left Aligned Caption</h3>'
                            + '<h5 class="light grey-text text-lighten-3">Heres our small slogan.</h5>'
                            + '</div>'
                            + '</li>'
                            + '<li>'
                            + '<img src="https://res.cloudinary.com/ronaldaug/image/upload/v1515419443/background3_d0ghix.jpg"> <!-- random image -->'
                            + '<div class="caption right-align">'
                            + '<h3>Right Aligned Caption</h3>'
                            + '<h5 class="light grey-text text-lighten-3">Heres our small slogan.</h5>'
                            + '</div>'
                            + '</li>'
                            + '<li>'
                            + '<img src="https://res.cloudinary.com/ronaldaug/image/upload/v1515419446/background4_pzh5ou.jpg"> <!-- random image -->'
                            + '<div class="caption center-align">'
                            + '<h3>This is our big Tagline!</h3>'
                            + '<h5 class="light grey-text text-lighten-3">Heres our small slogan.</h5>'
                            + '</div>'
                            + '</li>'
                            + '</ul>'
                            + '</div>' +
                            '<script type="text/javascript">$(".slider").slider({full_width:!0,indicators:!1}),$(".slider").hover(function(){$(".slider").slider("pause")}),$(".slider").mouseleave(function(){$(".slider").slider("start")});</script>',
                            attributes: {
                                class: 'fa fa-credit-card'
                            }
                        },

                        {
                            id: 'btn',
                            label: 'button',
                            category: 'Button',
                            content: '<a class="btn waves-effect waves-light orange">button</a>',
                            attributes: {
                                class: 'fa fa-square-o'
                            }
                        },
                        {
                            id: 'target',
                            label: 'tap target',
                            category: 'Button',
                            content: '<div class="fixed-action-btn"><a onclick="$(\'.tap-target\').tapTarget(\'open\');" id="menu" class="btn btn-floating btn-large orange"><i class="material-icons">menu</i></a></div>'
                            + '<div class="tap-target" data-activates="menu">'
                            + '<div class="tap-target-content">'
                            + '<h5>Title</h5>'
                            + '<p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.</p>'
                            + '</div>'
                            + '</div>',
                            attributes: {
                                class: 'fa fa-bullseye'
                            }
                        },
                        {
                            id: 'fab',
                            label: 'FAB',
                            category: 'Button',
                            content: '<div class="fixed-action-btn horizontal click-to-toggle">'
                            + '<a onclick="$(\'.fixed-action-btn\').openFAB()" class="btn-floating btn-large waves-effect waves-light orange">'
                            + '<i class="material-icons">menu</i>'
                            + '</a>'
                            + '<ul><li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li><li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li><li><a class="btn-floating green"><i class="material-icons">publish</i></a></li><li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li></ul>'
                            + '</div>',
                            attributes: {
                                class: 'fa fa-bullseye'
                            }
                        }, {
                            id: 'fabtool',
                            label: 'FAB toolbar',
                            category: 'Button',
                            content: '<div class="fixed-action-btn toolbar">' +
                            '<a onclick="$(\'.fixed-action-btn.toolbar\').openToolbar();" class="btn-floating btn-large waves-effect orange">'
                            + '<i class="large material-icons">mode_edit</i>'
                            + '</a>'
                            + '<ul>'
                            + '<li class="waves-effect waves-light"><a href="#!"><i class="material-icons">insert_chart</i></a></li>'
                            + '<li class="waves-effect waves-light"><a href="#!"><i class="material-icons">format_quote</i></a></li>'
                            + '<li class="waves-effect waves-light"><a href="#!"><i class="material-icons">publish</i></a></li>'
                            + '<li class="waves-effect waves-light"><a href="#!"><i class="material-icons">attach_file</i></a></li>'
                            + '</ul>'
                            + '</div>',
                            attributes: {
                                class: 'fa fa-ellipsis-h'
                            }
                        },
                        {
                            id: 'cbtn',
                            label: 'Circle Button',
                            category: 'Button',
                            content: '<a class="btn-floating btn-large waves-effect waves-light orange"><i class="material-icons">add</i></a>',
                            attributes: {
                                class: 'fa fa-circle-thin'
                            }
                        }, {
                            id: 'link',
                            label: 'Link',
                            category: 'Basic',
                            attributes: {
                                class: 'fa fa-link'
                            },
                            content: {
                                type: 'link',
                                content: 'Link',
                            },
                        }, {
                            id: 'formtag',
                            label: 'Form Tag',
                            category: 'Form',
                            attributes: {
                                class: 'fa fa-file-text'
                            },
                            content: '<form id="myForm" action="#" method="POST">' +
                            '<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">' +
                            '<div class="col m12" data-gjs-draggable=".row" data-gjs-custom-name="col12"></div></div>' +
                            '</form>' +
                            '<style>#myForm .input-field [type=checkbox]+label,#myForm .input-field [type=radio]:checked+label,#myForm .input-field [type=radio]:not(:checked)+label{pointer-events:auto}input:not([type]):focus:not([readonly]),input[type=date]:not(.browser-default):focus:not([readonly]),#myForm input[type=datetime-local]:not(.browser-default):focus:not([readonly]),#myForm input[type=datetime]:not(.browser-default):focus:not([readonly]),#myForm input[type=email]:not(.browser-default):focus:not([readonly]),#myForm input[type=number]:not(.browser-default):focus:not([readonly]),#myForm input[type=password]:not(.browser-default):focus:not([readonly]),#myForm input[type=search]:not(.browser-default):focus:not([readonly]),#myForm input[type=tel]:not(.browser-default):focus:not([readonly]),#myForm input[type=text]:not(.browser-default):focus:not([readonly]),#myForm input[type=time]:not(.browser-default):focus:not([readonly]),#myForm input[type=url]:not(.browser-default):focus:not([readonly]),#myForm textarea.materialize-textarea:focus:not([readonly]){border-bottom:1px solid orange;-webkit-box-shadow:0 1px 0 0 orange;-moz-box-shadow:0 1px 0 0 orange;box-shadow:0 1px 0 0 orange}#myForm .col:empty,.col:empty{display:table-cell;height:75px}#myForm .col:empty{position:relative}#myForm .col:empty:after{content:"Add form elements here";color:#888;position:absolute;left:10px;top:10px;display:block;width:400px}</style>',
                        }
                        , {
                            id: 'formgroup',
                            label: 'Form group',
                            category: 'Form',
                            attributes: {
                                class: 'fa fa-list'
                            },
                            content: '<div class="row">'
                            + '<form id="myForm" class="col s12">'
                            + '<div class="row">'
                            + '<div class="input-field col s6">'
                            + '<input id="first_name" type="text" class="validate">'
                            + '<label for="first_name">First Name</label>'
                            + '</div>'
                            + '<div class="input-field col s6">'
                            + '<input id="last_name" type="text" class="validate">'
                            + '<label for="last_name">Last Name</label>'
                            + '</div>'
                            + '</div>'
                            + '<div class="row">'
                            + '<div class="input-field col s12">'
                            + '<input id="password" type="password" class="validate">'
                            + '<label for="password">Password</label>'
                            + '</div>'
                            + '</div>'
                            + '<div class="row">'
                            + '<div class="input-field col s12">'
                            + '<input id="email" type="email" class="validate">'
                            + '<label for="email">Email</label>'
                            + '</div>'
                            + '</div>'
                            + '<div class="row">'
                            + '<div class="col s12">This is an inline input field:'
                            + '<div class="input-field inline">'
                            + '<input id="email" type="email" class="validate">'
                            + '<label for="email" data-error="wrong" data-success="right">Email</label>'
                            + '</div>'
                            + '</div>'
                            + '</div>'
                            + '</form>'
                            + '</div>'
                            + '<style>#myForm .input-field [type=checkbox]+label,#myForm .input-field [type=radio]:checked+label,#myForm .input-field [type=radio]:not(:checked)+label{pointer-events:auto}input:not([type]):focus:not([readonly]),input[type=date]:not(.browser-default):focus:not([readonly]),#myForm input[type=datetime-local]:not(.browser-default):focus:not([readonly]),#myForm input[type=datetime]:not(.browser-default):focus:not([readonly]),#myForm input[type=email]:not(.browser-default):focus:not([readonly]),#myForm input[type=number]:not(.browser-default):focus:not([readonly]),#myForm input[type=password]:not(.browser-default):focus:not([readonly]),#myForm input[type=search]:not(.browser-default):focus:not([readonly]),#myForm input[type=tel]:not(.browser-default):focus:not([readonly]),#myForm input[type=text]:not(.browser-default):focus:not([readonly]),#myForm input[type=time]:not(.browser-default):focus:not([readonly]),#myForm input[type=url]:not(.browser-default):focus:not([readonly]),#myForm textarea.materialize-textarea:focus:not([readonly]){border-bottom:1px solid orange;-webkit-box-shadow:0 1px 0 0 orange;-moz-box-shadow:0 1px 0 0 orange;box-shadow:0 1px 0 0 orange}#myForm .col:empty,.col:empty{display:table-cell;height:75px}#myForm .col:empty{position:relative}#myForm .col:empty:after{content:"Add form elements here";color:#888;position:absolute;left:10px;top:10px;display:block;width:400px}</style>',
                        },
                        {
                            id: 'iconinput',
                            label: 'Input',
                            category: 'Form',
                            attributes: {
                                class: 'fa fa-minus-square'
                            },
                            content: '<div class="row">'
                            + '<div class="input-field col s6">'
                            + '<i class="material-icons prefix">account_circle</i>'
                            + '<input id="icon_prefix" type="text" class="validate">'
                            + '<label for="icon_prefix">First Name</label>'
                            + '</div>'
                            + '<div class="input-field col s6">'
                            + '<i class="material-icons prefix">phone</i>'
                            + '<input id="icon_telephone" type="tel" class="validate">'
                            + '<label for="icon_telephone">Telephone</label>'
                            + '</div>'
                            + '</div>',
                        }, {
                            id: 'textarea',
                            label: 'Textarea',
                            category: 'Form',
                            attributes: {
                                class: 'fa fa-sticky-note-o'
                            },
                            content: '<div class="row">'
                            + '<div class="input-field col s12">'
                            + '<textarea id="textarea1" class="materialize-textarea"></textarea>'
                            + '<label for="textarea1">Textarea</label>'
                            + '</div>'
                            + '</div>',
                        }, {
                            id: 'select',
                            label: 'Select',
                            category: 'Form',
                            attributes: {
                                class: 'fa fa-caret-square-o-down'
                            },
                            content: '<div class="input-field col s12">'
                            + '<select>'
                            + '<option value="" disabled selected>Choose your option</option>'
                            + '<option value="1">Option 1</option>'
                            + '<option value="2">Option 2</option>'
                            + '<option value="3">Option 3</option>'
                            + '</select>'
                            + '<label>Materialize Select</label>'
                            + '</div>'
                            + '<script>$("select").material_select();</script>'
                        },
                        {
                            id: 'radio',
                            label: 'Radio',
                            category: 'Form',
                            attributes: {
                                class: 'fa fa-dot-circle-o'
                            },
                            content: `<div class="row">
        <div class="input-field col s12">
<p>
      <input name="group1" type="radio" id="test1"/>
      <label for="test1">Red</label>
    </p>
    <p>
      <input name="group1" type="radio" id="test2"/>
      <label for="test2">Yellow</label>
    </p>
    <p>
      <input class="with-gap" name="group1" type="radio" id="test3" />
      <label for="test3">Green</label>
    </p>
    <p>
      <input name="group1" type="radio" id="test4" disabled="disabled"/>
      <label for="test4">Brown</label>
    </p>
    </div>
    </div>`
                        }, {
                            id: 'checkbox',
                            label: 'Checkbox',
                            category: 'Form',
                            attributes: {
                                class: 'fa fa-check-square-o'
                            },
                            content: `<div class="row">
        <div class="input-field col s12">
    <p>
      <input type="checkbox" id="test5" />
      <label for="test5">Red</label>
    </p>
    <p>
      <input type="checkbox" id="test6" checked="checked" />
      <label for="test6">Yellow</label>
    </p>
    </div>
    </div>`
                        }, {
                            id: 'map',
                            label: 'Map',
                            category: 'Extra',
                            attributes: {
                                class: 'fa fa-map-o'
                            },
                            content: {
                                type: 'map',
                                style: {
                                    height: '350px'
                                }
                            },
                        }
                        ,
                        {
                            id: 'sidenav',
                            label: 'SideNav',
                            category: 'Extra',
                            content: `<ul id="slide-out" class="side-nav">
    <li><div class="user-view">
      <div class="background">
        <img src="https://randomuser.me/api/portraits/women/82.jpg">
      </div>
      <a href="#!user"><img class="circle" src="images/yuna.jpg"></a>
      <a href="#!name"><span class="white-text name">John Doe</span></a>
      <a href="#!email"><span class="white-text email">jdandturk@gmail.com</span></a>
    </div></li>
    <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
    <li><a href="#!">Second Link</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Subheader</a></li>
    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
  </ul>
  <a href="#" data-activates="slide-out" class="btn-flat btn button-collapse white-text orange"><i class="material-icons">menu</i></a>
                      <script type="text/javascript">
                            $('.button-collapse').sideNav();
                        </script>`,
                            attributes: {
                                class: 'fa fa-indent'
                            }
                        },
                        {
                            id: 'accor',
                            label: 'Accordian',
                            category: 'Extra',
                            attributes: {
                                class: 'fa fa-reorder'
                            },
                            content: `<ul class="collapsible" data-collapsible="accordion">
    <li>
      <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
  </ul>
  <style>
  .button-collapse{color:#26a69a}
</style>
<script type="text/javascript">
$('.collapsible').collapsible();
</script>`,
                        },
                        {
                            id: 'tap',
                            label: 'Tap',
                            category: 'Extra',
                            attributes: {
                                class: 'fa fa-ellipsis-h'
                            },
                            content: '<div class="row">'
                            + '<div class="col s12">'
                            + '<ul class="tabs">'
                            + '<li class="tab col s3"><a href="#test1">Test 1</a></li>'
                            + '<li class="tab col s3"><a class="active" href="#test2">Test 2</a></li>'
                            + '<li class="tab col s3 disabled"><a href="#test3">Disabled Tab</a></li>'
                            + '<li class="tab col s3"><a href="#test4">Test 4</a></li>'
                            + '</ul>'
                            + '</div>'
                            + '<div id="test1" class="col s12">Test 1</div>'
                            + '<div id="test2" class="col s12">Test 2</div>'
                            + '<div id="test3" class="col s12">Test 3</div>'
                            + '<div id="test4" class="col s12">Test 4</div>'
                            + '</div>'
                            + '<script type="text/javascript">$("ul.tabs").tabs();</script>',
                        },
                        {
                            id: 'members',
                            label: 'Members',
                            category: 'Section',
                            content: `<section id="members">
  <div class="container">
  <div class="row">
  <div class="col m12">
    <h2 class="section-title center">Members</h2>
  </div>
    </div>
  <div class="row">
      <div class="col m4 s6">
    <div class="single-member">
      <img class="profile-img" src="https://randomuser.me/api/portraits/women/82.jpg" alt="">
    <h5>Marian Holmes</h5>
    <p>Developer</p>
    <ul class="social-icons">
      <li><a href="#"><img src="https://res.cloudinary.com/ronaldaug/image/upload/v1530271176/facebook_xufb3l.png" alt="facebook">
      <li><a href="#"><img src="https://res.cloudinary.com/ronaldaug/image/upload/v1530271176/twitter_cxpl2b.png" alt="twitter"></a></li>
      <li><a href="#"><img src="https://res.cloudinary.com/ronaldaug/image/upload/v1530271176/linkedin_vkgoom.png" alt="linkedin"></a></li>
    </ul>
    </div>
  </div>
     <div class="col m4 s6">
    <div class="single-member">
      <img class="profile-img" src="https://randomuser.me/api/portraits/women/74.jpg" alt="">
    <h5>Peggy Henry</h5>
    <p>Marketing manager</p>
    <ul class="social-icons">
      <li><a href="#"><img src="https://res.cloudinary.com/ronaldaug/image/upload/v1530271176/facebook_xufb3l.png" alt="facebook">
      <li><a href="#"><img src="https://res.cloudinary.com/ronaldaug/image/upload/v1530271176/twitter_cxpl2b.png" alt="twitter"></a></li>
      <li><a href="#"><img src="https://res.cloudinary.com/ronaldaug/image/upload/v1530271176/linkedin_vkgoom.png" alt="linkedin"></a></li>
    </ul>
    </div>
  </div>
      <div class="col m4 s6">
    <div class="single-member">
      <img class="profile-img" src="https://randomuser.me/api/portraits/men/13.jpg" alt="">
    <h5>Eduardo Carter</h5>
    <p>Director</p>
    <ul class="social-icons">
      <li><a href="#"><img src="https://res.cloudinary.com/ronaldaug/image/upload/v1530271176/facebook_xufb3l.png" alt="facebook">
      <li><a href="#"><img src="https://res.cloudinary.com/ronaldaug/image/upload/v1530271176/twitter_cxpl2b.png" alt="twitter"></a></li>
      <li><a href="#"><img src="https://res.cloudinary.com/ronaldaug/image/upload/v1530271176/linkedin_vkgoom.png" alt="linkedin"></a></li>
    </ul>
    </div>
  </div>
    </div>
   </div>
</section>
<style>section#members{width:100%;background:#f6f7f9;padding:40px 0 40px}.section-title{color:#262e41;margin:40px 0 40px}.single-member{background:#fff;padding:60px 20px 40px;text-align:center;border-radius:3px;transition:all ease .3s;-moz-transition:all ease .3s;-webkit-transition:all ease .3s}.single-member:hover{margin-top:-10px;box-shadow:0 1px 10px rgba(167,176,211,0.38);-moz-box-shadow:0 1px 10px rgba(167,176,211,0.38);-webkit-box-shadow:0 1px 10px rgba(167,176,211,0.38)}.single-member .profile-img{width:80px;height:80px;border-radius:100%;-moz-border-radius:100%;-webkit-border-radius:100%}.single-member h5{font-size:16px}.single-member p{font-size:12px;color:#777}ul.social-icons{width:100%}ul.social-icons li{display:inline-block}ul.social-icons li a{margin:10px}ul.social-icons li a img{width:20px;height:20px}</style>`,
                            attributes: {
                                class: "fa fa-users"
                            }
                        },
                        {
                            id: 'blog',
                            label: 'Blog',
                            category: 'Section',
                            content: '<section id="blog" class="container">'
                            + '<div class="row">'
                            + '<div class="col s12">'
                            + '<h2 class="section-title center">Blog</h2>'
                            + '</div>'
                            + '<div class="col s12 m6">'
                            + '<div class="blogpost">'
                            + '<div class="date">'
                            + '22 / July / 18'
                            + '</div>'
                            + '<a href="#">'
                            + '<div class="img-wrap"><img src="https://cdn.pixabay.com/photo/2015/03/17/02/01/cubes-677092__480.png" alt=""></div>'
                            + '<h3 class="title">Blog Title</h3>'
                            + '</a>'
                            + '<div class="blogmeta">'
                            + '<ul>'
                            + '<li><i class="material-icons">person_outline</i><span> by John Doe</span></li>'
                            + '<li>'
                            + '<i class="material-icons">chat_bubble_outline</i> <span>5 Comments</span>'
                            + '</li> '
                            + '</ul>'

                            + '</div>'

                            + '<p class="content">'
                            + 'Nulla porttitor accumsan tincidunt. Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
                            + '</p>'
                            + '<a href="#" class="btn light-blue wave-effect">Read More</a>'
                            + '</div>'
                            + '</div>'
                            + '<div class="col s12 m6">'
                            + '<div class="blogpost">'
                            + '<div class="date">'
                            + '22 / July / 18'
                            + '</div>'
                            + '<a href="#">'
                            + '<div class="img-wrap"><img src="https://cdn.pixabay.com/photo/2013/07/25/13/01/stones-167089__480.jpg" alt=""></div>'
                            + '<h3 class="title">Blog Title</h3>'
                            + '</a>'
                            + '<div class="blogmeta">'
                            + '<ul>'
                            + '<li><i class="material-icons">person_outline</i><span> by John Doe</span></li>'
                            + '<li>'
                            + '<i class="material-icons">chat_bubble_outline</i> <span>5 Comments</span>'
                            + '</li> '
                            + '</ul>'

                            + '</div>'

                            + '<p class="content">'
                            + 'Nulla porttitor accumsan tincidunt. Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
                            + '</p>'
                            + '<a href="#" class="btn light-blue wave-effect">Read More</a>'
                            + '</div>'
                            + '</div>'
                            + '</div><!-- row -->'
                            + '</section><!-- container -->'
                            + '<style>.section-title{margin:40px 0 40px}.blogpost{border:1px solid #eee;padding:20px;position:relative;margin-bottom:30px}.blogpost .date{z-index:2;position:absolute;background:#fff;padding:8px;box-shadow:0 1px 3px rgba(116,116,116,.3);-moz-box-shadow:0 1px 3px rgba(116,116,116,.3);-webkit-box-shadow:0 1px 3px rgba(116,116,116,.3);top:40px;right:-4px}.blogpost .img-wrap{width:100%;overflow:hidden;height:240px}.blogpost .img-wrap img{width:100%;object-fit:cover;height:100%;transition:all ease .4s;-moz-transition:all ease .4s;-webkit-transition:all ease .4s}.blogpost .img-wrap:hover img{transform:scale(1.1);-moz-transform:scale(1.1);-webkit-transform:scale(1.1)}.blogpost .title{color:#222;font-size:28px}.blogmeta{width:100%;clear:both;margin-bottom:10px}.blogmeta ul li{position:relative;width:50%}.blogmeta ul li span{position:absolute;top:4px;left:28px;margin-bottom:10px}@media (min-width:768px){.blogmeta ul li{float:left}}</style>',
                            attributes: {
                                class: "fa fa-dedent"
                            }
                        },
                        {
                            id: 'card',
                            label: 'Card',
                            category: 'Section',
                            content: '<div class="row">'
                            + '<div class="col s12 m6">'
                            + '<div class="card">'
                            + '<div class="card-image">'
                            + '<img src="http://via.placeholder.com/250x250/BF00FF/ffffff/">'
                            + '<span class="card-title">Card Title</span>'
                            + '</div>'
                            + '<div class="card-content">'
                            + '<p>I am a very simple card. I am good at containing small bits of information.'
                            + 'I am convenient because I require little markup to use effectively.</p>'
                            + '</div>'
                            + '<div class="card-action">'
                            + '<a href="#">This is a link</a>'
                            + '</div>'
                            + '</div>'
                            + '</div>'
                            + '</div>',
                            attributes: {
                                class: 'fa fa-newspaper-o'
                            },
                        },
                        {
                            id: 'video',
                            label: 'Video',
                            category: 'Media',
                            attributes: {
                                class: 'fa fa-youtube-play'
                            },
                            content: {
                                type: 'video',
                                src: 'img/video2.webm',
                                style: {
                                    height: '350px',
                                    width: '615px',
                                }
                            },
                        }, {
                            id: 'h1p',
                            label: 'Text section',
                            category: 'Typography',
                            content: '<div>'
                            + '<h3>Insert title here</h3>'
                            + '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>'
                            + '</div>',
                            attributes: {
                                class: 'fa fa-align-center'
                            }
                        }, {
                            id: 'quo',
                            label: 'Quote',
                            category: 'Typography',
                            content: '<blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</blockquote>',
                            attributes: {
                                class: 'fa fa-quote-right'
                            }
                        }
                    ],
                },
                storageManager: {
                    id: 'gjs-',
                    type: 'local',
                    autosave: 1,
                    autoload: 1,
                    stepsBeforeSave: 1,
                    storeComponents: 1,
                    storeStyles: 1,
                    storeHtml: 1,
                    storeCss: 1,
                },
                styleManager: {
                    sectors: [{
                        name: 'General',
                        open: false,
                        buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom']
                    }, {
                        name: 'Dimension',
                        open: false,
                        buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
                    }, {
                        name: 'Typography',
                        open: false,
                        buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-shadow'],
                        properties: [{
                            property: 'text-align',
                            list: [{
                                value: 'left',
                                className: 'fa fa-align-left'
                            },
                                {
                                    value: 'center',
                                    className: 'fa fa-align-center'
                                },
                                {
                                    value: 'right',
                                    className: 'fa fa-align-right'
                                },
                                {
                                    value: 'justify',
                                    className: 'fa fa-align-justify'
                                }
                            ],
                        }]
                    }, {
                        name: 'Decorations',
                        open: false,
                        buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
                    }, {
                        name: 'Extra',
                        open: false,
                        buildProps: ['opacity', 'transition', 'perspective', 'transform'],
                        properties: [{
                            type: 'slider',
                            property: 'opacity',
                            defaults: 1,
                            step: 0.01,
                            max: 1,
                            min: 0,
                        }]
                    }, {
                        name: 'Flex',
                        open: false,
                        properties: [{
                            name: 'Flex Container',
                            property: 'display',
                            type: 'select',
                            defaults: 'block',
                            list: [{
                                value: 'block',
                                name: 'Disable',
                            }, {
                                value: 'flex',
                                name: 'Enable',
                            }],
                        }, {
                            name: 'Flex Parent',
                            property: 'label-parent-flex',
                        }, {
                            name: 'Direction',
                            property: 'flex-direction',
                            type: 'radio',
                            defaults: 'row',
                            list: [{
                                value: 'row',
                                name: 'Row',
                                className: 'icons-flex icon-dir-row',
                                title: 'Row',
                            }, {
                                value: 'row-reverse',
                                name: 'Row reverse',
                                className: 'icons-flex icon-dir-row-rev',
                                title: 'Row reverse',
                            }, {
                                value: 'column',
                                name: 'Column',
                                title: 'Column',
                                className: 'icons-flex icon-dir-col',
                            }, {
                                value: 'column-reverse',
                                name: 'Column reverse',
                                title: 'Column reverse',
                                className: 'icons-flex icon-dir-col-rev',
                            }],
                        }, {
                            name: 'Wrap',
                            property: 'flex-wrap',
                            type: 'radio',
                            defaults: 'nowrap',
                            list: [{
                                value: 'nowrap',
                                title: 'Single line',
                            }, {
                                value: 'wrap',
                                title: 'Multiple lines',
                            }, {
                                value: 'wrap-reverse',
                                title: 'Multiple lines reverse',
                            }],
                        }, {
                            name: 'Justify',
                            property: 'justify-content',
                            type: 'radio',
                            defaults: 'flex-start',
                            list: [{
                                value: 'flex-start',
                                className: 'icons-flex icon-just-start',
                                title: 'Start',
                            }, {
                                value: 'flex-end',
                                title: 'End',
                                className: 'icons-flex icon-just-end',
                            }, {
                                value: 'space-between',
                                title: 'Space between',
                                className: 'icons-flex icon-just-sp-bet',
                            }, {
                                value: 'space-around',
                                title: 'Space around',
                                className: 'icons-flex icon-just-sp-ar',
                            }, {
                                value: 'center',
                                title: 'Center',
                                className: 'icons-flex icon-just-sp-cent',
                            }],
                        }, {
                            name: 'Align',
                            property: 'align-items',
                            type: 'radio',
                            defaults: 'center',
                            list: [{
                                value: 'flex-start',
                                title: 'Start',
                                className: 'icons-flex icon-al-start',
                            }, {
                                value: 'flex-end',
                                title: 'End',
                                className: 'icons-flex icon-al-end',
                            }, {
                                value: 'stretch',
                                title: 'Stretch',
                                className: 'icons-flex icon-al-str',
                            }, {
                                value: 'center',
                                title: 'Center',
                                className: 'icons-flex icon-al-center',
                            }],
                        }, {
                            name: 'Flex Children',
                            property: 'label-parent-flex',
                        }, {
                            name: 'Order',
                            property: 'order',
                            type: 'integer',
                            defaults: 0,
                            min: 0
                        }, {
                            name: 'Flex',
                            property: 'flex',
                            type: 'composite',
                            properties: [{
                                name: 'Grow',
                                property: 'flex-grow',
                                type: 'integer',
                                defaults: 0,
                                min: 0
                            }, {
                                name: 'Shrink',
                                property: 'flex-shrink',
                                type: 'integer',
                                defaults: 0,
                                min: 0
                            }, {
                                name: 'Basis',
                                property: 'flex-basis',
                                type: 'integer',
                                units: ['px', '%', ''],
                                unit: '',
                                defaults: 'auto',
                            }],
                        }, {
                            name: 'Align',
                            property: 'align-self',
                            type: 'radio',
                            defaults: 'auto',
                            list: [{
                                value: 'auto',
                                name: 'Auto',
                            }, {
                                value: 'flex-start',
                                title: 'Start',
                                className: 'icons-flex icon-al-start',
                            }, {
                                value: 'flex-end',
                                title: 'End',
                                className: 'icons-flex icon-al-end',
                            }, {
                                value: 'stretch',
                                title: 'Stretch',
                                className: 'icons-flex icon-al-str',
                            }, {
                                value: 'center',
                                title: 'Center',
                                className: 'icons-flex icon-al-center',
                            }],
                        }]
                    }

                    ],

                },
            });

                var pnm = editor.Panels;
            pnm.addButton('options', [{
                id: 'undo',
                className: 'fa fa-undo icon-undo',
                command: function (editor, sender) {
                    sender.set('active', 0);
                    editor.UndoManager.undo(1);
                },
                attributes: {
                    title: 'Undo (CTRL/CMD + Z)'
                }
            },
                {
                    id: 'redo',
                    className: 'fa fa-repeat icon-redo',
                    command: function (editor, sender) {
                        sender.set('active', 0);
                        editor.UndoManager.redo(1);
                    },
                    attributes: {
                        title: 'Redo (CTRL/CMD + SHIFT + Z)'
                    }
                },
                {
                    id: 'import',
                    className: 'fa fa-edit',
                    command: 'html-edit',
                    attributes: {
                        title: 'Import'
                    }
                }, {
                    id: 'clean-all',
                    className: 'fa fa-trash icon-blank',
                    command: function (editor, sender) {
                        if (sender) sender.set('active', false);
                        if (confirm('Are you sure to clean the canvas?')) {
                            editor.runCommand('core:canvas-clear');
                            setTimeout(function () {
                                localStorage.setItem('gjs-assets', '');
                                localStorage.setItem('gjs-components', '');
                                localStorage.setItem('gjs-html', '');
                                localStorage.setItem('gjs-css', '');
                                localStorage.setItem('gjs-styles', '');
                            }, 0);
                        }
                    },
                    attributes: {
                        title: 'Empty canvas'
                    }
                }
            ]);

// ---------------------
// Import/Edit
// ---------------------
            var gra = {
                // append in container
                _a: function (appendName) {
                    return container.appendChild(appendName);
                },
                // create elements
                _c: function (tagName) {
                    return document.createElement(tagName);
                },
                // check extensions
                _e: function (fname) {
                    var ext = /^.+\.([^.]+)$/.exec(fname);
                    return ext == null ? "" : ext[1];
                },
                // select id
                _d: function (name, tag) {
                    switch (tag) {
                        case 'class':
                            return document.getElementsByClassName(name);
                        case 'id':
                            return document.getElementById(name);
                        default:
                            return document.getElementById(name);
                    }
                }
            }
            var pfx = editor.getConfig().stylePrefix;
            var modal = editor.Modal;
            var cmdm = editor.Commands;
            var container = gra._c("div");
            var btnEdit = gra._c("button");
            var copyHtml = gra._c("button");
            var copyCss = gra._c("button");
            var btnZip = gra._c("button");
            var exportTxt = gra._c("button");
            var loadTxt = gra._c("button");
            var fileLoader = gra._c("form");
            var anchor = gra._c("a");


            function buildCodeEditor(type) {
                var codeEditor = editor.CodeManager.getViewer('CodeMirror').clone();
                codeEditor.set({
                    codeName: type === 'html' ? 'htmlmixed' : 'css',
                    readOnly: 0,
                    theme: 'hopscotch',
                    autoBeautify: true,
                    autoCloseTags: true,
                    autoCloseBrackets: true,
                    lineWrapping: true,
                    styleActiveLine: true,
                    smartIndent: true,
                    indentWithTabs: true
                });
                return codeEditor;
            }
            var htmlCodeEditor = buildCodeEditor('html');
            var cssCodeEditor = buildCodeEditor('css');

            btnEdit.innerHTML = '<i class="fa fa-code"></i> Apply';
            btnZip.innerHTML = '<i class="fa fa-download"></i> Download Project (zip)';
            exportTxt.innerHTML = '<i class="fa fa-download"></i> Save as .gram file';
            loadTxt.innerHTML = '<i class="fa fa-upload"></i> Load .gram file';
            copyHtml.innerHTML = '<i class="fa fa-copy"></i> Copy HTML';
            copyCss.innerHTML = '<i class="fa fa-copy"></i> Copy CSS';
            fileLoader.innerHTML = '<input type="file" id="fileToLoad">';

            fileLoader.className = pfx + 'import-file';
            btnEdit.className = pfx + 'btn-prim ' + pfx + 'btn-import';
            copyHtml.className = pfx + 'btn-prim ' + pfx + 'btn-html';
            copyCss.className = pfx + 'btn-prim ' + pfx + 'btn-css';
            btnZip.className = pfx + 'btn-prim ' + pfx + 'btn-zip';
            exportTxt.className = pfx + 'btn-prim ' + pfx + 'btn-export';
            loadTxt.className = pfx + 'btn-prim ' + pfx + 'btn-load';

// import button inside import editor
            btnEdit.onclick = function () {
                var htmlCode = htmlCodeEditor.editor.getValue();
                var cssCode = cssCodeEditor.editor.getValue();
                editor.DomComponents.getWrapper().set('content', '');
                editor.setComponents(htmlCode.trim() + '<style>' + cssCode.trim() + '</style>');
                modal.close();
            };

            btnZip.onclick = function() {
                editor.runCommand('gjs-export-zip');
            };

// onclick load file button inside import editor
            loadTxt.onclick = function (e) {
                e.preventDefault();
                var fileToLoad = document.getElementById("fileToLoad").files[0];
                var fType = gra._e(fileToLoad['name']);
                if (fileToLoad === undefined) {
                    alert('Please select a file');
                    return;
                }
                if (fType === 'gram' || fType === 'txt') {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        var fileData = e.target.result;
                        editor.DomComponents.getWrapper().set('content', '');
                        editor.setComponents(fileData);
                        modal.close();
                    }
                    reader.readAsText(fileToLoad);
                } else {
                    alert('You can only import .gram or .txt extension');
                }
            }

            copyHtml.onclick = function(){
                var htmlCodes = htmlCodeEditor.editor.getValue();
                var dummy = gra._c("input");
                document.body.appendChild(dummy);
                dummy.setAttribute('value', htmlCodes);
                dummy.select();
                document.execCommand("copy");
                document.body.removeChild(dummy);
                document.execCommand('copy');
                alert('You have copied HTML codes!');
            };
            copyCss.onclick = function(){
                var cssCodes = cssCodeEditor.editor.getValue();
                var dummy = gra._c("input");
                document.body.appendChild(dummy);
                dummy.setAttribute('value', cssCodes);
                dummy.select();
                document.execCommand("copy");
                document.body.removeChild(dummy);
                document.execCommand('copy');
                alert('You have copied CSS codes!');
            };

// onclick save as button inside import editor
            exportTxt.onclick = function () {
                    var InnerHtml = editor.getHtml();
                    var Css = editor.getCss();
                    var text = InnerHtml + "<style>" + Css + '</style>';
                    var blob = new Blob([text], {
                        type: "text/plain"
                    });
                    anchor.download = "download.gram";
                    anchor.href = window.URL.createObjectURL(blob);
                    anchor.target = "_blank";
                    anchor.style.display = "none"; // just to be safe!
                    document.body.appendChild(anchor);
                    anchor.click();
                    document.body.removeChild(anchor);
            }

// import nav button click event
            cmdm.add('html-edit', {
                run: function importArea(editor, sender) {
                    sender && sender.set('active', 0);
                    var htmlViewer = htmlCodeEditor.editor;
                    var cssViewer = cssCodeEditor.editor;
                    var htmlBox = gra._c('div');
                    htmlBox.className = 'html-wrapper';
                    htmlBox.innerHTML = "<h4>HTML</h4>";
                    var cssBox = gra._c('div');
                    cssBox.className = 'css-wrapper';
                    cssBox.innerHTML = "<h4>CSS</h4>";
                    modal.setTitle('Edit and Import');
                    var headline = gra._c('div');
                    headline.className = 'clear-head';
                    var htmlWrap = gra._c('textarea');
                    var cssWrap = gra._c('textarea');
                    htmlBox.appendChild(htmlWrap);
                    cssBox.appendChild(cssWrap);
                    if (!htmlViewer && !cssViewer) {
                        gra._a(fileLoader);
                        gra._a(loadTxt);
                        gra._a(exportTxt);
                        gra._a(headline);
                        gra._a(htmlBox);
                        gra._a(cssBox);
                        gra._a(copyCss);
                        gra._a(copyHtml);
                        gra._a(btnEdit);
                        gra._a(btnZip);
                        htmlCodeEditor.init(htmlWrap);
                        cssCodeEditor.init(cssWrap);
                    }
                    modal.setContent('');
                    modal.setContent(container);
                    htmlCodeEditor.setContent(editor.getHtml());
                    cssCodeEditor.setContent(editor.getCss({ avoidProtected: true }));
                    modal.open();
                    htmlCodeEditor.editor.refresh();
                    cssCodeEditor.editor.refresh();
                }
            });

            editor.BlockManager.getCategories().each(function (ctg) {
                ctg.set('open', false);
            })
            editor.Panels.removeButton('options', 'export-template');
            editor.render();
        }
    }
})