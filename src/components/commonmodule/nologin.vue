<template>
  <div class="headerBox">
    <b-row>
      <b-col cols="6" sm="6" md="6" lg="6">
        <div>
          <img src="../../assets/images/logo.png" />
        </div>
      </b-col>
      <b-col cols="6" sm="6" md="6" lg="6"></b-col>
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
</style>