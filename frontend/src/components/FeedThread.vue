<template>
  <div>
    <v-list-item-group>
      <v-list-item @click="open_window">
        <v-list-item-avatar>
            <img :src=activity.avatar alt="avatar">
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{activity.username}} made a {{activity.action}} to {{activity.repository}}</v-list-item-title>
          <v-list-item-subtitle>{{activity.content}}</v-list-item-subtitle>
          <v-list-item-subtitle>{{activity.createdAt}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </div>
</template>

<script>
export default {
    name: 'FeedThread',

    props: ['activity'],
    
    components: {
    },

    data: () => ({
        //
    }),
    methods: {
      open_window()
      {
        window.open(this.activity.url, '_blank')
      }
  },
}
</script>

<style>

</style>