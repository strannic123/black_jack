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
  color: #90eb34;
  font-size: 30px;
}
.dealer_win{
  color: #ff9214;
  font-size: 30px;
}
.stay_no-win{
  color: #ffbb00;
  font-size: 30px;
}
</style>
