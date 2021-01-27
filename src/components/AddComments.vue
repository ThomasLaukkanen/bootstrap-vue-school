<template>
  <div>
    <p :key="comment" v-for="comment in $store.state.comments">
      {{ comment.text }} {{ comment.name }}
    </p>

    <b-form @submit="onSubmit">
      <b-form-textarea
        v-model="comment"
        placeholder="Kommentera"
        max-rows="3"
        required
      ></b-form-textarea>
      <b-form-input type="text" placeholder="namn" required></b-form-input>
      <b-button type="submit" variant="primary">Kommentera</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment: {
        text: '',
        name: '',
      },
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      this.$store.commit('addComment', this.comment)

      this.comment = ''
      this.comment = 'text'
    },
  },
}
</script>

<style></style>
