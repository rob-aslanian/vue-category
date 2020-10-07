<template>
  <div class="home">
    <CategoryList></CategoryList>
  </div>
</template>

<script>
import CategoryList from '@/components/Category/CategoryList.vue';
import Util from '@/utils/util.service';

export default {
  name: 'Home',
  components: {
    CategoryList,
  },
  data() {
    return {
      intervalID: 0,
    };
  },
  methods: {
    test() {
      this.$store.dispatch('addToCard', []);
    },
  },
  async mounted() {
    const util = new Util();
    this.intervalID = setInterval(
      async () => this.$store.commit('setData', await util.getData()),
      15000,
    );
  },
  async beforeMount() {
    const util = new Util();
    this.$store.dispatch('setData', await util.getData());
  },

  destroyed() {
    clearInterval(this.intervalID);
    this.intervalID = undefined;
  },
};
</script>
