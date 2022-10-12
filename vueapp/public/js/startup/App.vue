<template>
    <v-app>
        <navBar></navBar>
    </v-app>
</template>

<script>
import navBar from "./components/navBar.vue"

export default {
    name: "App",
    components: {
        navBar,
    },
    data() {
        return {msg: "hello"}
    },
    methods: {
        changeMsg() {
            this.msg = "update";
        }
    }
}
</script>