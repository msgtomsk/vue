<template>
  <div>
    <form>
      <div class="form-group">
        <label>New Quote</label>
        <textarea rows="3" class="form-control" v-model="enteredQuote"></textarea>
        <button class="btn btn-primary mt-4" @click.prevent="addNewQuote">Add Quote</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enteredQuote: ""
    };
  },
  methods: {
    addNewQuote() {
      this.$emit("addNewQuote", this.enteredQuote);
      this.enteredQuote = "";
    }
  }
};
</script>


<style >
</style>

