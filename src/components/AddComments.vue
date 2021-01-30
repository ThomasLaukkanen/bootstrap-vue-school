<template>
  <div>
    <p :key="message.uuid" v-for="message in $store.state.comments">
      {{ message.text }} {{ message.name }}
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
      <b-button @click="onClick" type="submit" variant="primary"
        >Kommentera</b-button
      >
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
      this.$store.commit('addcomment', {
        uuid: this.$uuid.v4(),
        text: this.comment.text,
        name: this.comment.name,
      })
      this.comment.text = ''
      this.comment.name = ''
      this.comment.uuid = this.$uuid.v4()
    },
    onClick() {
      this.$emit('my-event')
    },
  },
}
</script>

<style></style>
