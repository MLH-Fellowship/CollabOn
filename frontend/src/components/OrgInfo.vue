<template>
  <div>
    <v-avatar color="orange" size="180" class="org-logo">
        <span class="white--text headline">LOGO</span>
    </v-avatar>
    <h1>Bot-Test-Org</h1>
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