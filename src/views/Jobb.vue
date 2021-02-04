<template>
  <b-container>
    <h1>
      Här hittar du alla lediga jobb i Göteborg just nu
    </h1>
    <SearchField class="w-25 mt-4" />
  </b-container>
</template>

<script>
import SearchField from '@/components/SearchField.vue'

export default {
  components: {
    SearchField,
  },
}
</script>

<style></style>
