<template>
  <div>
    <b-table
      striped
      hover
      :items="items"
      :fields="fields"
      class="shadow rounded"
      responsive
    >
    </b-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      items: [],
      fields: [
        {
          key: 'datetime',
          sortable: true,
          label: 'Datum',
        },
        { key: 'summary', sortable: true, label: 'Summering' },
        { key: 'url', sortable: true, label: 'Länk' },
        {
          key: 'type',
          sortable: true,
          label: 'Typ',
        },
      ],
    }
  },
  created() {
    axios
      .get('https://polisen.se/api/events?locationname=G%C3%B6teborg')
      .then((response) => (this.items = response.data))
  },
}
</script>

<style lang="scss" scoped></style>
