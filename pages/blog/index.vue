<template>
    <div class="container mt-4">
        <h1 class="title">Blog</h1>
        <div class="row">
            <div class="col-12 col-md-4 mt-4" v-for="post in viewBlog" :key="post.slug">
                <div class="card bd-20 border-0 shadow">
                    <div class="card-content space-p">
                        <nuxt-link :to="`/blog/${post.slug}`">
                            {{ post.title }}
                        </nuxt-link>

                        <p>{{ post.description }}</p>

                        <p>Create At : {{ post.createdAt }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({ $content }) {
        const viewBlog = await $content('blog').sortBy('createdAt', 'desc').fetch()
        return { viewBlog }
    }
}
</script>

<style>
    .space-p {
        padding: 20px 20px 0px 20px;
    }
</style>