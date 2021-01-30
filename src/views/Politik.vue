<template>
  <div>
    <AddComments @my-event="theEvent" />
    <CardProfile title="Thomas Laukkanen" text="Blablabla" />
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
      // alert('hej')
      console.log('a custom event from addComments')
    },
  },
}
</script>

<style></style>
