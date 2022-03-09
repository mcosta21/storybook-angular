import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { KCustomButtonComponent } from './k-custom-button.component';
import { action } from '@storybook/addon-actions';

const actionsData = {
  onClick: action('handleClick'),
};

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
      color: {
        control: { type: 'select' }
      }
    }
} as Meta;

const Template: Story = (args) => ({
  props: {
    ...args,
    onClick: actionsData.onClick
  },
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