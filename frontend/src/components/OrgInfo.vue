<template>
  <div>
    <v-avatar size="180" class="org-logo">
        <img :src=info.avatar_url alt="avatar">
    </v-avatar>
    <h1>{{info.login}}</h1>
    <MembersList :members='members'/>
  </div>
</template>

<script>
import MembersList from './MembersList'
import axios from 'axios'

export default {
    name: 'OrgInfo',
    data() {
      return {
        org: null,
        info: null,
        members: []
      };
    },
    created() {
      this.org = this.$route.params.org
    },
    mounted() {
      axios
        .get('http://localhost:4000/org/' + this.org + '/info')
        .then(response => (this.info = response.data));
      axios
        .get('http://localhost:4000/org/' + this.org + '/members')
        .then(response => (this.members = response.data));
    },
    components: {
      MembersList
    },
}
</script>

<style>

.org-logo {
  margin: 10px;
}

</style>