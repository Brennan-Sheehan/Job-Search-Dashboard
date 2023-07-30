import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      nextJobCardId: 3,
      list: [
        
        {
          id:1, 
          title:'Wishlist',
          cards: [{ id: 1, title: "Engineer", company: "Goldfinger" },
                  { id: 1, title: "Engineer", company: "Goldfinger" },
                  { id: 1, title: "Engineer", company: "Goldfinger" },
                  { id: 1, title: "Engineer", company: "Goldfinger" }],
          cardCount: 4,
        },
        
        {
          id:2,
          title: 'Applied', 
          cards: [{ id: 1, title: "Engineer", company: "Goldfinger" },
                    { id: 2, title: "Engineer", company: "Billboard" },],
          cardCount: 2
        },
        {
          id:3,
          title: 'Accepted',
          cards: [{ id: 1, title: "Engineer", company: "Goldfinger" },
                  { id: 1, title: "Engineer", company: "Goldfinger" },
                  { id: 1, title: "Engineer", company: "Goldfinger" }],
          cardCount: 3 
          
        }
      ],
    };
  },
  mutations: {
    CHANGE_LIST_TITLE(state, id, name) {
      console.log(id);
      console.log(name);
      state[id].title = name;
    },
    ADD_JOB_CARD(state,jobCard){
     
      console.log(jobCard)
      jobCard.id = state.nextJobCardId++
      const card = jobCard.card
      const currentCardList = state.list.find(d => d.title === card)
      console.log(currentCardList);
      currentCardList.cardCount++
      currentCardList.cards.push(jobCard)
    }
  },
  actions: {},
  modules: {},
});

export default store;
