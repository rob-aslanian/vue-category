export default class Util {
  // data = new Map();

  random(from = 20, to = 80) {
    return Math.random() * to + from;
  }

  async getData() {
    let result = new Map();
    const [data, names] = await Promise.all([
      this.loadData(),
      this.loadNames(),
    ]);

    for (const value of data) {
      const categoryID = value.G;
      const productID = value.T;

      if (names[categoryID]) {
        if (names[categoryID]['B'][productID]) {
          let products = result.get(categoryID)?.products || [];
          let product = names[categoryID]['B'][productID];

          products.push({
            id: productID,
            name: product.N,
            left_amount: value.P,
            usd_price: value.C,
            rub_price: +(value.C * this.random()).toFixed(2),
          });

          result.set(categoryID, {
            id: categoryID,
            category_name: names[categoryID].G,
            products,
          });
        }
      }
    }

    return result;
  }

  async loadData() {
    return await import('../data/data.json').then(
      (el) => el.Value.Goods,
    );
  }
  async loadNames() {
    return await import('../data/names.json').then(
      (el) => el.default,
    );
  }
}
