<template>
  <div>
    <Sidebar />
    <div class="container-fluid">
      <div class="row">
        <main role="main" class="col-md-12 ml-sm-auto px-4">
          <router-view v-if="checkSuccess" :token="token" />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'Dashboard',
  components: {
    Sidebar,
  },
  data() {
    return {
      token: '',
      uuid: process.env.VUE_APP_UUID,
      checkSuccess: false,
    };
  },
  created() {
    this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');

    const url = `${process.env.VUE_APP_APIPATH}/auth/check`;

    // Axios 預設值
    this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
    this.$http.post(url, { api_token: this.token }).then((response) => {
      if (!response.data.success) {
        this.$router.push({
          path: 'login',
        });

        alert('出現錯誤惹，請與管理人員確認!');
      }
      this.checkSuccess = true;
    });
  },
};
</script>
<style lang="scss">
</style>
