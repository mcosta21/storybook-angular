import { MatButtonModule } from '@angular/material/button';
import { Meta, Story, moduleMetadata } from '@storybook/angular';

import { ButtonComponent } from './button.component';
export default {
    title: 'Group 1/Button',
    component: ButtonComponent,
    decorators: [
      moduleMetadata({
        declarations: [],
        imports: [MatButtonModule],
      }),
    ]
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary',
  color: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Accent',
  color: 'accent'
};