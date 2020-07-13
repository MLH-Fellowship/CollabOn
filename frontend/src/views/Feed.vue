<template>
  <div>
    <v-app>
      <AppBar/>
      <v-container>
        <br><br><br>
        <v-layout row>
          <v-flex xs12 md3>
            <OrgInfo/>
          </v-flex>
          <v-flex xs12 md9>
              <FeedList/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import AppBar from '../components/AppBar'
import FeedList from '../components/FeedList'
import OrgInfo from '../components/OrgInfo'

export default {
  components: {
    AppBar,
    FeedList,
    OrgInfo
  }
}
  
</script>