<template>
  <div class="tabbar-layout">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <!-- 底部导航 -->
    <div class="positi-fixed">
      <van-tabbar v-model="active" @change="onChange" active-color="#b73c64" inactive-color="#8e8e8e">
        <van-tabbar-item v-for="tab in tabs" :key="tab.path" :to="tab.path" replace icon="home-o">
          <span>{{tab.name}}</span>
          <template #icon="props">
            <img :src="props.active ? tab.active : tab.inactive" />
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
import { Notify } from 'vant';
export default {
  name: 'TabbarLayout',
  data(){
    return {
      active: 0,
      tabs: [
        {
          name: '首页',
          path: '/home',
          num: 0,
          active: require('@/assets/image/tabbar/home-on.png'),
          inactive: require('@/assets/image/tabbar/home-off.png')
        },
        {
          name: '分类',
          path: '/catalog',
          num: 0,
          active: require('@/assets/image/tabbar/menu-on.png'),
          inactive: require('@/assets/image/tabbar/menu-off.png')
        },
        {
          name: '购物车',
          path: '/cart',
          num: 0,
          active: require('@/assets/image/tabbar/cart-on.png'),
          inactive: require('@/assets/image/tabbar/cart-off.png')
        },
        {
          name: '我的',
          path: '/user',
          num: 0,
          active: require('@/assets/image/tabbar/my-on.png'),
          inactive: require('@/assets/image/tabbar/my-off.png')
        }
      ]
    }
  },
  methods: {
    onChange(index) {
      // Notify({ type: 'primary', message: index });
    },
  }
}
</script>
<style lang="less">
.tabbar-layout{
  height: 50px;
}
.positi-fixed{
  height: 50px;
}
</style>
