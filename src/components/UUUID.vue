<template>
  <div class="uuid-panel">
    <h3 class="uuid">{{ uuid }}</h3>
    <button class="button" @click="uuid = $uuid.v1()">Generate V1</button>
    <button class="button" @click="uuid = $uuid.v3()">Generate V3</button>
    <button class="button" @click="uuid = $uuid.v4()">Generate V4</button>
  </div>
</template>

<script>
import { uuid } from 'vue-uuid' // uuid object is also exported to things
// outside Vue instance.

const NAMESPACE = '65f9af5d-f23f-4065-ac85-da725569fdcd'

export default {
  data() {
    return {
      NAMESPACE,
      uuid: uuid.v1(),
      v1: this.$uuid.v1(),
      v3: this.$uuid.v3(),
      v4: this.$uuid.v4(),
      v5: this.$uuid.v5('Name 2', NAMESPACE),
    }
  },
}
</script>
