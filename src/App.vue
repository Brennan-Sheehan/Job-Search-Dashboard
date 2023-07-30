<template>
  <div class="app">
    <NavBar/>
    <router-view class="router"/>

  </div>
</template>

<script setup>
import NavBar from "./components/Navigation/NavigationMain.vue";

</script>

<style>
* {
    margin: 0;
    padding: 0;
    outline: 0;
    appearance: none;
    border: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }
  
  html {
    font-size: 14px;
  }
  
  body {
    display: block;
    width: 100%;
    height: 100%;
    background-color: #39414798;
  }
  .app {
    display: flex;

  }
 

.router {
  flex-grow: 1;
  position: relative;
  display: flex;
  min-width: 0px;
  padding-left: 220px;
  z-index: 99;
  padding-left: 210px;
}
</style>
