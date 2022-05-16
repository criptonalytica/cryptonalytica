<template>
    <div id="index-defail" class="card h32 v24 w100">
        <div class="card-title">
            <n-text type="h6">Index details</n-text>
        </div>
        <div class="list">
            {{data}}
        </div>
    </div>
</template>

<script>
export default {
  name: "index-detail",
  props: {
    data: {
      type: Array,
    },
    hierarchy: {
      type: String,
      default: "x"
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>
