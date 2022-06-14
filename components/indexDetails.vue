<template>
    <div id="index-defail" class="card h32 v24 w100">
        <div class="card-title">
            <n-text type="h6">Index details</n-text>
        </div>
        <div id="detais" class="flex between" v-for="item in data" :key="item">
            <p> {{ item.title }} </p>
            <span v-if="item.value">{{item.value}} pts</span>
            <span v-else>{{item.start}}% <span class="sep">/</span>  {{ item.end }}%</span>
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
  p {
    color: var(--color-grey-6);
    font-size: var(--text-p14-font-size);
    line-height: var(--text-s-line-height);
  }
  #detais {
    padding: var(--spacing-xs) 0;
    border-top: 1px solid #EFF1F2;
    span{
      color: var(--color-text);
      font-weight: var(--text-weight-medium);
      .sep {color: var(--color-grey-2);}
    }
  }
</style>
