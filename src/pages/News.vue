<template>
  <div class="news">
    <HeaderBar name="资讯中心"></HeaderBar>
    <div class="page-wrap">
      <ul class="list-view">
        <li class="list-cell" v-for="item in list">{{item}}</li>
      </ul>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script src="@/js/news.js"></script>

<style src="@/styles/news.less" lang="less"></style>
