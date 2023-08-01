<template>
  <div class="main" style="flex-grow: 1; position: relative; display: flex; min-width: 0px">
      <div class="grid">
          <ContactCard v-for="contacts in contactList" v-bind:key="contacts.id" v-bind:contacts="contacts" />
      </div>
  </div>
</template>

<script>
import ContactCard from '@/components/ContactCard.vue'

export default {
    components: {
        ContactCard
    },
    computed: {
        contactList() {
      return this.$store.state.contacts
    }
    },
    props:['contacts']
}
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
</style>