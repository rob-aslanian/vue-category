<template>
  <tr>
    <th>{{ product.id }}</th>
    <td>{{ product.name }}</td>
    <td>
      <div>
        <div class="d-flex align-items-center">
          <input
            type="number"
            class="form-control"
            v-model="amount"
            min="1"
            :max="product.left_amount"
          />
          <span class="ml-4">шт.</span>
        </div>
        <div
          class="alert alert-danger mt-2"
          role="alert"
          v-if="product.left_amount < 10"
        >
          Количество ограничено, <br />
          осталось ({{ product.left_amount }})
        </div>
      </div>
    </td>
    <td>
      <div class="d-flex align-items-center">
        <h6>{{ product.rub_price }} руб.</h6>
        <span class="ml-2">/ шт.</span>
      </div>
    </td>
    <td>
      <DeleteBtn :id="product.id"></DeleteBtn>
    </td>
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
  computed: {
    amount: {
      get: function() {
        return this.product.amount;
      },
      set: function(value) {
        if (
          value <= this.product.left_amount &&
          value !== '' &&
          value != 0
        ) {
          this.$store.dispatch('increaseProductInCard', {
            id: this.product.id,
            amount: +value,
          });
        }
      },
    },
  },
};
</script>
