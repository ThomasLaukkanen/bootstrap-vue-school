<template>
  <div>
    <p :key="comment.uuid" v-for="comment in $store.state.comments">
      {{ comment.text }} {{ comment.name }}
    </p>

    <b-form @submit="onSubmit">
      <b-form-textarea
        v-model="comment.text"
        placeholder="Kommentera"
        max-rows="3"
        required
      ></b-form-textarea>
      <b-form-input
        type="text"
        placeholder="Namn"
        required
        v-model="comment.name"
      ></b-form-input>
      <b-button type="submit" variant="primary">Kommentera</b-button>
    </b-form>
  </div>
</template>

<script>
import { uuid } from 'vue-uuid'

export default {
  data() {
    return {
      comment: {
        text: '',
        name: '',
        uuid: uuid.v4(),
      },
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      this.$store.commit('addComment', this.comment)
      this.comment.uuid = this.$uuid.v4()
      this.comment.text = ''
      this.comment.name = ''
    },
  },
}
</script>

<style></style>
