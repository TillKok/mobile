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
          :error-message="errors.mobile"
        />

        <van-field
          v-model="user.code"
          type="password"
          label="验证码"
          placeholder="请输入验证码"
          required
          :error-message="errors.code"
        />
      </van-cell-group>
      <!-- 按钮 -->
      <div class="login-btn-box">
         <van-button type="info" :loading="loginLoading" loading-text="登陆中..." class="login-btn" @click.prevent="handleLogin">登录</van-button>
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
      },
      loginLoading: false,
      errors: {
        mobile: '',
        code: ''
      }
    }
  },
  methods: {
    async handleLogin () {
      this.loginLoading = true
      try {
        const { mobile, code } = this.user
        const errors = this.errors
        if (mobile.length) {
          errors.mobile = ''
        } else {
          errors.mobile = '手机号不能为空'
          return
        }

        if (code.length) {
          errors.code = ''
        } else {
          errors.code = '验证码不能为空'
          return
        }
        this.loginLoading = true

        const data = await login(this.user)
        this.$store.commit('setUser', data)
        this.$router.push({
          name: 'home'
        })
      } catch (err) {
        console.log(err)
        console.log('登录失败')
      }
      this.loginLoading = false
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
