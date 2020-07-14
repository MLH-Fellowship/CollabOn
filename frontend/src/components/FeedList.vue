<template>
  <div>
      <v-list three-line shaped inactive>
        <div v-for="user_activity in user_data" :key="user_activity.index">
          <FeedThread :activity='user_activity'/>
        </div>
      </v-list>
  </div>
</template>

<script>
import FeedThread from './FeedThread'

export default {
    name: 'FeedList',
    components: {
        FeedThread,
    },
    data() {
      return {
        user_data: [],
        doneLoading: true,
        org: null
      };
    },
    created() {
      this.org = this.$route.params.org
    },
    mounted () {
      this.$http.get('/org/' + this.org).then(response => {
        this.user_data = response.data;
      });
    }
}
</script>

<style>

</style>