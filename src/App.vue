<template>
  
    <div style="height: 100%">
      <div
        style="
          display: flex;
          flex-direction: column;
          min-width: 0px;
          height: 100%;
        "
      >
        <div style="height: 100%; display: flex; flex-direction: row">
          <NavBar />
          <router-view class="router" />
        </div>
      </div>
    </div>
  
</template>

<script setup>
import NavBar from "./components/Navigation/NavigationMain.vue";
</script>

<style>
#app {
  height: 100%;
}

.router {
  flex-grow: 1;
  position: relative;
  display: flex;
  min-width: 0px;
  padding-left: 220px;
  padding-left: 210px;
}
</style>
