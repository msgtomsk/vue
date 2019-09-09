<template>
  <div class="progress" style="height:20px">
    <div
      class="progress-bar"
      style="height:20px"
      :style="{width:quotes.length / maxCount * 100 + '%'}"
    >{{ quotes.length}} / {{maxCount}}</div>
  </div>
</template>

<script>
export default {
  props: ["quotes", "maxCount"]
};
</script>


<style>
</style>

