<template>
  
    <div class="main" style="height: 100%">
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
.main {
  height: 100%;
  display: grid;
    width: 96%;
    margin: 0 auto;
    gap: 1.8rem;
    grid-template-columns: 12rem auto;
}

</style>
