<template>
  <div id="app">
    <div class="wrapper">
      <h1 class="header">Black Jack</h1>
      <div class="gameField">
        <div class="dealer">
          <h3 class="points">Очки дилера: {{ dealerBlackJack ? 'Black JACK' : checkNewCardDealer }}</h3>
          <Card :cards="getDealerCards"/>
        </div>

        <Message>
          <h3 v-if="winner === 'player'" class="player_win">Вы выиграли - поздравляем</h3>
          <h3 v-if="winner === 'dealer'" class="dealer_win">Вы проиграли</h3>
          <h3 v-if="winner === 'stay'" class="stay_no-win">Ничья</h3>
        </Message>


        <div class="player">
          <h3 class="points">Очки игрока: {{ playerBlackJack ? 'Black JACK' : checkNewCardPlayer }}</h3>
          <Card :cards="getPlayerCards"/>
        </div>
        <div class="buttons">
          <Button
              @dealerCardSet="setCardDealer"
              @toggleGamer="changeGamer "
              :disabled="whoMoveGame === 'dealer' || playerSumPoints > 21 || playerBlackJack && (dealerSumPoints !== 10 || dealerSumPoints !== 11)"
              :title="'STAY'"
          />
          <Button
              @checkingCardToAce="resetSumAce"
              @nextCardPlayer="nextCardPlayer"
              :disabled="playerSumPoints >= 21 || whoMoveGame === 'dealer' || playerBlackJack"
              :title="'HIT'"
          />


        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Card from "./components/Card";
import {mapGetters} from 'vuex'
import Button from "./components/Button";
import Message from "./components/Message";


export default {
  name: 'App',
  data() {
    return {
      firstTreeCard: false,
      nameDeckValue: ['JACK', 'QUEEN', 'KING', 'ACE'],
      playerSumPoints: 0,
      dealerSumPoints: 0,
      // newPlayerSumPoints: 0,
      // newDealerSumPoints: 0,
      countAcePlayer: 0,
      countAceDealer: 0,
      playerBlackJack: false,
      dealerBlackJack: false,
      whoMoveGame: 'player', // кто играет
      winner: 'no-winner'
    }
  },
  components: {
    Card,
    Button,
    Message
  },
  computed: {
    ...mapGetters([
      'getFullDeck',
      'getDeckIdForSet',
      'getDeckId',
      'getDealerCards',
      'getPlayerCards',
    ]),
// Поставить условие на того кто играет

    checkNewCardPlayer() {
        this.playerSumPoints = this.sumPoints(
            this.askBlackJack(this.getPlayerCards, 'player'), 'player')

        // return this.playerSumPoints = this.checkingPoints(this.playerSumPoints, this.countAcePlayer)
        this.playerSumPoints = this.checkingPoints(this.playerSumPoints, this.countAcePlayer)
        // this.setWinner()
        return this.playerSumPoints
    },

    checkNewCardDealer() {
      this.dealerSumPoints = this.sumPoints(
          this.askBlackJack(this.getDealerCards, 'dealer'), 'dealer')

      // return this.dealerSumPoints = this.checkingPoints(this.dealerSumPoints, this.countAceDealer)
      this.dealerSumPoints = this.checkingPoints(this.dealerSumPoints, this.countAceDealer)
      // this.setWinner()
      return this.dealerSumPoints
    },

  },
  async created() {
    await this.$store.dispatch('fullDeckCard')
    await this.$store.dispatch('saveIdDeck')
    // await this.$store.dispatch('getFirstThreeCardForStart')


  },
  mounted() {

  },
  methods: {
    // авто набор дилера
    async setCardDealer() {
      if(this.playerBlackJack && (this.countAceDealer > 0 || this.dealerSumPoints === 10)) {
        await this.$store.dispatch('getNextCard', 'STAY')
        this.setWinner()
        return
      }

      await this.$store.dispatch('getNextCard', 'STAY')


      if (this.dealerSumPoints < 17 && !this.playerBlackJack) {
        await this.setCardDealer()

      }
      this.setWinner()


    },

    // следующая карта игрока по клику
    async nextCardPlayer() {
      if(!this.playerBlackJack ) {
        this.resetSumAce()
        await this.$store.dispatch('getNextCard', 'HIT')
        console.log('сработала проверка!!')
        this.setWinner()
      }
    },
    resetSumAce() {
      console.log('reset_COUNT_ACE')
      this.countAcePlayer = 0
      this.countAceDealer = 0
      // this.checkingPoints(this.playerSumPoints, this.countAcePlayer)
      // this.setWinner()
    },

    //считаем очки игрока с учетом тузов
    checkingPoints(num, numAce) {
      console.log('num', num)
      console.log('numAce', numAce)
      while (num > 21 && numAce > 0) { // проблема
        num -= 10
        numAce -= 1
      }
      // if (this.whoMoveGame === 'player') {
      //   this.newPlayerSumPoints = num
      //   return num
      // }
      // if (this.whoMoveGame === 'dealer') {
      //   this.newDealerSumPoints = num
      //   return num
      // }
      if (this.whoMoveGame === 'player') {
        this.playerSumPoints = num
        this.resetSumAce()
        return num
      }
      if (this.whoMoveGame === 'dealer') {
        this.dealerSumPoints = num
        this.resetSumAce()
        return num
      }

    },

    // устанавливаем в Data победителя с Black Jack
    setBlackJackData(num, who) {
      if (who === 'dealer') {
        this.dealerBlackJack = true
      } else {
        this.playerBlackJack = true
      }
      this.setWinner()

    },
    // проверка на Black Jack с раздачи
    askBlackJack(arr, who) {
      if (arr.length === 2) {
        let blackJack = 0
        arr.forEach(card => {
          blackJack += this.getValueCard(card)
        })
        if (blackJack === 21) {
          this.setBlackJackData(blackJack, who)
        }
      }
      return arr

    },
    // считаем сумму очков
    sumPoints(arr, who) {
      console.log('sumPoints')
      let fullPoints = 0
      arr.forEach(card => {
        console.log('card', card)
        fullPoints += this.countAceCards(this.getValueCard(card), who)

      })
      // if (who === 'dealer') {
      //   return this.checkingPointsDealer(fullPoints, this.countAceDealer)
      // }
      // if (who === 'player') {
      //   return this.checkingPointsPlayer(fullPoints, this.countAcePlayer)
      // }

      return fullPoints
    },

    // проверяем номинал карт
    getValueCard(card) {
      if (isNaN(card.value) && card.value !== 'ACE') {
        return 10
      } else if (card.value === 'ACE') {
        return 11
      } else {
        return +card.value
      }
    },

    // считаем все Тузы
    countAceCards(value, who) {
      if (value === 11) {
        if (who === 'dealer') {
          this.countAceDealer += 1
        }
        if (who === 'player') {
          this.countAcePlayer += 1
        }
      }
      return value
    },
    changeGamer(e) {
      console.log('EVENT', e)
      this.whoMoveGame = e
      console.log('THIS', this.whoMoveGame)

    },

    // проверяем диапазон карт дилера - делаем до сравнения с player
    checkDealerPointFromToAnd() {
      return this.dealerSumPoints >= 17 && this.dealerSumPoints <= 21;
    },

    // устанавливаем победителя
    setWinner() {
      if (this.dealerBlackJack && !this.playerBlackJack) {
        this.winner = 'dealer'
      }
      if (this.playerBlackJack && this.countAceDealer === 0 && this.dealerSumPoints !== 10) {
        this.winner = 'player'
      }
      // if (this.whoMoveGame === 'player') {
      //   if (this.playerSumPoints > 21) {
      //     this.winner = 'dealer'
      //   }
      // }
      if (this.whoMoveGame === 'dealer') {
        if(!this.checkDealerPointFromToAnd() && this.dealerSumPoints > this.playerSumPoints) {
          this.winner = 'player'
        }
        if (this.checkDealerPointFromToAnd() && this.dealerSumPoints > this.playerSumPoints) {
          this.winner = 'dealer'
        }
        if (this.checkDealerPointFromToAnd() && this.dealerSumPoints < this.playerSumPoints) {
          this.winner = 'player'
        }
        if (this.checkDealerPointFromToAnd() && this.dealerSumPoints === this.playerSumPoints) {
          this.winner = 'stay'
        }
      }
      if (this.whoMoveGame === 'player') {
        if (this.playerSumPoints > 21) {
          this.winner = 'dealer'
        }
      }
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.wrapper {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-image: url("./assets/img/var_1.jpg");
}

.gameField {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  flex: 1 1 auto;
}

.dealer,
.player {

}

.points {
  color: yellow;
  font-size: 32px;
  margin-bottom: 20px;
}
</style>
