<template>
  <button
    v-on="$listeners"
    class="flex middle"
    :class="[hierarchy, size, iconPosition]"
    :disabled="disabled"
  >
    <div v-if="icon" class="icon">
      <img :src="require(`~/assets/img/icons/${icon}.svg`)" width="24">
    </div>

    <span>
      <slot></slot>
    </span>
  </button>
</template>

<!--
hiearchy: primary / secondary
size: small / medium 
icon: String [nome-do-icone]
icon-position: left / right (default)
disabled: true / false
-->

<script>
export default {
  name: "n-button",
  props: {
    hierarchy: {
      type: String,
      default: "primary"
    },
    size: {
      default: "small"
    },
    disabled: {
      default: false
    },
    icon: {
      type: String
    },
    iconPosition: {
      default: "left"
    },
  },
  data() {
    return {};
  },
  computed: {
    hasSlotData() {
      return this.$slots.default;
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  // &:not(:disabled) {
  //     cursor: pointer;
  // }

  &:disabled {
    cursor: default;
  }

  &.right {
    flex-direction: row-reverse;
    gap: var(--spacing-3-xs);
  }

  gap: var(--spacing-4-xs);
  font-weight: var(--text-font-weight-medium);
  font-size: var(--text-s14-font-size);
  border-radius: var(--border-radius-s);
  transition: 0.2s;
  line-height: var(--text-s-line-height);

  span { 
    padding-top: 1px; //visual 
    &:empty {
      display: none;
    }
  }

  .icon {
    // margin: -2px;
    img {
      max-width: 100%;
      height: auto;
    }
    // remove spacing around image
  }

  // Hierarchy
  &.primary {
    background: var(--color-primary);
    color: var(--color-white);
    &:hover {
      background: var(--color-text);
    }
    &:disabled {
      background: var(--color-blue-3);
    }
  }

  &.secondary {
    color: var(--color-primary);
    background: transparent;
    // background: var(--color-blue-1);

    &:not(:disabled):hover {
      background: var(--color-blue-1);
    }
    &:disabled {
      opacity: .5;
    }
  }

  // Sizes
  &.small {
    min-height: 32px;
    min-width: 32px;
    padding: 0 var(--spacing-2-xs);
    border-radius: var(--border-radius-xs);
    font-size: var(--text-s12-font-size);
    .icon {
      max-width: 16px;
      
    }
  }

  &.medium {
    min-height: 44px;
    min-width: 44px;
    padding: 0 var(--spacing-xs);
  }
}
</style>
