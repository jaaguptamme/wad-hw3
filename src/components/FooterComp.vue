<template>
    <div class="footer">
      <p>Copyright © 2023 Best Blog, Inc.</p>
      <nav>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank">Contact</a> |
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank">Privacy Policy</a> |
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank">Manage Cookies</a> |
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank">Security</a>
      </nav>
    </div>
</template>

<script>
export default {
  name: 'FooterComp'
}
</script>

<style scoped>
  a{
    text-decoration: underline;
    margin: 5px;
  }
  nav{
    font-weight: bold;
    padding: 5px;
  }
  p{
    margin: 5px;
  }
  div.footer > *{
    font-size: small;
  }
</style>
