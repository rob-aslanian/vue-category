<template>
  <h1 v-if="cardItems.size === 0">
    Корзина пуста
  </h1>
  <div v-else>
    <table class="table table-striped table-dark text-left">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Наименование товара и описание</th>
          <th scope="col">Количество</th>
          <th scope="col">Цена</th>
          <th scope="col">Действие</th>
        </tr>
      </thead>
      <tbody>
        <CardItem
          v-for="(value, key) of cardItems.values()"
          :key="key"
          :product="value"
        >
        </CardItem>
      </tbody>
    </table>
    <h5 class="float-right">
      Общая стоимость: <strong>{{ sum }}</strong> руб.
    </h5>
  </div>
</template>

<script>
import CardItem from './CardItem';
export default {
  components: {
    CardItem,
  },
  computed: {
    cardItems() {
      return this.$store.getters.getCard;
    },
    sum() {
      return [...this.cardItems.values()]
        .reduce((acc, el) => acc + el.total_price, 0)
        .toFixed(2);
    },
  },
};
</script>
