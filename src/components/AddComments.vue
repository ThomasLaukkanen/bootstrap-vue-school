<template>
  <div>
    <section>
      <h2>Feedback sektion</h2>
      <small>{{ $store.state.comments.length }} kommentarer</small>
      <p v-if="$store.state.comments.length < 1">
        Det finns inga kommentarer ännu
        <b-icon icon="emoji-frown"></b-icon>
      </p>
      <p
        class="comments"
        v-else
        :key="message.uuid"
        v-for="message in $store.state.comments"
      >
        <b-avatar src="https://www.thispersondoesnotexist.com/image" />
        <b> {{ message.name }} </b>{{ message.time }}
        <br />
        {{ message.text }}
        <br />
        <b-icon
          class="hover"
          @click="message.likes++"
          icon="hand-thumbs-up"
          variant="success"
        ></b-icon>
        {{ message.likes }}
        <b-icon
          @click="message.dislikes++"
          icon="hand-thumbs-down"
          variant="danger"
          class="hover"
        ></b-icon>
        {{ message.dislikes }}
      </p>
    </section>

    <b-form @submit="onSubmit">
      <b-form-textarea
        v-model="comment.text"
        placeholder="Lämna en kommentar"
        max-rows="3"
        required
        maxlength="200"
      ></b-form-textarea>
      <p>{{ characterLimit }} / 200</p>
      <b-form-input
        type="text"
        placeholder="Ditt namn"
        required
        v-model="comment.name"
      ></b-form-input>
      <b-button @click="onClick" type="submit" variant="primary" class="mt-4"
        >Kommentera</b-button
      >
    </b-form>
  </div>
</template>

<script>
  import { uuid } from 'vue-uuid'
  import moment from 'moment'

  export default {
    data() {
      return {
        comment: {
          text: '',
          name: '',
          uuid: uuid.v4(),
          likes: 0,
          dislikes: 0,
          time: ''
        }
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
          // time: new Date().toLocaleString()
          time: new moment()
            .locale('sv')
            .utcOffset(1)
            .format('lll')
        })
        this.comment.text = ''
        this.comment.name = ''
        this.comment.uuid = this.$uuid.v4()
      },
      onClick() {
        this.$emit('my-event')
      }
    },
    computed: {
      characterLimit() {
        return this.comment.text.length
      }
    }
  }
</script>

<style lang="scss" scoped>
  b-icon:hover {
    cursor: pointer;
  }
  section {
    width: 50%;
    h2 {
      color: var(--primary);
    }
    .comments {
      margin-top: 2em;
      margin-bottom: 2em;
      background-color: var(--primary);
      border-radius: 8px;
      padding: 16px;
      color: var(--light);
    }
  }
  .hover {
    cursor: pointer;
  }

  @media (max-width: 870px) {
    section {
      width: 100%;
    }
  }
</style>
