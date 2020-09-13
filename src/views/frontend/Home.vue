<template>
  <div class="container">
    <router-link to="/login">登入後台</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
html,
body {
  height: 100%;
  text-align: center;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
