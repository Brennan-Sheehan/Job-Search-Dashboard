<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h1 class="title">Add Job</h1>
          </div>
          <div class="modal-body">
            <form v-on:submit.prevent="addJobCard">
              <div class="form-element">
                <div class="label-style">
                  <p class="label-name">Company</p>
                  <p class="label">Required</p>
                </div>
              </div>
              <input type="text" id="company" v-model="newJob.company" />
              <div class="form-element">
                <div class="label-style">
                  <p class="label-name">Job Title</p>
                  <p class="label">Required</p>
                </div>
              </div>
              <input type="text" id="job-title" v-model="newJob.title" />
              <div class="form-element">
                <div class="label-style">
                  <p class="label-name">Board</p>
                  <p class="label">Required</p>
                </div>
              </div>
              <select name="boardName" id="board" v-model="newJob.card">
                <option value="">Please Select One</option>
                <option>Wishlist</option>
                <option>Applied</option>
                <option>Accepted</option>
              </select>
            </form>
          </div>

          <div class="modal-footer">
            <input
              id="discard"
              class="button"
              value="Discard"
              @click="$emit('close')"
            />
            <input
              id="save"
              class="button"
              value="Save"
              @click="$emit('close'), addJobCard()"
            />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      showModal: true,
      newJob: {
        id: "",
      },
    };
  },
  methods: {
    addJobCard() {
      console.log(this.newJob);

      this.$store.commit("ADD_JOB_CARD", this.newJob);
    },
  },
  props: ["cards"],
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-primary-modal);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  padding-bottom: 40px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: var(--box-shadow);
  transition: all 0.3s ease;
  z-index: 20;
}
h1 {
  color: #222;
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 15px;
}
p {
  color: #666;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 15px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.modal-header {
  height: 40px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-shrink: 0;
  border-bottom: 1px solid rgba(25, 4, 69, 0.1);
}

.modal-footer {
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid rgba(25, 4, 69, 0.1);
  padding: 5px 10px;
}

h1 {
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;
}
div.form-element {
  display: flex;
  flex-direction: row;
}

input {
  position: relative;
  box-sizing: border-box;
  border: 1px solid rgba(25, 4, 69, 0.1);
  padding: 0px 15px;
  box-shadow: var(--box-shadow);
  height: 30px;
  width: 100%;
  align-items: center;
}
select {
  position: relative;
  box-sizing: border-box;
  border: 1px solid rgba(25, 4, 69, 0.1);
  padding: 0px 15px;
  box-shadow: var(--box-shadow);
  height: 30px;
  width: 100%;
  align-items: center;
}
div.label-style {
  display: flex;
  flex-grow: 1;
  margin: 7px;
}
.label {
  text-align: left;
  font-family: lato;
  letter-spacing: 0px;
  margin: 0px;
  color: var(--color-dark);
  font-size: 13px;
  line-height: 18px;
  font-weight: 600;
}
.label-name {
  flex-grow: 1;
  opacity: 1;
  text-align: left;
  font-family: lato;
  letter-spacing: 0px;
  margin: 0px;
  color: var(--color-dark);
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
}

#save {
  background-color: var(--color-primary);
  color: var(--color-white);
  margin-left: 7px;
}

.button {
  cursor: pointer;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  letter-spacing: 0px;
  font-family: Lato;
  transition: all 0.4s ease-out 0s;
  text-align: center;
  margin: 0px;
  width: auto;
  font-weight: 600;
  border-radius: 6px;
  padding: 0px 8px;
  height: 28px;
  font-size: 13px;
  color: var(--color-primary);
  background-color: var(--color-white);
  border: 1px solid rgba(25, 4, 69, 0.2);
  width: 68px;
}
</style>
