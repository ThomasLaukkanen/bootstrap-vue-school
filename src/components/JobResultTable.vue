<template>
  <div>
    <b-table striped hovers :items="items"> </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { jobb: 'frontend utvecklare', lön: 30000 },
        { jobb: 'Hacker', lön: 50000 },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
