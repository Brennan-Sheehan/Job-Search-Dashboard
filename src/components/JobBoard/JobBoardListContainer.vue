<template>
  <div class="list-container" v-bind:key="list.id" style="display: flex; flex-direction:column">
    <div class="list-contianer-header" style="margin: 0px 28px 30px; flex-shrink:0; flex-grow:0;display:flex; flex-direciton:row; position:relative">
      <span id="star" class="material-symbols-sharp"> star </span>
      <span class="list-contianer-title" style="display:flex; flex-direction: column;">
        <div class="list-contianer-top-box">
          <form style="postion:relative">
            <input
              class="list-contianer-input"
              type="text"
              v-bind:placeholder="list.title"
              v-model="title"
              v-on:change.prevent="saveChanges()"
            />
          </form>
        </div>
        <p style="letter-spacing: 1px; postion:relative; bottom:5px">{{ this.list.cardCount }} JOBS</p>
        
      </span>
    </div>
    <div class="add-job-block-container" style="flex: 0 0 45px">
      <button class="add-job-block" @click="showModal = true">+</button>
      <Teleport to="body">
        <create-job-modal v-if="showModal" @close="showModal = false">
          <template v-slot:body> Hello, modal! </template>
        </create-job-modal>
      </Teleport>
    </div>
    <div class="job-board-cards" style="flex-grow:1; position:relative">
      <ul>
        <div style="width:auto; height:828px; max-width:287px; max-height:828px; overflow:hidden; position:relative">
          <job-cards
            v-for="cards in list.cards"
            v-bind:key="cards.id"
            v-bind:cards="cards"
            
          />
        </div>
          
      </ul>
    </div>
  </div>
</template>

<script>
import JobCards from "./JobCard.vue";
import CreateJobModal from "./JobCardCreateModal.vue";

export default {
  data() {
    return {
      title: "",
      showCreateModal: false,
      showModal: false,
    };
  },
  components: {
    JobCards,
    CreateJobModal,

  },
  props: ["list"],
  methods: {
    saveChanges() {
      this.$store.commit("CHANGE_LIST_TITLE", this.list.id, this.title);
    },
    jobList() {
      return this.$store.state.list.cards;
    },
  },
  computed: {
    listLength() {
      return this.list.cards;
    },
  },
};
</script>

<style scoped>
.list-container {
  display: flex;
  flex-direction: column;
  z-index: 2;
  background-color: var(--color-white);
  border-radius: 10px;
  color: var(--color-dark);
  
}


#star {
  width: 18px;
  height: 18px;
  margin-top: 15px;
  align-items: center;
}
.list-contianer-title {
  display: flex;
  flex-direction: column;
}
.list-contianer-top-box {
  transition: all 0.4s ease-out 0s;
}

.list-contianer-input {
  background-color: transparent;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  min-height: 40px;
  padding: 0px 15px;
  margin: 0px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
}

div p {
  transition: all 0.2s ease-out 0s;
  font-family: lato;
  font-weight: 400;
  margin: 0px;
  text-transform: uppercase;
  text-align: center;
  color: var(--color-dark);
  font-size: 14px;
  line-height: 21px;
}

.add-job-block {
  line-height: 35px;
  vertical-align: middle;
  font-size: 25px;
  display: inline-block;
  background-color: var(--color-white);
  box-shadow: var(--box-shadow);
  border: 1px solid var(--color-border);
  width: 100%;
  border-radius: 4px;
  text-align: center;
  color: var(--color-dark);
  transition: all 0.5s ease;
  cursor: pointer;
}


.job-board-cards ul {
  box-sizing: border-box;
    direction: ltr;
    height: 695px;
    position: relative;
    width: 100%;
    will-change: transform;
    overflow: auto;
    border-radius: 4px;
    padding: 3px;
}

</style>
