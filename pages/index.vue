<template>
  <div class="home">
    <div class="container">
      <h1>Welcome to My Gym Progress!</h1>
      <p>Please log in to access your account.</p>
      <v-btn @click="signIn('github', { callbackUrl: '/dashboard' })">Github</v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
const { signIn } = useAuth()
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/dashboard',
  }
})

</script>

<style>
.container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding-top: 50px;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #0062cc;
}
</style>
