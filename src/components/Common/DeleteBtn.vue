<template>
  <button class="btn btn-danger" @click="removeFromCard()">
    Удалить
  </button>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
    },
  },
  methods: {
    removeFromCard() {
      this.$store.dispatch('removeFromCard', this.id);
    },
  },
};
</script>
