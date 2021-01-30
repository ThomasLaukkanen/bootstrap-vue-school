<template>
  <div>
    <section>
      <h2>Feedback sektion</h2>
      <small>{{ $store.state.comments.length }} kommentarer</small>

      <p v-if="$store.state.comments.length < 1">
        Det finns inga kommentarer ännu
        <b-icon icon="emoji-frown"></b-icon>
      </p>
      <p v-else :key="message.uuid" v-for="message in $store.state.comments">
        <b-avatar src="https://www.thispersondoesnotexist.com/image"></b-avatar>
        <b> @ {{ message.name }} </b>
        {{ message.text }}
        <br />
        {{ message.time }}

        <b-icon
          @click="message.likes++"
          icon="hand-thumbs-up"
          variant="success"
        ></b-icon>
        {{ message.likes }}
        <b-icon
          @click="message.dislikes++"
          icon="hand-thumbs-down"
          variant="danger"
        ></b-icon>
        {{ message.dislikes }}
        ratio {{ (message.likes / message.dislikes).toFixed(1) }}
      </p>
    </section>

    <b-form @submit="onSubmit">
      <b-form-textarea
        v-model="comment.text"
        placeholder="Lämna en kommentar"
        max-rows="3"
        required
      ></b-form-textarea>
      <b-form-input
        type="text"
        placeholder="Ditt namn"
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
        likes: 0,
        dislikes: 0,
        time: '',
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
        likes: this.comment.likes,
        dislikes: this.comment.dislikes,
        time: new Date().toLocaleString(),
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

<style lang="scss" scoped>
b-icon:hover {
  cursor: pointer;
}
section {
  width: 50%;
}
</style>
