export default {
  CHANGE_LIST_TITLE(state, id, name) {
    const listItem = state.jobBoardLists.find(d => d.id === id)
    listItem.title = name
  },
  
  ADD_CONTACT_CARD(state, contactCard) {
    contactCard.id = state.nextContactCardId++;

    state.contacts.push(contactCard);
  },
  ADD_JOB_LIST(state, jobList) {
    state.jobBoardLists.push(jobList);
  },
  SET_JOB_LIST(state, data) {
    state.jobBoardLists = data;
  },
  SET_CARD_LIST(state, data) {
    state.jobCards = data;
  },
  SET_CARD(state, card) {
    state.jobCards.push(card);
  },
};
