<template>
  <div class="unauthorized-page">
    <h1 class="title">Unauthorized</h1>
    <p class="message">Sorry, you are not authorized to access this page.</p>
    <p class="message">Please contact an administrator for assistance.</p>
  </div>
</template>

<style scoped>
.unauthorized-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f8f8;
  padding: 20px;
  text-align: center;
}

.title {
  font-size: 36px;
  margin-bottom: 20px;
}

.message {
  font-size: 18px;
  margin-bottom: 10px;
}
</style>
