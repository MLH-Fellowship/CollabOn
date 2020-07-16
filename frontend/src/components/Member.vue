<template>
    <v-list-item-group>
        <v-list-item>
            <v-list-item-avatar>
                <img :src=member.avatar_url alt="avatar">
            </v-list-item-avatar>
            <v-list-item-content>
                {{member.login}}
            </v-list-item-content>
        </v-list-item>
    </v-list-item-group>
</template>

<script>
export default {
    props: ['member']
}
</script>

<style>

</style>