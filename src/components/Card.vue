<template>
  <div class="cards">
<!--    <img :src="`${card.images.svg}`" alt="`${card.value} ${card.suit}`">-->
    <div class="card" v-for="card in cards" :key="card.code">
              <img :src="`${card.image}`" :alt="`${card.value } ${card.suit}`">

    </div>


  </div>

</template>

<script>
export default {
  name: "Card",
  props: ['cards']
}
</script>

<style scoped>
.cards {
  display: flex;
}

</style>
