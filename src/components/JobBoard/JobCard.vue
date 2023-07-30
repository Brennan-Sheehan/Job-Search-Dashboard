<template>
  <button class="job-card" @click="showModal = true">
      <config-modal v-if="showModal" @close="showModal = false">
        <template v-slot:body> Hello, modal! </template>
      </config-modal>
      <h3>{{cards.title}}</h3>
      <p>{{cards.company}}</p>
      
  </button>
</template>

<script>
import ConfigModal from './JobCardModal.vue'
export default {
    props: ['cards'],
    components: {
      ConfigModal
    },
    data() {
      return {
        showModal: false,
      }
    }

}
</script>

<style scoped>

button {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  height: 6rem;
  width: 19rem;
  border-radius: 3px;
  margin: 0.4rem;
  
}


.job-card {
  background-color: rgb(255, 205, 96);
  box-shadow: 0 2rem 4rem rgba(53, 54, 70, 0.164);
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}
.job-card h3 {
  margin-left: 3rem;
  margin-top: 1rem;
}

.job-card p {
  margin-left: 3rem;
  margin-top: 0.5rem;
}


</style>