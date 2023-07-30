<template>
  <div class="job-board">
    <nav class="job-board-top-nav"></nav>
    <main class="job-board-main">
      <div class="job-board-main-spacer">
        <div class="job-board-main-spacer">
          <div class="job-board-list">
            <list-container v-for="list in jobList" v-bind:key="list.id" v-bind:list="list"/>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import ListContainer from "./JobBoardListContainer.vue";
export default {
  
  components: {
    ListContainer,
  },
  props: ['list'],
  computed: {
    jobList() {
      return this.$store.state.list
    }
  }
};
</script>

<style scoped>
.job-board {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.job-board-top-nav {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  column-gap: 10px;
  text-transform: capitalize;
  padding: 0px 6px;
  box-sizing: border-box;
  align-items: center;
  height: 45px;
  background-color: white;
  z-index: 2;
  flex-shrink: 0;
  border-bottom: 1px solid rgb(236, 233, 242);
  position: fixed;
  top: 0px;
  right: 0px;
}
.job-board-main {
  padding-top: 45px;
}

.job-board-main-spacer {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
}
.job-board-list {
  position: absolute;
  top: 0px;
  bottom: 0px;
  display: flex;
  background-color: rgb(253, 253, 255);
  flex-direction: row;
  
}


.list-containter:first-of-type {
  border-left: none;
}

.list-container {
  display: flex;
  flex-direction: column;
  width: 307px;
  vertical-align: top;
  padding: 30px 10px 0 10px;
  box-sizing: border-box;
  height: 100%;
  
}
</style>
