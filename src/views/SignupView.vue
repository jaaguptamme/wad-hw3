<template>
  <header-comp></header-comp>
  <div class="content">
        <form action="index.html" @submit.prevent="validatePassword">
          <div class="form">
            <div class="inputs">
              <label for="email">Email</label>
              <input type="email" placeholder="Email" name="email" required v-model="email">
              <label for="password">Password</label>
              <input type="password" placeholder="Password" name="password" required v-model="password">
            </div>
            <div v-if="passwordError" class="passwordError">{{passwordError}}</div>
          <input id="signupButton" type="submit" value="Signup">
          </div>
        </form>
  </div>
  <footer-comp></footer-comp>
</template>

<script>
// @ is an alias to /src
import HeaderComp from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderComp,
    FooterComp
  },
  data: function () {
    return {
      email: '',
      password: '',
      passwordError: ''
    }
  },
  methods: {
    validatePassword () {
      if (this.password.length > 15) {
        this.passwordError = 'Length of password over 15 characters'
      } else {
        this.passwordError = ''
      }
    }
  }
}
</script>
<style scoped>
  .content *{
    font-size: 2rem;
  }
  .form{
    background-color: whitesmoke;
    margin: 0 10%;
    padding: 1%;
    border-radius: 1em 1em;
  }
  .inputs{
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    text-align: right;
  }
  .inputs * {
    margin-inline: 5%;
    margin-block: 0.5em;
  }
  .inputs input{
    width: 60%;
  }
  input::placeholder{
    text-align: center;
  }
  @media(max-width: 800px) {
      .form{
            margin: 0 0;
      }
      .inputs input{
        width: 80%;
      }
  }
  #signupButton{
    background-color: #87C4FF;
    border-radius: 1em 1em;
    padding-block: 0.5em;
    padding-inline: 1em;
  }
  .passwordError{
    color: red;
  }
</style>
