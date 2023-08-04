import { createStore } from "vuex";

import actions from './actions';
import mutations from './mutations';
import getters from './getters'
const state = {
  nextContactCardId: 3,
      jobBoardLists: [],
      jobCards: [],
      contacts: [
        {
          id: 1,
          firstName: "Brennan",
          lastName: "Sheehan",
          title: "CEO",
          company: "B Enterprise",
          location: "Charleston, SC",
          email: "brennan.sheehan@gmail.com",
          phone: "630-453-1686",
        },
        {
          id: 2,
          firstName: "Brennan",
          lastName: "Sheehan",
          title: "CEO",
          company: "B Enterprise",
          location: "Charleston, SC",
          email: "brennan.sheehan@gmail.com",
          phone: "630-453-1686",
        },
      ],
}


export default createStore({
  state,
  getters,
  actions,
  mutations
});
