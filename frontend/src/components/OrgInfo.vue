<template>
  <div>
    <v-avatar size="180" class="org-logo">
        <img src="https://avatars0.githubusercontent.com/u/65834464?s=200&v=4" alt="avatar">
    </v-avatar>
    <h1>{{$route.params.org}}</h1>
    <MembersList/>
  </div>
</template>

<script>
import MembersList from './MembersList'
export default {
    name: 'OrgInfo',

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