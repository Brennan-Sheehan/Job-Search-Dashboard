<template>
  <div style="padding: 4px 4px 4px">
    <button class="job-card" @click="showModal = true" :style="{backgroundColor: cards.color}">
      <Teleport to="body">
        <config-modal v-if="showModal" @close="showModal = false">
          <template v-slot:body> Hello, modal! </template>
        </config-modal>
      </Teleport>
      <div style="margin-top: 5px; max-width: 170px">
        <h3>{{ cards.title }}</h3>
        <p>{{ cards.company }}</p>
      </div>
      <div></div>
    </button>
  </div>
</template>

<script>
import ConfigModal from "./JobCardModal.vue";

export default {
  
  props: ["cards"],
  components: {
    ConfigModal,
  },
  data() {
    return {
      showModal: false,
      bgColor: 'rgb(225, 230, 93)'
    };
  },
};
</script>

<style scoped>
button {
  height: 85px;
  left: 0px;
  position: absolute;
  width: 100%;
}

.job-card {
  cursor: pointer;
  position: relative;
  border-right: 1px solid rgba(25, 4, 69, 0.1);
  border-bottom: 1px solid rgba(25, 4, 69, 0.1);
  box-shadow: var(--box-shadow-cards);
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  color:black;
}
.job-card h3 {
  margin-left: 1rem;
  margin-top: 1rem;
  
}

.job-card p {
  margin-left: 1rem;
  margin-top: 0.5rem;
  text-align: left;
  justify-self: flex-start;
}
</style>
