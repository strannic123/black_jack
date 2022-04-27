<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Message",

}
</script>

<style scoped>
.player_win{
  color: green;
  font-size: 30px;
}
.dealer_win{
  color: red;
  font-size: 30px;
}
.stay_no-win{
  color: #ffbb00;
  font-size: 30px;
}
</style>
