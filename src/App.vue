<template>
  <div id="app">
    <div class="wrapper">
      <h1 class="header">Black Jack</h1>
      <div class="gameField">
        <div class="dealer">
<!--          <h3 class="points">Очки диллера: {{sumPoints(this.getPlayerCards, 'dealer')}}</h3>-->
          <h3 class="points">Очки дилера: {{dealerBlackJack ? 'Black JACK' : sumPoints(this.getDealerCards, 'dealer')}}</h3>
          <Card :cards="getDealerCards"/>
        </div>

        <div class="player">
<!--          <h3 class="points">Очки игрока: {{sumPoints(this.getDealerCards, 'player')}}</h3>-->
          <h3 class="points">Очки игрока: {{playerBlackJack ? 'Black JACK' : sumPoints(this.getPlayerCards, 'player')}}</h3>
          <Card :cards="getPlayerCards"/>
        </div>
      </div>
      <div class="buttons">
        <h3>Компонент с кнопками</h3>sum
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./components/Card";
import {mapGetters} from 'vuex'


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
    }
  },
  components: {
    Card
  },
  computed: {
    ...mapGetters([
      'getFullDeck', {getFullDeck: 'getFullDeck'},
      'getDeckIdForSet', {getDeckIdForSet: 'getDeckIdForSet'},
      'getDeckId', {getDeckId: 'getDeckId'},
      'getDealerCards', {getDealerCards: 'getDealerCards'},
      'getPlayerCards', {getPlayerCards: 'getPlayerCards'},
    ]),






  },
  async created() {
    await this.$store.dispatch('fullDeckCard')
    await this.$store.dispatch('saveIdDeck')
    await this.$store.dispatch('getFirstThreeCardForStart')


  },
  mounted() {

  },
  methods: {
    sumPoints(arr, who) {
      let fullPoints = 0
      // Получаем данные и считаем
      arr.forEach(card => {
        fullPoints  += this.getValueCard(this.countAceCards(card, who))

      })

      return fullPoints
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
}
</style>
