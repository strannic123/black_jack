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
    nextCard(key) {
      if(key === 'HIT') {
        this.$store.dispatch('getNextCard', key)
      }
      if(key === 'STAY') {
        this.$emit('toggleGamer', 'dealer')
      }
    }
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

</style>
