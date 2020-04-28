<template>
  <div class="headerBox">
    <b-row>
      <b-col cols="6" sm="6" md="6" lg="6">
        <div>
          <img src="../../assets/images/logo.png" />
        </div>
      </b-col>
      <b-col cols="6" sm="6" md="6" lg="6">
        <div @click="logout" class="logout">退出登录</div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$router.push("/login");
      window.localStorage.clear();
      window.sessionStorage.clear();
    }
  }
};
</script>
<style  scoped>
.headerBox {
  overflow: hidden;
  padding: 10px 10px 10px 20%;
  width: 100%;
  background-color: #fff;
}
.logout {
  line-height: 64px;
  color: #00b09f;
  cursor: pointer;
  font-size: 14px;
}
</style>