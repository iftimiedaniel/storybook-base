<template>
  <button type="button" :class="classes" :aria-label="label">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" v-if="withIcon">
      <path
        d="M1.27702 1.31453C0.939941 1.31453 0.666687 1.58778 0.666687 1.92486C0.666687 2.26194 0.939941 2.53519 1.27702 2.53519H2.36298C2.45184 2.53519 2.53845 2.56315 2.61053 2.61511C2.68262 2.66707 2.73653 2.7404 2.76463 2.8247L4.77688 8.8626C4.86624 9.13068 4.8776 9.41931 4.80906 9.69346L4.64337 10.3574C4.40025 11.3299 5.15724 12.3005 6.15966 12.3005H13.4836C13.8207 12.3005 14.094 12.0272 14.094 11.6901C14.094 11.3531 13.8207 11.0798 13.4836 11.0798H6.15966C5.922 11.0798 5.76944 10.8848 5.82708 10.6543L5.95203 10.1552C5.9732 10.0706 6.02203 9.99555 6.09075 9.94192C6.15947 9.88828 6.24414 9.85915 6.33131 9.85915H12.8733C13.1361 9.85929 13.3695 9.69122 13.4526 9.44193L15.0798 4.55929C15.2116 4.16393 14.9172 3.75566 14.5004 3.75585H4.66721C4.57835 3.75585 4.49174 3.72789 4.41965 3.67593C4.34756 3.62397 4.29364 3.55065 4.26554 3.46635L3.68734 1.73175C3.60418 1.48246 3.3708 1.31439 3.10801 1.31453H1.27702ZM5.54933 12.9108C4.87518 12.9108 4.32867 13.4573 4.32867 14.1315C4.32867 14.8056 4.87518 15.3521 5.54933 15.3521C6.22348 15.3521 6.76999 14.8056 6.76999 14.1315C6.76999 13.4573 6.22348 12.9108 5.54933 12.9108ZM12.8733 12.9108C12.1991 12.9108 11.6526 13.4573 11.6526 14.1315C11.6526 14.8056 12.1991 15.3521 12.8733 15.3521C13.5474 15.3521 14.094 14.8056 14.094 14.1315C14.094 13.4573 13.5474 12.9108 12.8733 12.9108Z"
        fill="currentColor" />
    </svg>
    <template v-if="withLabel">{{ label }}</template>
  </button>
</template>

<script>
import './button.scss';
import { reactive, computed } from 'vue';

/**
 * 
 */
export default {
  name: 'button-component',
  props: {
    label: {
      type: String,
    },
    /** List of button types */
    type: {
      type: String,
      validator: function (value) {
        return ['primary', 'secondary', 'inverted', 'outline', 'text'].indexOf(value) !== -1;
      },
    },
    state: {
      type: String,
      validator: function (value) {
        return ['default', 'hover', 'disabled'].indexOf(value) !== -1;
      },
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    withIcon: {
      type: Boolean,
      default: true,
    },
    iconRightAligned: {
      type: Boolean,
      default: false,
    },
    withLabel: {
      type: Boolean,
      default: true,
    },
  },

  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'fx-button': true,
        'fx-button--rounded': props.rounded,
        [`fx-button--${props.type || null}`]: true,
        [`fx-button--${props.state || null}`]: props.state === 'hover' || props.state === 'disabled',
        'fx-button--icon': !props.withLabel,
        'fx-button--icon-right': props.iconRightAligned,
      })),
    };
  },
};
</script>
