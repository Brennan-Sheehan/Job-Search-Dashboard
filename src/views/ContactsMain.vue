<template>
  <div
    class="main"
    style="flex-grow: 1; position: relative; display: flex; min-width: 0px"
  >
    <div class="grid">
      <ContactCard
        v-for="contacts in contactList"
        v-bind:key="contacts.id"
        v-bind:contacts="contacts"
      />
      <button @click="showModal = true">+</button>
      <Teleport to="body">
        <contact-card-modal v-if="showModal" @close="showModal = false">
          <template v-slot:body> Hello, modal! </template>
        </contact-card-modal>
      </Teleport>
    </div>
  </div>
</template>

<script>
import ContactCard from "@/components/Contacts/ContactCard.vue";
import ContactCardModal from "@/components/Contacts/ContactCardModal.vue";
export default {
  components: {
    ContactCard,
    ContactCardModal,
  },
  computed: {
    contactList() {
      return this.$store.state.contacts;
    },
  },
  props: ["contacts"],
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style>
.grid {
  height: 100%;
  width: 100%;
  padding: 20px 2%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, minmax(0px, 1fr));
  grid-auto-rows: min-content;
  gap: 10px;
  max-width: 1000px;
}
button {
  background-color: var(--color-white);
  border: 1px solid var(--color-border);
  box-shadow: var(--box-shadow);
  color: var(--color-dark);
  border-radius: 15px;
  width: 30px;
  cursor: pointer;
}
</style>
