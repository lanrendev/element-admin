<template>
  <el-row class="container">
    <el-col :span="24" class="header">
      <el-col :span="10" class="logo">
        <img src="@/assets/logo.png" />
        {{ sysName }}
      </el-col>
    </el-col>
    <el-col :span="24" class="main">
      <aside class="menu-expanded">
        <!--导航菜单-->
        <el-menu
          :default-active="$route.path"
          @open="handleopen"
          @close="handleclose"
          @select="handleSelect"
          unique-opened
          router
        >
          <template v-for="(item, index) in $router.options.routes">
            <el-submenu :key="index" :index="index + ''">
              <template slot="title">{{ item.name }}</template>
              <el-menu-item
                v-for="child in item.children"
                :index="child.path"
                :key="child.path"
                >{{ child.name }}</el-menu-item
              >
            </el-submenu>
          </template>
        </el-menu>
      </aside>
      <section class="content-container">
        <div>
          <el-col :span="24" class="breadcrumb-container">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item
                v-for="item in $route.matched"
                :key="item.path"
              >
                {{ item.name }}
              </el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col :span="24" class="content-wrapper">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </el-col>
        </div>
      </section>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      sysName: '懒人听书'
    }
  },
  methods: {
    handleopen() {
      //console.log('handleopen');
    },
    handleclose() {
      //console.log('handleclose');
    },
    handleSelect(a, b) {
      console.log(a, b)
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/vars.scss';

.container {
  position: absolute;
  top: 0px;
  bottom: 0px;

  width: 100%;
  .header {
    height: 60px;

    color: #fff;
    background: $color-primary;

    line-height: 60px;
    .userinfo {
      float: right;

      padding-right: 35px;

      text-align: right;
      .userinfo-inner {
        cursor: pointer;

        color: #fff;
        img {
          float: right;

          width: 40px;
          height: 40px;
          margin: 10px 0px 10px 10px;

          border-radius: 20px;
        }
      }
    }
    .logo {
      width: 230px;
      height: 60px;
      padding-right: 20px;
      padding-left: 20px;

      font-size: 22px;
      img {
        float: left;

        width: 30px;
        margin: 15px 5px 0 0;
      }
      .txt {
        color: #fff;
      }
    }
  }
  .main {
    position: absolute;
    top: 60px;
    bottom: 0px;

    display: flex;
    overflow: hidden;

    aside {
      flex: 0 0 230px;

      width: 230px;
      .el-menu {
        height: 100%;
      }
    }
    .menu-expanded {
      flex: 0 0 230px;

      width: 230px;
    }
    .content-container {
      overflow-y: scroll;
      flex: 1;

      padding: 20px;

      .breadcrumb-container {
        padding-bottom: 15px;
      }

      .content-wrapper {
        box-sizing: border-box;

        background-color: #fff;
      }
    }
  }
}
</style>
