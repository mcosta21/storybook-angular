import { Meta, Story } from '@storybook/angular';

import { TitleComponent } from './title.component';
import { Size } from './title.model';
export default {
    title: 'Group 1/Title',
    component: TitleComponent,
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Sample = Template.bind({});

Sample.args = {
  title: 'Hello World',
  size: Size.small
};