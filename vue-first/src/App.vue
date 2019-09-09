<template>
  <div id="app">
    <h1 class="text-center mt-3">Quotes</h1>
    <div class="container mt-5">
      <div class="row">
        <div class="col-12">
          <app-progress-bar :quotes="quotes" :maxCount="maxCount"></app-progress-bar>
        </div>
      </div>
      <div class="row text-center mt-4">
        <div class="col-sm-8 offset-sm-2 col-md-6 col-lg-4 offset-md-4">
          <app-new-quote @addNewQuote="addNewQuote"></app-new-quote>
        </div>
      </div>
      <app-quote-grid :quotes="quotes" @deleteQuote="deleteQuote"></app-quote-grid>

      <div class="row">
        <div class="col-12">
          <div class="alert alert-info">Click the quotes to delete.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";
import ProgessBar from "./components/ProgessBar.vue";
import NewQuote from "./components/NewQuote.vue";
export default {
  data() {
    return {
      quotes: ["Quote"],
      maxCount: 10
    };
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appProgressBar: ProgessBar,
    appNewQuote: NewQuote
  },
  methods: {
    addNewQuote(quote) {
      if (this.quotes.length >= 10) {
        return alert("Max Quotes reached");
      }
      this.quotes.push(quote);
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    }
  }
};
</script>

<style >
</style>
