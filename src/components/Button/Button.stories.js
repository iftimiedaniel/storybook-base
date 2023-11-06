import ButtonComponent from './Button.vue';
// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const LabelText = 'Buy Now';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  args: {
    label: LabelText,
    type: 'primary',
    rounded: false,
    withLabel: true,
    withIcon: true,
    iconRightAligned: false,
    state: 'default',
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'inverted', 'outline', 'text'],
      table: {
        defaultValue: { summary: 'primary' },
      }
    },
    state: {
      control: {
        type: 'radio',
      },
      options: ['default', 'hover', 'disabled'],
      table: {
        defaultValue: { summary: 'null' },
      }
    },
  },
  parameters: {
    // layout: 'centered', // story layout
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/95muyKBxIbumE6c819vwHK/Core-Components?type=design&node-id=909%3A457&mode=dev',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Button = {
  args: {
  },
};
