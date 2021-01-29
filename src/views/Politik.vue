<template>
  <div>
    <AddComments @my-event="theEvent" />
    <CardProfile />
  </div>
</template>

<script>
import CardProfile from '@/components/CardProfile.vue'
import AddComments from '@/components/AddComments.vue'
export default {
  name: 'Politik',
  components: {
    CardProfile,
    AddComments,
  },
  methods: {
    theEvent() {
      alert('hej')
    },
  },
}
</script>

<style></style>
