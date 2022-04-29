<template>
  <div class="cards">
    <div class="card" v-for="card in cards" :key="card.code + getRndInteger()">
      <img :src="`${card.image}`" :alt="`${card.value } ${card.suit}`">

    </div>
  </div>

</template>

<script>
export default {
  name: "Card",
  props: ['cards'],
  methods: {
    getRndInteger(min = 1, max = 10000000) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  }
}
</script>

<style scoped>
.cards {
  display: flex;
}

.card img {
  width: 150px;
}

</style>
