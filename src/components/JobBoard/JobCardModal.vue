<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h1 class="title">Add Job</h1>
          </div>
          <div class="modal-body">
            <form>
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
                <input
                  type="text"
                  id="board"
                  v-model="newJob.card"
                  
                />
              </div>
            </form>
          </div>

          <div class="modal-footer">
            <div class="buttons">
              <input class="button" value="Discard" @click="$emit('close')"/>
              <input id="save" value="Save"  class="button" @click="$emit('close')" />
            </div>
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
      card: "",
      newJob: {
        id: "",
        card: "",
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "montserrat", sans-serif;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
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
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
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
  box-shadow: rgba(24, 4, 69, 0.05) 0px 2px 7px;
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
  color: rgba(24, 0, 69, 0.479);
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
  color: rgb(24, 0, 69);
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
}
div.buttons {
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid rgba(25, 4, 69, 0.1);
  padding: 0px 10px;
}
#save {
  background-color: rgba(3, 1, 163, 0.507);
  color: white;
  margin-left: 7px;
}

.button {
  cursor: pointer;

  box-sizing: border-box;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  letter-spacing: 0px;
  font-family: Lato;
  text-align: center;
  margin: 0px;
  width: auto;
  font-weight: 600;
  border-radius: 6px;
  padding: 0px 8px;
  height: 28px;
  font-size: 13px;
  color: rgba(25, 4, 69, 0.7);
  background-color: white;
  border: 1px solid rgba(25, 4, 69, 0.2);
}
</style>
