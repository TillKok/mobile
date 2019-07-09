<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar title="首页" fixed/>
    <!-- 头部结束 -->
    <!-- 频道标签 -->
    <van-tabs class="channel-tabs" v-model="activeChannelIndex">
      <van-tab title="标签 1">
        <van-pull-refresh v-model="pullRefreshLoading" @refresh="onRefresh">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <van-cell
              v-for="item in list"
              :key="item"
              :title="item"
            />
          </van-list>
        </van-pull-refresh>

      </van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
    <!-- 频道标签结束 -->

    <!-- 底部导航 -->
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/qa">问答</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/video">视频</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
    <!-- 底部导航结束 -->
  </div>
</template>

<script>
export default {
  name: 'HomeIndex',
  data () {
    return {
      activeChannelIndex: 0,
      list: [],
      loading: false,
      finished: false,
      pullRefreshLoading: false
    }
  },
  methods: {
    onLoad () {
      console.log('onLoad')
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        this.loading = false

        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
    },
    onRefresh () {
      setTimeout(() => {
        this.pullRefreshLoading = false
      }, 3000)
    }
  }
}
</script>

<style lang="less" scoped>
  .channel-tabs {
    margin-bottom: 100px;
  }
  .channel-tabs .van-tabs_wrap {
    position: fixed;
    top: 92px;
  }
</style>
