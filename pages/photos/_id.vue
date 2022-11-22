<template>
  <div class="container">
    <h1>Photo Details</h1>
    <img class="img-pho mb-2" :src="photo.download_url" alt="Photo Image" />
    <p>Author : {{ photo.author }}</p>
  </div>
</template>

<script>
export default {
    async asyncData({ $axios, params }) {
        const photo = await $axios.$get(
          `https://picsum.photos/id/${params.id}/info`
          )

        return { photo }
    },
}
</script>

<style scoped>
    .img-pho {
        width: 480px;
    }
</style>