<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{stock.name }}
          <small>(Price: {{stock.price }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            type="number"
            placeholder="Quantity"
            class="form-control"
            :class="{danger: insufficientFunds}"
            v-model="quantity"
          >
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success"
            @click="buyProduct"
            :disabled="insufficientFunds || quantity <= 0"
          >{{ insufficientFunds? "Less Fund" : "Buy"}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    buyProduct() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        stockQuantity: this.quantity
      };

      console.log(order);
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>


<style scoped>
.danger {
  border: 1px solid red;
}
</style>


