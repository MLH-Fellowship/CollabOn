<template>
  <div>
    <v-list-item-group>
      <v-list-item>
        <v-list-item-avatar>
            <img src="https://i.imgur.com/fxd3f7t.png" alt="avatar">
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>John pushed some commits to {{$route.params.org}}</v-list-item-title>
          <v-list-item-subtitle>Add some styling to</v-list-item-subtitle>
          <v-list-item-subtitle>Timestamp: 12-07-2020:04:35</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </div>
</template>

<script>
export default {
    name: 'FeedThread',
    
    components: {
    },

    data: () => ({
        //
    }),
}
</script>

<style>

</style>