<template>
  <el-container style="height: 100%">
    <el-aside width="10%">
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="false"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="height:100%;"
      >
      <!-- <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">账户信息</span>
      </template>
      <el-menu-item-group>
        <span slot="title">分组一</span>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <span slot="title">选项4</span>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu> -->
    <el-menu-item index="1">
      <i class="el-icon-location"></i>
      <span slot="title">账户信息</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">转账</span>
    </el-menu-item>

</el-menu>
    </el-aside>
  </el-container>
</template>

<script>
export default {
  data(){
    return{
    }
  }
}
</script>
<style>

* {
  margin: 0;
  padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  /* padding: 30px; */
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
