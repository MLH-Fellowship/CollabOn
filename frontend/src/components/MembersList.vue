<template>
    <v-list>
        <div v-for="member in members" :key="member.index">
          <Member :member='member'/>
        </div>
    </v-list>
</template>

<script>
import Member from './Member'

export default {
    name: 'MembersList',
    components: {
        Member
    },
    props: ['members']
}
</script>

<style>

</style>