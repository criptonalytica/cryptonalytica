<template>
  <div class="legend flex middle">
      <div class="square" :style="{backgroundColor : color}"></div>
      <span><slot></slot></span>
  </div>
</template>

<script>
export default {
  name: "chart-legend",
  props: {
    color: {
      type: String,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.legend {
    .square {
        width: 12px;
        height: 12px;
        background: var(--color-primary);
        border-radius: var(--border-radius-xs);
        margin-right: var(--spacing-3-xs);   
    }

    white-space: nowrap;
    font-size: var(--text-s12-font-size);
    color: var(--color-grey-5);
}
</style>
