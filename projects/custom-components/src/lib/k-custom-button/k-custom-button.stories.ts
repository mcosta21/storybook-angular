import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { KCustomButtonComponent } from 'custom-components';

export default {
    title: 'Lib/KCustomButtonComponent',
    component: KCustomButtonComponent,
    decorators: [
      moduleMetadata({
        declarations: [],
        imports: [CommonModule, MatButtonModule],
      }),
    ],
    argTypes: {
      onClick: { action: 'clicked' }
    }
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