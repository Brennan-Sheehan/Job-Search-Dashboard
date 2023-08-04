import JobBoardService from "@/services/JobBoardService";
export default {
    CHANGE_LIST_TITLE(state, id, name) {
        state.list[id - 1].title = name;
      },
      ADD_JOB_CARD(state, jobCard) {
        const listAss = state.jobBoardLists.find((d) => d.title === jobCard.card);
  
        jobCard.jobBoardId = listAss.id;
        jobCard.color = "hsl("+ Math.floor(Math.random() * 360) + ',80%' + ',80%)'
        state.jobCards.push(jobCard);
        JobBoardService.addJobCard(jobCard)
          .then((response) => {
            if (response.status === 201) {
              console.log("worked");
            }
          })
          .catch((error) => {
            if (error.response) {
              this.errorMsg =
                "Error adding topic. Response received was '" +
                error.response.statusText +
                "'.";
            } else if (error.request) {
              this.errorMsg = "Error adding topic. Server could not be reached.";
            } else {
              this.errorMsg = "Error adding topic. Request could not be created.";
            }
          });
      },
      ADD_CONTACT_CARD(state, contactCard) {
        contactCard.id = state.nextContactCardId++;
  
        state.contacts.push(contactCard);
      },
      ADD_JOB_LIST(state, jobList) {
        jobList.id = state.nextJobListId++;
  
        state.list.push(jobList);
      },
      SET_LIST(state, data) {
        state.jobBoardLists = data;
      },
      SET_CARD_LIST(state, data) {
        state.jobCards = data;
      },
}