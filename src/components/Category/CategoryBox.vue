<template>
  <div class="card" v-if="item">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button
          class="btn btn-link btn-block text-left"
          type="button"
          @click="isVisible = !isVisible"
        >
          {{ item.category_name }}
          ( {{ item.products.length }} )
        </button>
      </h2>
    </div>

    <div
      id="collapseOne"
      class="collapse"
      :class="{ show: isVisible }"
    >
      <div class="card-body ">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Название</th>
              <th scope="col">Ко-во</th>
              <th scope="col">Цена</th>
              <th scope="col">Действие</th>
            </tr>
          </thead>
          <tbody>
            <CategoryProduct
              v-for="(product, idx) in item.products"
              :product="product"
              :key="idx"
            >
            </CategoryProduct>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryProduct from './CategoryProduct';
export default {
  props: ['item'],
  components: {
    CategoryProduct,
  },
  data() {
    return {
      isVisible: true,
    };
  },
};
</script>
