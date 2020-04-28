<template>
  <div class="contain">
    <div class="loginBox">
      <b-row>
        <b-col cols="12" sm="6" md="6" lg="6">
          <div>
            <img src="../assets/images/logologin.png" alt />
          </div>
          <div class="offset"></div>
        </b-col>
        <b-col cols="12" sm="6" md="6" lg="6">
          <h3>用户登录</h3>
          <div class="inputCardNum">
            <i class="ic-card"></i>
            <b-form-input
              id="input-valid"
              required="required"
              v-model="cardNumber"
              placeholder="请输入就诊卡号"
            ></b-form-input>
          </div>
          <div class="logBtn">
            <b-button variant="danger" @click.prevent.stop="lognBtn">登 录</b-button>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cardNumber: "",
      orderNoInfo: {}
    };
  },
  methods: {
    async lognBtn() {
      if (this.cardNumber.trim() == "") {
        return;
      } else {
        const { data: res } = await this.$http.post("checkList/confirmInfo", {
          orderNo: this.cardNumber
        });
        if (res.code != 200 || res.data == null)
          return this.$toast.fail("卡号不存在");
        this.orderNoInfo = res.data;
        window.sessionStorage.setItem("orderNo", this.cardNumber);
        window.localStorage.setItem(
          "userInfo",
          JSON.stringify(this.orderNoInfo)
        );
        this.$router.push("/details");
      }
    }
  }
};
</script>
<style scoped>
.contain {
  height: 100%;
  background: #14b3a4 url("../assets/images/loginbg.jpg") no-repeat bottom
    center;
  background-size: contain;
}
.loginBox {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 80%;
  max-width: 1200px;
  min-height: 390px;
  margin: 0 auto;
  padding: 5%;
  background: rgba(0, 0, 0, 0.35);
  color: #fff;
}
h3 {
  font-size: 16px;
  margin-bottom: 22px;
}
input,
input:focus {
  border: none;
  outline: none;
  box-shadow: none !important;
  color: #fff;
  padding-left: 40px;
  background-color: transparent;
  font-size: 13px;
}
input::placeholder {
  color: #fff;
  font-size: 13px;
}
.inputCardNum {
  border-bottom: 1px solid #fff;
  padding-bottom: 5px;
}
.form-control {
  border-radius: 0;
}
.offset {
  min-height: 100px;
}
.ic-card {
  position: absolute;
  left: 20px;
  top: 38px;
  width: 34px;
  height: 40px;
  background: url("../assets/images/ics.png");
  background-position: -136px -581px;
}
.logBtn {
  text-align: center;
  margin-top: 10%;
}
.logBtn button {
  width: 40%;
}
</style>