<template>
  <div>
    <AddComments />
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
}
</script>

<style></style>
