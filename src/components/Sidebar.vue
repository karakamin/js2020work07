<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">甜甜一點-後台管理系統</a>
    <button class="navbar-toggler"
      type="button" data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" />
    </button>

    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: '產品頁面'}">產品列表</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: '優惠券'}">優惠卷列表</router-link>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: '訂單列表'}">訂單列表</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="signout">登出</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {};
  },
  methods: {
    signout() {
      this.$cookies.remove('token');

      // this.$bus.$emit('message:push', '登出成功', 'success');
      alert('登出成功');

      this.$router.push('/login');
    },
  },
};
</script>
