<template>
  <section class="job-board">
    <main class="job-board-main">
      <div class="job-board-main-spacer">
        <div class="job-board-second-spacer">
          <div class="job-board-list">
            <list-container v-for="jobBoardLists in getJobBoardList" v-bind:key="jobBoardLists.id" v-bind:jobBoardLists="jobBoardLists"/>
            <button @click="addJobList()">+ ADD LIST</button>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import ListContainer from "../components/JobBoard/JobBoardListContainer.vue";
import {mapGetters} from 'vuex'
export default {
  
  components: {
    ListContainer,
  },
  data() {
    return {
      newList: {
        id: this.$store.state.jobBoardLists.length,
        title: 'List Title',
        cards: [],
        cardCount: 0
      }
    }
  },
  props: ['jobBoardLists', 'jobCards'],
  
  methods: {
    addJobList() {
      this.$store.dispatch('ADD_JOB_LIST', this.newList)
    },
    getJobBoard() {
      this.$store.dispatch('GET_JOB_LIST')
    }
  },
  created() {
    this.getJobBoard();
  },
  computed: {
    ...mapGetters([
      'getJobBoardList',
    ])
  }
};
</script>

<style scoped>
.job-board {
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  height: 100%;
  width: 100%;
  
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
  flex-grow: 1;
  display: flex;

}

.job-board-main-spacer {
  width: 100%;
  position: relative;
}
.job-board-second-spacer {
  width: 100%;
  height: 100%;
  position: relative;
}
.job-board-list {
  position: absolute;
  top: 0px;
  bottom: 15px;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  gap: 5px;
  box-shadow: var(--box-shadow);
}


.list-container {
  width: 307px;
  vertical-align: top;
  padding: 30px 10px 10px 10px;
  box-sizing: border-box;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.116);
  
  
}
button {
  width: 307px;
  height: 80px;
}
</style>
