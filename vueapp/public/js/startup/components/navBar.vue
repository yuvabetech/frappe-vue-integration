<template>
    <v-card height="800" width="80%" class="mx-auto overflow-hidden">
        <v-app-bar color="blue darken-2" elevation="4">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute bottom temporary>
            <v-list nav dense>
                <v-list-item-group v-model="group" active-class="blue--text text--accent-4">
                    <v-list-item>
                        <v-list-item-title>Foo</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>Bar</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <StepperForm class="m-5"></StepperForm>
    </v-card>
</template>

<script>
import StepperForm from "./stepperForm.vue"

  export default {
    name: "navBar",
    data: () => ({
        drawer: false,
        group: null,
    }),
    watch: {
        group() {
            this.drawer = false;
        },
    },
    components: { StepperForm }
}
</script>