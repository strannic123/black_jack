<template>
  <div id="app">
    <div class="wrapper">
      <h1 class="header">Black Jack</h1>
      <div class="gameField">
        <div class="dealer">
          <h3 class="points">Очки дилера: {{dealerBlackJack ? 'Black JACK' : checkNewCardDealer }}</h3>
          <Card :cards="getDealerCards"/>
        </div>

        <Message>
          <h3 v-if="winner === 'player'" class="player_win">Вы выиграли - поздравляем</h3>
          <h3 v-if="winner === 'dealer'" class="dealer_win">Вы проиграли</h3>
          <h3 v-if="winner === 'stay'" class="stay_no-win">Ничья</h3>
        </Message>


        <div class="player">
          <h3 class="points">Очки игрока: {{playerBlackJack ? 'Black JACK' : checkNewCardPlayer }}</h3>
          <Card :cards="getPlayerCards"/>
        </div>
        <div class="buttons">
          <Button
              @dealerCardSet="setCardDealer"
              @toggleGamer="changeGamer "
              :disabled="whoMoveGame === 'dealer'"
              :title="'STAY'"
          />
          <Button
              @checkingCardToAce="resetSumAce"
              :disabled="playerSumPoints > 21 || whoMoveGame === 'dealer'"
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
      newPlayerSumPoints: 0,
      newDealerSumPoints: 0,
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

    checkNewCardPlayer() {
      this.playerSumPoints = this.sumPoints(
          this.askBlackJack(this.getPlayerCards, 'player'), 'player')
      // return this.checkingPoints(this.playerSumPoints, this.countAcePlayer)

      return this.playerSumPoints = this.checkingPoints(this.playerSumPoints, this.countAcePlayer)
    },

    checkNewCardDealer() {
      this.dealerSumPoints = this.sumPoints(
          this.askBlackJack(this.getDealerCards, 'dealer'), 'dealer')

      // return this.checkingPoints(this.dealerSumPoints, this.countAceDealer)
      return this.dealerSumPoints = this.checkingPoints(this.dealerSumPoints, this.countAceDealer)
    },





  },
  async created() {
    await this.$store.dispatch('fullDeckCard')
    await this.$store.dispatch('saveIdDeck')
    await this.$store.dispatch('getFirstThreeCardForStart')


  },
  mounted() {

  },
    methods: {
      async setCardDealer() {
          await this.$store.dispatch('getNextCard', 'STAY')
        if(this.dealerSumPoints < 17) {
         await this.setCardDealer()
        }


      },
      resetSumAce() {
        console.log('reset_COUNT_ACE')
        this.countAcePlayer = 0
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
        if (this.whoMoveGame === 'player') {
          this.newPlayerSumPoints = num
          return num
        }
        if (this.whoMoveGame === 'dealer') {
          this.newDealerSumPoints = num
          return num
        }

      },

      // устанавливаем в Data победителя с Black Jack
      async setBlackJackData(num, who) {
        if (who === 'dealer') {
          this.dealerBlackJack = true
        } else {
          this.playerBlackJack = true
        }
        await this.setWinner

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
          if(who === 'player') {
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
      // устанавливаем победителя
      setWinner() {
        if (this.dealerBlackJack) {
          this.winner = 'dealer'
        }
        if (this.playerBlackJack) {
          this.winner = 'player'
        }
        if(this.whoMoveGame === 'player') {
          if (this.newPlayerSumPoints > 21) {
            this.winner = 'dealer'
          }
        }
        if(this.whoMoveGame === 'dealer') {

          if(this.newDealerSumPoints > this.newPlayerSumPoints) {
            this.winner = 'dealer'
          }
          if(this.newDealerSumPoints < this.newPlayerSumPoints) {
            this.winner = 'player'
          }
          if(this.newDealerSumPoints === this.newPlayerSumPoints) {
            this.winner = 'stay'
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
