<template>
  <v-app>
    <AppBar/>
      <v-parallax dark height="725" src="https://i.imgur.com/tpqDlUD.png">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thick mb-4 black--text" >CollabOn</h1>
          <h4 class="subheading black--text">Add it to your organization today!</h4>
          <div class="my-2">
            <v-btn href="https://github.com/apps/collabon" large color="black" class="white--text">Install</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-parallax>
  </v-app>
</template>

<script>
import AppBar from '../components/AppBar'

export default {
  name: 'App',

  components: {
    AppBar,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
  html, body {margin: 0; height: 100%; overflow: hidden}
</style>