<template>
  <nav class="text-center navbar-dark bg-dark pt-2 pb-2">
    <router-link to="/" class="navbar-brand" exact>Home</router-link>
    <router-link to="/card" class="navbar-brand"
      >Card
      <span class="badge badge-light">{{ card_amount }}</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  computed: {
    card_amount() {
      return this.$store.getters.getCardAmount;
    },
  },
};
</script>

<style>
.router-link-active {
  color: #28a745 !important;
}
</style>
