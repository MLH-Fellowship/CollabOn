<template>
    <v-app-bar
      app
      color="dark"
      dark
    >
      <div @click="Redirect" class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://i.imgur.com/fxd3f7t.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://i.imgur.com/R3ujvf2.png"
          width="100"
        />
      </div>
    </v-app-bar>
</template>

<script>

export default {
  name: 'AppBar',

  components: {
  },

  data: () => ({
    //
  }),
  methods: {
  Redirect()
    {
      window.location.href = "/";
    }
  },
};
</script>