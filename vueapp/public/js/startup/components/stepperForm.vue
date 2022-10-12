<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
      >
        Name of step 1
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
      >
        Name of step 2
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">
        Name of step 3
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
          color="grey lighten-4"
          height="400px"
        >
        <firstStep></firstStep>
        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="grey lighten-4"
          height="400px"
        >
        <stepTwo class="m-4 "></stepTwo>
        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="grey lighten-4"
          height="400px"
        >
        <lastStep></lastStep>
        </v-card>

        <v-btn
          color="success"
          @click="e1 = 1"
        >
          Complete
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import stepTwo from "./stepTwo.vue"
import firstStep from "./firstStep.vue"
import lastStep from "./lastStep.vue"

  export default {
    name: 'stepperForm',
    components: {stepTwo, firstStep, lastStep},
    data () {
      return {
        e1: 1,
      }
    },
  }
</script>