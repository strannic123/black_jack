import Vue from 'vue'
import Vuex from 'vuex'

import {getApiDesc, getFirstThreeCard, getNextCard} from "../api/fullDeckCard";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        fullDesc: [],
        deckId: '',
        dealerCards: [
        ],
        playerCards: [
        ],
        playerBank: 1000
    },
    getters: {
        getFullDeck: state => state.fullDesc,
        getDeckIdForSet: state => state.fullDesc[0].deck_id,
        getDeckId: state => state.deckId,
        getDealerCards: state => state.dealerCards,
        getPlayerCards: state => state.playerCards,
        getPlayerBank: state => state.playerBank

    },
    mutations: {
        SET_FULL_DESK(state, data) {
            state.fullDesc.push(data)
            state.deckId = state.fullDesc.deckId
        },

        SET_DESK_ID(state, id) {
            state.deckId = id
        },
        SET_CARD_DEALER(state, card) {
            state.dealerCards.push(card)
        },
        SET_CARD_PLAYER(state, card) {
            state.playerCards.push(card)
        },
        SET_RESET_DEALER_CARD(state) {
            state.dealerCards = []
        },
        SET_RESET_PLAYER_CARD(state) {
            state.playerCards = []
        },
        SET_BANK_WIN_PLAYER(state, dollar) {
            state.playerBank += dollar
        },
        SET_BANK_WIN_DEALER(state, dollar) {
            state.playerBank -= dollar
        },
        SET_BET_FOR_GAME(state, dollar) {
            state.playerBank -= dollar
        }


    },
    actions: {
        async fullDeckCard({commit}) {
            const data = await getApiDesc()
            commit('SET_FULL_DESK', data)

        },
        async saveIdDeck({commit, getters}) {
            if (getters.getFullDeck.length) {
                let id = await getters.getDeckIdForSet
                commit('SET_DESK_ID', id)
            }
        },
        async getFirstThreeCardForStart({commit}) {
            commit('SET_RESET_DEALER_CARD')
            commit('SET_RESET_PLAYER_CARD')
            const {cards} = await getFirstThreeCard()
            commit('SET_BET_FOR_GAME', 10)
            commit('SET_CARD_PLAYER', cards[0])
            commit('SET_CARD_DEALER', cards[1])
            commit('SET_CARD_PLAYER', cards[2])

        },
        async getNextCard({commit}, what) {
            const {cards} = await getNextCard()
            if (what === 'STAY') {
                commit('SET_CARD_DEALER', cards[0])
            }
            if (what === 'HIT') {
                commit('SET_CARD_PLAYER', cards[0])
            }
        },
        setBankWinPlayer({commit}, dollar) {
            commit('SET_BANK_WIN_PLAYER', dollar)
        },
    }
})
