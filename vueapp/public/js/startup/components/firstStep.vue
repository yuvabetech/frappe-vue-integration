<template>
  <v-container>
      <v-row no-gutters>
          <v-col class="mx-2">
              <v-card height="376px">
                  <v-btn @click="showImage(i)" v-for="(p, i) in product" :key="i" class="m-2">
                    {{ p.name }} 
                  </v-btn>
              </v-card>
          </v-col>
          <v-col class="mx-2">
              <v-card height="376px" justify="center">
                  <v-img :src="current_img" height="350" width="400"></v-img>
              </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
    name: 'firstStep',
    data() {
        return {
            current_img: null,
            product:[
                {
                    name: 'croissant',
                    image_url: 'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2013/01/Croissant.jpg'
                },
                {
                    name: 'cheese cake',
                    image_url: 'https://www.thespruceeats.com/thmb/r8TCBwuaBBV5oBKc5vXzP7JvllU=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/gluten-free-new-york-cheesecake-1450985-hero-01-dc54f9daf38044238b495c7cefc191fa.jpg'
                }
            ]
        }
    },
    methods: {
        showImage(i) {
            this.current_img = this.product[i].image_url
        }
    }
}
</script>