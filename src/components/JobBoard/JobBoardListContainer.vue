<template>
  <section class="list-container" v-bind:key="list.id">
    <div class="list-contianer-header">
      <span id="star" class="material-symbols-sharp"> star </span>
      <span class="list-contianer-title">
        <div class="list-contianer-top-box">
          <form class="list-contianer-form">
            <input
              class="list-contianer-input"
              type="text"
              v-bind:placeholder="list.title"
              v-model="title"
              v-on:change.prevent="saveChanges()"
            />
          </form>

          <p>{{ this.list.cardCount }}</p>
        </div>
      </span>
    </div>
    <div class="add-job-block-container">
      <!-- <a class="add-job-block" href="./add-job">+</a> -->
      <button class="add-job-block" @click="showModal = true">+</button>
      <create-job-modal v-if="showModal" @close="showModal = false">
        <template v-slot:body> Hello, modal! </template>
      </create-job-modal>
    </div>
    <div class="job-board-cards">
      <ul>
          <job-cards
            v-for="cards in list.cards"
            v-bind:key="cards.id"
            v-bind:cards="cards"
          />
      </ul>
    </div>
  </section>
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
  z-index: 98;
}

.list-contianer-header {
  margin: 0px 28px 30px;
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  position: relative;
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
  display: block;
  transition: all 0.4s ease-out 0s;
}
.list-contianer-form {
  position: relative;
  display: block;
  margin-top: 0em;

}
.list-contianer-input {
  background-color: transparent;
  position: relative;
  display: flex;
  align-items: center;
  flex-grow: 1;
  width: 100%;
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
  letter-spacing: 1px;
  position: relative;
  bottom: 5px;
  font-weight: 400;
  margin: 0px;
  text-transform: uppercase;
  text-align: center;
  color: rgba(25, 4, 69, 0.5);
  font-size: 14px;
  line-height: 21px;
}

.add-job-block {
  line-height: 35px;
  vertical-align: middle;
  font-size: 25px;
  display: inline-block;
  background-color: #fff;
  box-shadow: 0px 2px 7px rgba(25, 4, 69, 0.05);
  border: 1px solid rgba(25, 4, 69, 0.1);
  width: 100%;
  height: 3rem;
  border-radius: 4px;
  text-align: center;
  color: rgba(25, 4, 69, 0.5);
  transition: all 0.5s ease;
  cursor: pointer;
  z-index: 99;
}
.job-board-cards {
  display: flex;
  position: relative;
  /* border: 0.1rem solid rgb(27, 27, 27); */
  height: 86vh;
  width: 20rem;
}

.job-board-cards ul {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

</style>
