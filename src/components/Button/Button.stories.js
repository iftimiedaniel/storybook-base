import Button from './Button.vue';
// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const LabelText = 'Buy Now';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    onClick: {},
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large'],
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/95muyKBxIbumE6c819vwHK/Core-Components?type=design&node-id=909%3A457&mode=dev',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: LabelText,
  },
};

export const Secondary = {
  args: {
    label: LabelText,
  },
};

export const Large = {
  args: {
    size: 'large',
    label: LabelText,
    primary: true,
  },
};

export const Small = {
  args: {
    size: 'small',
    label: LabelText,
    primary: true,
  },
};
