<template>
  <div class="container">
    <Loading :active.sync="isLoading"></Loading>
    <form class="form-signin" @submit.prevent="signin">
      <h3 class="h3 mb-3 font-weight-normal">Login</h3>
      <div class="form-group">
        <label for="inputEmail" class="sr-only">帳號</label>
        <input class="form-control" type="email" id="inputEmail"
          v-model="user.email" placeholder="請輸入 E-mail" required autofocus/>
      </div>
      <div class="form-group">
        <label for="inputPwd" class="sr-only">密碼</label>
        <input
          class="form-control"
          type="password"
          id="inputPwd"
          v-model="user.password"
          placeholder="請輸入密碼"
          required
        />
      </div>
      <button class="btn btn-lg btn-info btn-block" type="submit">登入</button>
      <!--<button class="btn btn-lg btn-danger btn-block" type="button" >登出</button> -->
      <!-- <button class="btn btn-lg btn-info btn-block" type="button" >驗證</button> -->
    </form>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      isLoading: false,
    };
  },
  methods: {
    signin() {
      this.isLoading = true; // 開啟 Loading 效果
      const api = `${process.env.VUE_APP_APIPATH}/auth/login`;

      this.$http.post(api, this.user).then((res) => {
        const { token } = res.data;
        const { expired } = res.data;

        document.cookie = `hexToken=${token};expires=${new Date(
          expired * 1000,
        )};`;
        alert('登入成功！');
        // console.log(this.$bus);
        this.$bus.$emit('message:push', '登入成功', 'success');
        this.isLoading = false;
        this.$router.push('/manage/Products');
      })
        .catch((error) => {
          this.$$bus.$emit(
            'message:push',
            `登入失敗！請重新確認，錯誤訊息為${error}`,
            'danger',
          );
          console.log(error);
          this.isLoading = false;
        });
    },
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

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>
