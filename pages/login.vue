<template>
  <div class="container">
    <div class="row mt-5">
        <div class="col-md-3 col-12"></div>
        <div class="col-md-6 col-12 card p-3 shadow border-0 bd-20">
            <h1 class="text-center">Sign In</h1>
            <form @submit="onSubmit">
                <div class="form-group">
                    <input 
                    v-model="email"
                    type="email" 
                    class="form-control" 
                    placeholder="Enter email" 
                    />
                </div>
                <div class="form-group">
                    <input 
                    v-model="password"
                    type="password" 
                    class="form-control" 
                    placeholder="Password" 
                    />
                </div>
                <button type="submit" class="btn btn-info btn-block">Submit</button>
                <div v-show="error" class="alert alert-danger" role="alert">
                    <p>Invalid Password {{ error }}</p>
                </div>
            </form>
        </div>
        <div class="col-md-3 col-12"></div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            error: null,
        }
    },
    method: {
       async onSubmit(e) {
            e.preventDefault()

            const payload = {
                data: {
                    email: this.email,
                    password: this.password,
                },
            }

            try {
                await this.$auth.loginWith('local', payload)
                this.$router.push('/')
            } catch (error) {
                this.error = error
            }
        },
    },
}
</script>

<style>

</style>