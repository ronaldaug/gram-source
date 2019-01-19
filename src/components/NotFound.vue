<template>
    <div class="notfound">
        <h1>Oh! 404.</h1>
        <p>Sorry, the page is not found.</p>
    </div>
</template>

<script>
    export default {
        name: "NotFound"
    }
</script>

<style scoped>
.notfound{
    padding:40px;
    max-width:400px;
    text-align:center;
    margin:60px auto;
    background:#fff;
    box-shadow:0 2px 8px rgba(116,116,116,0.30);
    -moz-box-shadow:0 2px 8px rgba(116,116,116,0.30);
    -webkit-box-shadow:0 2px 8px rgba(116,116,116,0.30);
}
</style>