<template>
  <button
      :key="title"
      class="btn"
      @click="nextCard(title)"
  >{{title}}</button>

</template>

<script>


export default {
  name: "Button",
  props: ['title'],
  computed: {

  },
  methods: {
   async nextCard(key) {
      if(key === 'HIT') {
        // await this.$store.dispatch('getNextCard', key)
        await this.$emit('nextCardPlayer')
        this.$emit('checkingCardToAce')
      }
      if(key === 'STAY') {
        this.$emit('toggleGamer', 'dealer')
        this.$emit('dealerCardSet')
      }
    },

  }
}
</script>

<style scoped>

.btn {
  font-size: 45px;
  font-weight: bold;
  color: #FDF22C;
  background: #00000069;
  border: 7px solid #FDF22C;
  border-radius: 10px;
  margin-left: 20px;
  padding: 15px 30px;
  transition: all ease .3s;
}

.btn:hover {
  transform: scale(1.1);
}

.btn:disabled {
  transition: none;
  transform: none;
  background: #adadad63;
  color: #fdf22c99;
  cursor: no-drop;
}

</style>
