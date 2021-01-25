<template>
  <div>
    <b-form @submit="onSubmit" v-if="show" class="">
      <b-form-group
        id="search-group"
        label="Sök ett jobb"
        label-for="seach-input"
        description="Skriv tex Front-end utvecklare"
      >
        <b-form-input
          id="search-input"
          v-model="form.text"
          type="text"
          placeholder="Vilket jobb söker du?"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Sök</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'SearchField',
  data() {
    return {
      form: {
        text: '',
      },
      show: true,
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
    },
  },
}
</script>

<style lang="scss" scoped></style>
