<template>
  <div class="container">
    <h1>Photo</h1>
    <div class="row">
      <div class="col-md-3 col-12 mb-2" v-for="photo in photos.slice(0,8)" :key="photo.id">
        <div class="card border-0 shadow bd-20">
          <div class="card-content space-p">
            <nuxt-link :to="`/photos/${photo.id}`">
              <p>{{ photo.id }}</p>
              <p>{{ photo.author }}</p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const baseURL = 'https://picsum.photos'
    const photos = await $axios.$get(`${baseURL}/v2/list`)

    return { photos }
  }
}
</script>

<style>

</style>