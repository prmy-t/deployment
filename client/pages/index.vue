<template>
  <v-main>
    <v-row align="center">
      <v-col md="8" xs="12">
        <p class="text-h3 ml-8">Browse and Learn</p>
        <p class="text-h5 ml-8 font-weight-light">
          Commonly asked questions in Competitive Exams
        </p>
      </v-col>
      <v-col md="4" xs="12">
        <v-img height="350" width="auto" :src="`/images/tag.jpg`"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
        <p class="text-h4">Catagories</p>
      </v-col>
    </v-row>
    <v-row justify="space-around">
      <v-col v-for="i in 4" :key="i" xs="12" sm="6" md="3">
        <v-card dark color="indigo lighten-2">
          <v-img height="250" :src="`/images/catagory.jpg`"></v-img>
          <v-card-title> Catagory {{ i }}</v-card-title>
          <v-card-text>
            hello
          </v-card-text>
        </v-card>
      </v-col>
      <!-- <v-col xs="12" sm="6" md="3">
        <v-card>
          <v-card-title> Catagory 2</v-card-title>
        </v-card>
      </v-col>
      <v-col xs="12" sm="6" md="3">
        <v-card>
          <v-card-title> Catagory 3</v-card-title>
        </v-card>
      </v-col>
      <v-col xs="12" sm="6" md="3">
        <v-card>
          <v-card-title> Catagory 4</v-card-title>
        </v-card>
      </v-col> -->
    </v-row>
  </v-main>
</template>

<script>
export default {};
</script>
