<template>
    <div class="header">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/signup">Signup</router-link>
      </nav>
    </div>
    <router-view/>
</template>

<script>
export default {
  name: 'HeaderComp'
}
</script>

<style scoped>

</style>
