export default {
    getJobBoardList(state) {
        return state.jobBoardLists
    },
    getCards:state => jobList => {
        return state.jobCards.filter(d => d.jobBoardId === jobList.id)
    },
    getCard: state => cardId => {
        return state.jobCards.filter(d => d.id == cardId )
    }
}