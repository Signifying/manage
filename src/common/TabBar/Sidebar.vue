<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="rgb(14,27,69)"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu
                v-if="subItem.subs"
                :index="subItem.index"
                :key="subItem.index"
              >
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                  >{{ threeItem.title }}</el-menu-item
                >
              </el-submenu>
              <el-menu-item
                v-else
                :index="subItem.index"
                :key="subItem.index"
                >{{ subItem.title }}</el-menu-item
              >
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from "../bus";
export default {
  data() {
    return {
      collapse: false,
      items: [
        {
          icon: "el-icon-s-platform",
          index: "structure",
          title: "系统总览",
        },
        {
          icon: "el-icon-monitor",
          index: "monitoring",
          title: "运行监控",
          subs: [
            {
              index: "gridconnection",
              title: "微网并网点",
            },
            {
              index: "windgenerator",
              title: "风力发电",
            },
            {
              index: "pvgenerator",
              title: "光伏发电",
            },
            {
              index: "ess",
              title: "储能系统",
            },
            {
              index: "loadsystem",
              title: "负荷系统",
            },
          ],
        },
        {
          icon: "el-icon-data-line",
          index: "WPP",
          title: "风光预测",
          subs: [
            {
              index: "windprediction",
              title: "风电预测",
            },
            {
              index: "pvprediction",
              title: "光伏预测",
            },
          ],
        },
        {
          icon: "el-icon-data-analysis",
          index: "analysis",
          title: "统计分析",
          subs: [
            {
              index: "statisticanalysis",
              title: "统计分析",
            },
          ],
        }
      ],
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    },
  },
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("collapse", (msg) => {
      this.collapse = msg;
      bus.$emit("collapse-content", msg);
    });
  },
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 64px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
