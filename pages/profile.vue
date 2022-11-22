<template>
  <div class="container text-center mt-4">
    <h1 class="title">Profile</h1>

    <img :src="user.avatar_url" class="avatar" alt="User Avatar" />
    <p>Bio : {{ user.bio }}</p>
    <p>Location : {{ user.location }}</p>

    <div class="row justify-content-center">
        <div class="col-12 col-md-3" v-for="repo in repos" :key="repo.id">
            <div class="card border-0 shadow bd-20">
                <div class="card-content space-p">
                    <a :href="repo.html_url" target="_blank" rel="noopener noreferrer">{{ repo.name }}</a>
                    <p>Star : {{ repo.stargazers_count }}</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    async asyncData({ $axios }) {
        const baseURL = 'https://api.github.com' //สร้างตัวแปรเก็บค่า API

        /* วิธีแรก แยกก้อน */
        // const user = await $axios.$get(`${baseURL}/users/ThanwaTbp`)
        // const repos = await $axios.$get(`${baseURL}/users/ThanwaTbp/repos`)

        /* วิธีแรก รวมก้อน */
        const [user, repos] = await Promise.all([
            $axios.$get(`${baseURL}/users/ThanwaTbp`),
            $axios.$get(`${baseURL}/users/ThanwaTbp/repos`),
        ])
        
        return { user, repos }
    },
}
</script>

<style scoped>
    .avatar {
        width: 128px;
        height: 128px;
    }
</style>