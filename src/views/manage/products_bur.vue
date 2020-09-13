<template>
  <div>
    <Loading :active.sync="isLoading" />
    <div class="text-right mt-4">
      <button class="btn btn-primary" @click="openModal('new')">建立新的產品</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">{{ item.origin_price | currency }}</td>
          <td class="text-right">{{ item.price | currency }}</td>
          <td>
            <span v-if="item.enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm"
              @click="openModal('edit', item)">編輯</button>
              <button class="btn btn-outline-danger btn-sm"
              @click="openModal('delete', item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pages="pagination" @emitPages="getProducts" />
  </div>
</template>
<script>
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'Products',
  components: {
    Pagination,
  },
  // 在元件內的資料是使用 function return 方式
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {
        imageUrl: [],
      },
      isNew: false, // 是否為新增
      isLoading: false, // Loading 狀態判斷
      status: {
        fileUploading: false,
      },
      uuid: process.env.VUE_APP_UUID,
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    // 取得產品資料
    getProducts(page = 1) {
      console.log(this.isLoading);
      this.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}/${this.uuid}/admin/ec/products?page=${page}`;

      this.$http
        .get(api)
        .then((response) => {
          console.log(response);
          this.products = response.data.data;
          this.pagination = response.data.meta.pagination;

          this.isLoading = false;
          console.log(this.products);
        })
        .catch((error) => {
          // alert("無法取得產品列表清單，資料取得異常");
          console.log(error.response.data);
        });
    },
  },
};
