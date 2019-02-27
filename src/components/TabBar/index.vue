<template>
  <div class="tab-bar-wrap">
      <div class="tab-bar-item" v-for="item in tabs" @click="onTabClick(item)">{{item.name}}</div>
  </div>
</template>

<script src="./index.js"></script>

<style src="./index.less" lang="less"></style>
