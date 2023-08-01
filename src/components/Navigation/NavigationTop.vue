<template>
  <div  class="main-top-nav">
      <div class="block-nav">
          <theme-button-vue/>
          <span class="material-symbols-sharp"> account_circle </span>
      </div>
  </div>
</template>

<script>
import ThemeButtonVue from '../ThemeButton.vue'
export default {
    components: {
        ThemeButtonVue
    }

}
</script>

<style scoped>
.main-top-nav{
    display: flex;
    padding-top: 10px;
}
.block-nav {
    display: flex;
    width: 96%;
    height: 3rem;
    background-color: var(--color-white);
    border-radius: 15px;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
}
span{
    font-size: 3rem;
}


</style>