<template>
  <div>
    <p :key="comment" v-for="comment in $store.state.comments">{{ comment }}</p>
    <b-form-textarea
      v-model="comment"
      placeholder="Kommentera"
    ></b-form-textarea>
    <b-button @click="$store.commit('addComment', comment)" variant="primary"
      >Kommentera</b-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment: '',
    }
  },
}
</script>

<style></style>
