<template>
  <div class="row">
    <div
      class="col-6 mt-3"
      v-for="(item, key) of categories.values()"
      :key="key"
    >
      <CategoryBox :item="item" :key="item.id"></CategoryBox>
    </div>
  </div>
</template>

<script>
import CategoryBox from './CategoryBox';

export default {
  components: {
    CategoryBox,
  },
  computed: {
    categories() {
      return this.$store.getters.getData;
    },
  },
};
</script>
