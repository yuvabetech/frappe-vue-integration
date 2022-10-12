<template>
  <v-form>
      <v-row>
          <v-col  xs="2" sm="4" md="6" lg="6" xl="6">
              <v-text-field label="Customer" v-model="customer" :rules="rules"></v-text-field>
          </v-col>
          <v-col  xs="2" sm="4" md="6" lg="6" xl="6">
              <v-text-field label="Customer Name" readonly :value="customer_name"></v-text-field>
          </v-col>
      </v-row>
      <v-row>
          <v-col  xs="2" sm="4" md="6" lg="6" xl="6">
              <v-text-field label="Item Code" v-model="item_code" :rules="rules"></v-text-field>
          </v-col>
          <v-col  xs="2" sm="4" md="6" lg="6" xl="6">
              <v-text-field label="Price" readonly value="33 MRP"></v-text-field>
          </v-col>
      </v-row>
      <v-row>
          <v-col  xs="2" sm="4" md="6" lg="6" xl="6">
              <v-text-field label="Qty" v-model="qty" :rules="rules"></v-text-field>
          </v-col>
          <v-col  xs="2" sm="4" md="6" lg="6" xl="6">
              <v-text-field label="Total Price" readonly value="33 MRP"></v-text-field>
          </v-col>
      </v-row>
  </v-form>
</template>

<script>
export default {
    name: 'CustomerSelect',
    data() {
        return {
            rules: [
                value => !!value || 'Required.'
            ],
            customer: '',
            item_code: '',
            qty: 0
        }
    },
    computed: {
        customer_name() {
            return this.customer
        },
        item_uom() {
            return this.item_code
        }
    }
}
</script>