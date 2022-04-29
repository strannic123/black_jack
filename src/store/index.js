import Vue from 'vue'
import Vuex from 'vuex'

import {getApiDesc, getFirstThreeCard, getNextCard} from "../api/fullDeckCard";

Vue.use(Vuex)

// TODO сделать счет на деньги


export default new Vuex.Store({
    state: {
        fullDesc: [],
        deckId: '',
        dealerCards: [
            // {
            //     "code": "KD",
            //     "image": "https://deckofcardsapi.com/static/img/KD.png",
            //     "value": "KING",
            //     "suit": "DIAMONDS"
            // },
            // {
            //     "code": "7H",
            //     "image": "https://deckofcardsapi.com/static/img/7H.png",
            //     "value": "7",
            //     "suit": "HEARTS"
            // },
            // {
            //     "code": "AH",
            //     "image": "https://deckofcardsapi.com/static/img/AH.png",
            //     "value": "ACE",
            //     "suit": "HEARTS"
            // }
        ],
        playerCards: [
            // {
            //     "code": "JD",
            //     "image": "https://deckofcardsapi.com/static/img/JD.png",
            //     "value": "JACK",
            //     "suit": "DIAMONDS"
            // },
            //  {
            //     "code": "8H",
            //     "image": "https://deckofcardsapi.com/static/img/8H.png",
            //     "value": "8",
            //     "suit": "HEARTS"
            // },
            // {
            //     "code": "AH",
            //     "image": "https://deckofcardsapi.com/static/img/AH.png",
            //     "value": "ACE",
            //     "suit": "HEARTS"
            // },
            // {
            //     "code": "4H",
            //     "image": "https://deckofcardsapi.com/static/img/4H.png",
            //     "value": "4",
            //     "suit": "HEARTS"
            // },
            // {
            //     "code": "JD",
            //     "image": "https://deckofcardsapi.com/static/img/JD.png",
            //     "value": "JACK",
            //     "suit": "DIAMONDS"
            // },
            //
            // {
            //     "code": "8H",
            //     "image": "https://deckofcardsapi.com/static/img/8H.png",
            //     "value": "8",
            //     "suit": "HEARTS"
            // },
            // {
            //     "code": "JD",
            //     "image": "https://deckofcardsapi.com/static/img/JD.png",
            //     "value": "JACK",
            //     "suit": "DIAMONDS"
            // },
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
            console.log('check')
            state.deckId = state.fullDesc.deckId
            console.log('final',)
        },

        SET_DESK_ID(state, id) {
            console.log('SET', id)
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
                console.log('STATE_ID', id)
                commit('SET_DESK_ID', id)
            }
        },
        async getFirstThreeCardForStart({commit}) {
            commit('SET_RESET_DEALER_CARD')
            commit('SET_RESET_PLAYER_CARD')
            const {cards} = await getFirstThreeCard()
            console.log('FIRST_THREE', cards)
            commit('SET_CARD_PLAYER', cards[0])
            commit('SET_CARD_DEALER', cards[1])
            commit('SET_CARD_PLAYER', cards[2])
        },
        async getNextCard({commit}, what) {
            const {cards} = await getNextCard()
            console.log('VUEX_CHECK')
            console.log('VUEX_CHECK_VALUE', what)
            console.log('VUEX_CHECK_VALUE', cards)
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
        setBankWinDealer({commit}, dollar) { // так же используем для ставки перед раздачей
            commit('SET_BANK_WIN_DEALER', dollar)
        }
    }

})
