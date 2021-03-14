/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/structure'
    },
    {
      path: '/',
      component: () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue'),
      meta: { title: '系统总览' },
      children: [
        {
          path: '/structure',
          component: () => import(/* webpackChunkName: "structure" */ '../views/structure/Structure.vue'),
          meta: { title: '系统结构' }
        },
        // {
        //   path: '/monitoring',
        //   component: () => import(/* webpackChunkName: "monitoring" */ '../views/monitoring/Monitoring.vue'),
        //   meta: { title: '运行监控' }
        // },
        {
          path: '/gridconnection',
          component: () => import(/* webpackChunkName: "gridConnection" */ '../views/gridConnection/GridConnection.vue'),
          meta: { title: '微网并网点' }
        },
        {
          path: '/windgenerator',
          component: () => import(/* webpackChunkName: "windGenerator" */ '../views/windGenerator/WindGenerator.vue'),
          meta: { title: '风力发电' }
        },
        {
          path: '/pvgenerator',
          component: () => import(/* webpackChunkName: "pvGenerator" */ '../views/pvGenerator/PvGenerator.vue'),
          meta: { title: '光伏发电' }
        },
        {
          path: '/ess',
          component: () => import(/* webpackChunkName: "ess" */ '../views/ess/Ess.vue'),
          meta: { title: '储能系统' }
        },
        {
          path: '/loadsystem',
          component: () => import(/* webpackChunkName: "loadSystem" */ '../views/loadSystem/LoadSystem.vue'),
          meta: { title: '负荷系统' }
        },
        {
          path: '/windprediction',
          component: () => import(/* webpackChunkName: "windPrediction" */ '../views/windPrediction/WindPrediction.vue'),
          meta: { title: '风电预测' }
        },
        {
          path: '/pvprediction',
          component: () => import(/* webpackChunkName: "pvPrediction" */ '../views/pvPrediction/PvPrediction.vue'),
          meta: { title: '光伏预测' }
        },
        {
          path: '/statisticanalysis',
          component: () => import(/* webpackChunkName: "statisticAnalysis" */ '../views/statisticAnalysis/StatisticAnalysis.vue'),
          meta: { title: '统计分析' }
        },
        
      ]
    },
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "login" */ '../views/login/Login.vue'),
      meta: { title: '登录' }
    },
    {
      path: '/404',
      component: () => import(/* webpackChunkName: "404" */ '../views/notFind/404.vue'),
      meta: { title: '404' }
    },
    {
      path: '/403',
      component: () => import(/* webpackChunkName: "403" */ '../views/forbidden/403.vue'),
      meta: { title: '禁止登陆' }
    }
  ]
});
