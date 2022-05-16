<template>
  <div class="legend flex middle">
      <div :class="['square', color]"></div>
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
        
        &.green  {background: var(--color-green);}
        &.red    {background: var(--color-red);}
        &.blue   {background: var(--color-blue);}
        &.yellow {background: var(--color-yellow);}
        &.pink   {background: var(--color-pink);}
        &.orange {background: var(--color-orange);}
    }

    font-size: var(--text-s12-font-size);
    color: var(--color-grey-5);
}
</style>
