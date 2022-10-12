<template>
  <v-app>
    <Header></Header>
    <div class="m-4">
        <v-row no-gutters>
            <CustomerSelect></CustomerSelect>
        </v-row>
    </div>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import CustomerSelect from './components/CustomerSelect.vue'

export default {
    name: 'App',
    components: {
        Header,
        CustomerSelect
    },
    data() {
        return {}
    }
}
</script>