<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{stock.name }}
          <small>(Price: {{stock.price }} | {{stock.quantity}})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            type="number"
            placeholder="Quantity"
            class="form-control"
            :class="{danger: insufficientQuantity}"
            v-model="quantity"
          >
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success"
            @click="sellProduct"
            :disabled="insufficientQuantity || quantity <= 0"
          >{{insufficientQuantity? "Less Stocks": "Sell"}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions(["sellStock"]),
    sellProduct() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        stockQuantity: this.quantity
      };

      this.sellStock(order);
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

