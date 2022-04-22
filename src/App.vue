<template>
  <div id="app">
    <div class="wrapper">
      <h1 class="header">Black Jack</h1>
      <div class="gameField">
        <div class="dealer">
          <h3 class="points">Очки дилера: {{dealerBlackJack ? 'Black JACK' : checkNewCardDealer}}</h3>
          <Card :cards="getDealerCards"/>
        </div>

        <div class="player">
          <h3 class="points">Очки игрока: {{playerBlackJack ? 'Black JACK' : checkNewCardPlayer}}</h3>
          <Card :cards="getPlayerCards"/>
        </div>
        <div class="buttons">
          <Button :title="'STAY'"/>
          <Button :title="'HIT'"/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Card from "./components/Card";
import {mapGetters} from 'vuex'
import Button from "./components/Button";


export default {
  name: 'App',
  data() {
    return {
      firstTreeCard: false,
      nameDeckValue: ['JACK', 'QUEEN', 'KING', 'ACE'],
      playerSumPoints: 0,
      dealerSumPoints: 0,
      countAcePlayer: 0,
      countAceDealer: 0,
      playerBlackJack: false,
      dealerBlackJack: false,
      winner: 'no-winner'
    }
  },
  components: {
    Card,
    Button
  },
  computed: {
    ...mapGetters([
       'getFullDeck',
       'getDeckIdForSet',
      'getDeckId',
      'getDealerCards',
      'getPlayerCards',
    ]),

    checkNewCardDealer() {
      this.playerSumPoints =  this.sumPoints(this.askBlackJack(this.getDealerCards, 'dealer'), 'dealer')
      return this.playerSumPoints
    },
    checkNewCardPlayer() {
      this.dealerSumPoints = this.sumPoints(
          this.askBlackJack(this.getPlayerCards, 'player'), 'player')
      return this.dealerSumPoints
    },

    setWinner() {
      if(this.dealerBlackJack) {
        this.winner = 'dealer'
      }
      if(this.playerBlackJack) {
        this.winner = 'player'
      }
      if(this.playerSumPoints > 21) {
        this.winner = 'dealer'
      }
    }





  },
  async created() {
    await this.$store.dispatch('fullDeckCard')
    await this.$store.dispatch('saveIdDeck')
    // await this.$store.dispatch('getFirstThreeCardForStart')


  },
  mounted() {

  },
  methods: {
    //считаем очки игрока с учетом тузов
    checkingPointsPlayer(num, numAce){
      // while (num > 21 && numAce > 0) {
      //   num -= 10
      //   numAce -= 1
      // }
      this.playerSumPoints = num
      return num
    },
    //считаем очки dealer с учетом тузов
    checkingPointsDealer(num, numAce){
      // while (num > 17 && numAce > 0) {
      //   num -= 10
      //   numAce -= 1
      // }
      this.dealerSumPoints = num
      return num
    },
    // устанавливаем в Data победителя с Black Jack
   async setBlackJackData(num, who) {
        if(who === 'dealer') {
          this.dealerBlackJack = true
        } else {
          this.playerBlackJack = true
        }
     await this.setWinner

    },
    // проверка на Black Jack с раздачи
    askBlackJack(arr, who) {
      if(arr.length === 2) {
        let blackJack = 0
        arr.forEach(card => {
          blackJack += this.getValueCard(card)
        })
        if(blackJack === 21) {
          this.setBlackJackData(blackJack, who)
        }
      }
      return arr

    },
    // считаем сумму очков
    sumPoints(arr, who) {
      let fullPoints = 0
      arr.forEach(card => {
        fullPoints  += this.countAceCards(this.getValueCard(card, who))

      })
      // if(who === 'dealer') {
      //   return this.checkingPointsDealer(fullPoints, this.countAceDealer)
      // }
      // if(who === 'player') {
      //  return  this.checkingPointsPlayer(fullPoints, this.countAcePlayer)
      // }

     return fullPoints  // дописать return в IF выше !!!
    },

    // проверяем номинал карт
    getValueCard(card) {
      if(isNaN(card.value) && card.value !== 'ACE') {
        return 10
      } else if(card.value === 'ACE') {
        return 11
      } else {
        return +card.value
      }
    },

    // считаем все карты
    countAceCards(value, who) {
      if(value === 11) {
        if(who === 'dealer') {
          this.countAceDealer += 1
        } else {
          this.countAcePlayer += 1
        }
      }
      return value
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
