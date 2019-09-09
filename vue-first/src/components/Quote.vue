<template>
  <div class="col-12 col-md-4 col-lg-3 text-center">
    <div class="panel panel-default">
      <div class="panel-body quote">
        <slot>No text</slot>
      </div>
    </div>
  </div>
</template>

<script>
</script>


<style scoped>
.panel-body {
  font-family: "Arizonia", cursive;
  font-size: 20px;
}

.quote {
  cursor: pointer;
  padding: 20px;
  box-shadow: 1px 1px 2px #ccc;
  margin: 20px 0;
}

.quote:hover {
  background-color: antiquewhite;
}
</style>

