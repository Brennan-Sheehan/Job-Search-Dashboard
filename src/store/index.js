import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      nextJobCardId: 3,
      list: [
        
        {
          id:1, 
          title:'Wishlist',
          cards: [{ id: 1, title: "Engineer", company: "Goldfinger", color: 'rgba(124, 164, 225, 0.85)' },
                  { id: 1, title: "Engineer", company: "Goldfinger", color: 'rgba(252, 140, 44, 0.85)' },
                  { id: 1, title: "Engineer", company: "Goldfinger", color: 'rgba(108, 172, 212, 0.85)' },
                  { id: 1, title: "Engineer", company: "Goldfinger", color: 'rgb(255, 205, 96)' }],
          cardCount: 4,
        },
        
        {
          id:2,
          title: 'Applied', 
          cards: [{ id: 1, title: "Engineer", company: "Goldfinger", color: 'rgba(57, 110, 155, 0.85)' },
                    { id: 2, title: "Engineer", company: "Billboard", color: 'rgba(94, 188, 184, 0.85)' },],
          cardCount: 2
        },
        {
          id:3,
          title: 'Accepted',
          cards: [{ id: 1, title: "Engineer", company: "Goldfinger", color: 'rgba(52, 124, 244, 0.85)' },
                  { id: 1, title: "Engineer", company: "Goldfinger", color: 'rgba(124, 164, 225, 0.85)' },
                  { id: 1, title: "Engineer", company: "Goldfinger", color: 'rgb(255, 205, 96)' }],
          cardCount: 3 
          
        }
      ],
      contacts: [
        {
          id:1,
          name: 'Brennan Sheehan',
          title: 'CEO',
          company: 'B Enterprise',
          location: 'Charleston, SC',
          email: 'brennan.sheehan@gmail.com',
          phone: '630-453-1686'
          
        },
        {
          id:1,
          name: 'Brennan Sheehan',
          title: 'CEO',
          company: 'B Enterprise',
          location: 'Charleston, SC',
          email: 'brennan.sheehan@gmail.com',
          phone: '630-453-1686'
          
        }
      ]
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
      jobCard.color = "hsl("+ Math.floor(Math.random() * 360) + ',100%' + ',80%)'
      
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
