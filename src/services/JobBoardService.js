import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:3000'
})

export default {
    list() {
        return http.get(`/job-board`)
    },
    listCards() {
        return http.get(`/job-cards`)
    },

    jobListUpdate(jobList) {
        return http.put(`/job-board/${jobList.id}`, jobList)
    },
    jobListCardUpdate(card) {
        return http.put(`/job-cards/${card.id}`, card)
    },

    addJobList(jobList) {
        return http.post(`/job-board/`, jobList)
    },
    addJobCard(jobCard) {
        return http.post(`/job-cards`, jobCard)
    }
}