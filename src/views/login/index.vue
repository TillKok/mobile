<template>
    <div class="login-wrap">
      <!-- 头部 -->
      <!-- 导航栏 -->
      <van-nav-bar title="登录" class="login-head"/>
      <!-- 导航栏结束 -->

      <!-- 表单 -->
      <van-cell-group>
        <van-field
          v-model="user.mobile"
          required
          clearable
          label="手机号"
          placeholder="请输入手机号"
        />

        <van-field
          v-model="user.code"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
        />
      </van-cell-group>
      <!-- 按钮 -->
      <div class="login-btn-box">
         <van-button type="info" class="login-btn" @click.prevent="handleLogin">登录</van-button>
      </div>
      <!-- 按钮结束 -->
      <!-- 表单结束 -->
    </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '13174315966',
        code: '123456'
      }
    }
  },
  methods: {
    async handleLogin () {
      try {
        const data = await login(this.user)
        this.$store.commit('setUser', data)
        this.$router.push({
          name: 'home'
        })
      } catch (err) {
        console.log(err)
        console.log('登录失败')
      }
    }
  }

}
</script>

<style lang="less" scoped>
.login-head{
  background-color: blueviolet;
}
.login-btn-box{
  padding: 20px;
  .login-btn{
    width: 100%;
  }
}
</style>
