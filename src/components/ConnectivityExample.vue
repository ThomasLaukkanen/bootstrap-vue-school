<template>
  <v-offline
    online-class="online"
    offline-class="offline"
    @detected-condition="amIOnline"
  >
    <template v-slot:[onlineSlot] :slot-name="onlineSlot">
      ( Online: {{ onLine }} )
    </template>
    <template v-slot:[offlineSlot] :slot-name="offlineSlot">
      ( Online: {{ onLine }} )
    </template>
  </v-offline>
</template>

<script>
import VOffline from 'v-offline'
export default {
  components: {
    VOffline,
  },
  data() {
    return {
      onLine: null,
      onlineSlot: 'online',
      offlineSlot: 'offline',
    }
  },
  methods: {
    amIOnline(e) {
      this.onLine = e
    },
  },
}
</script>

<style lang="scss" scoped>
.offline {
  background-color: #fc9842;
  background-image: linear-gradient(315deg, #fc9842 0%, #fe5f75 74%);
}
.online {
  background-color: #00b712;
  background-image: linear-gradient(315deg, #00b712 0%, #5aff15 74%);
}
</style>
