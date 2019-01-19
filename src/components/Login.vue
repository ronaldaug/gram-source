<template>
    <div class="login-wrapper">
        <div class="login-box">
            <Row>
                <Col span="24">
                    <h2 class="web-title">Gramateria</h2>
                </Col>
            </Row>
            <Tabs>
                <TabPane label="Sigin" icon="locked">
                    <sign_in></sign_in>
                </TabPane>
                <TabPane label="Signup" icon="person-add">
                    <sign_up></sign_up>
                </TabPane>
            </Tabs>
        </div>
    </div>
</template>

<script>
    import sign_in from './signin.vue'
    import sign_up from './signup.vue'

    export default {
        name: "Login",
        components: {
            sign_in, sign_up
        }
    }
</script>

<style scoped>
    .web-title{
        margin:10px 0 10px;
        text-align:center;
    }
    .login-box {
        background: #fff;
        max-width: 350px;
        margin: 60px auto;
        padding: 30px;
        height: auto;
        box-shadow: 0 2px 8px rgba(116, 116, 116, 0.30);
        -moz-box-shadow: 0 2px 8px rgba(116, 116, 116, 0.30);
        -webkit-box-shadow: 0 2px 8px rgba(116, 116, 116, 0.30);
    }

    .login-wrapper {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
    }
</style>