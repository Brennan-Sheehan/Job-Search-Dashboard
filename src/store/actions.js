import JobBoardService from "../services/JobBoardService";
export default {
  async ADD_JOB_CARD({ commit }, jobCard) {
    let response = await JobBoardService.addJobCard(jobCard);
    let card = response.data;
    commit("SET_CARD", card);
  },
  async ADD_JOB_LIST({ commit }, jobList) {
    let response = await JobBoardService.addJobList(jobList);
    let list = response.data;
    commit("ADD_JOB_LIST", list);
  },
  async GET_JOB_LIST({ commit }) {
    let response = await JobBoardService.list();
    let list = response.data;
    commit("SET_JOB_LIST", list);
  },
  async GET_CARD_LIST({ commit }) {
    let response = await JobBoardService.listCards();
    let cards = response.data;
    commit("SET_CARD_LIST", cards);
  },
  async UPDATE_JOB_LIST_TITLE({ commit }, jobList) {
    let response = await JobBoardService.jobListUpdate(jobList);
    let list = response.data;
    let id = list.id
    let name = list.title
    commit("CHANGE_LIST_TITLE",id, name);
    
  },
  async UPDATE_JOB_LIST_CARDS({commit}, card) {
    let response = await JobBoardService.jobListCardUpdate(card);
    commit("CHANGE_CARD", response.data)
  }
};
