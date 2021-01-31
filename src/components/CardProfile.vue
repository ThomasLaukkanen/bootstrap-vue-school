<template>
  <div>
    <b-card
      :title="title"
      :img-src="img"
      img-top
      style="max-width: 15rem"
      class="mb-2"
      :sub-title="subtitle"
    >
      <b-card-text>
        {{ text }}
      </b-card-text>

      <b-button href="#" variant="primary">Läs mer</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'CardProfile',
  props: {
    title: String,
    img: String,
    text: String,
    subtitle: String,
  },
}
</script>

<style></style>
