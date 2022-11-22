<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <nuxt-link to="/" class="mr-2">
      <NuxtLogo />
    </nuxt-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item>
          <nuxt-link class="nav-link" to="/">
              HOME
          </nuxt-link>
        </b-nav-item>
        <b-nav-item>
          <nuxt-link class="nav-link" to="/blog">
              BLOG
          </nuxt-link>
        </b-nav-item>
        <b-nav-item>
          <nuxt-link class="nav-link" to="/profile">
              PROFILE
          </nuxt-link>
        </b-nav-item>
        <b-nav-item>
          <nuxt-link class="nav-link" to="/photos">
              PHOTOS
          </nuxt-link>
        </b-nav-item>
        <b-nav-item>
          <nuxt-link class="nav-link" to="/about">
              ABOUT
          </nuxt-link>
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <nuxt-link to="/login" class="btn btn-info mr-2 mb-2 mb-md-0">
          <strong>SIGN IN</strong>
        </nuxt-link>
        <nuxt-link to="/" class="btn btn-success mr-2">
          <strong>SIGN UP</strong>
        </nuxt-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    data() {
    return { active: null }
}
}
</script>

<style>

</style>