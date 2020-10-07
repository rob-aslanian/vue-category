<template>
  <tr :class="{ 'bg-danger text-white': isNewPriceGreater }">
    <th>{{ product.id }}</th>
    <th>{{ product.name }}</th>
    <th>{{ product.left_amount }}</th>
    <th>{{ product.rub_price }}</th>
    <th>
      <button
        v-if="!isInCard"
        class="btn btn-success"
        @click="addToCard()"
      >
        В корзину
      </button>
      <DeleteBtn v-else :id="product.id"></DeleteBtn>
    </th>
  </tr>
</template>

<script>
import DeleteBtn from '../Common/DeleteBtn';

export default {
  components: {
    DeleteBtn,
  },
  props: {
    product: {
      type: Object,
    },
  },
  data() {
    return {
      isNewPriceGreater: false,
    };
  },
  computed: {
    isInCard() {
      return this.$store.getters.getCard.has(this.product.id);
    },
  },
  watch: {
    product(n, o) {
      this.isNewPriceGreater = n.rub_price > o.rub_price;
    },
  },
  methods: {
    addToCard() {
      this.$store.dispatch('addToCard', this.product);
    },
  },
};
</script>
