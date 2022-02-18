# Storybook Angular

This project is just a simple example to testing [Storybook](https://storybook.js.org/) with Angular

# Testing

## Run Storybook

> Run `yarn storybook` || `npm run storybook` for a storybook server. Navigate to  `http://localhost:6006/`.

<p align="center">
<img width="800"  src="https://github.com/mcosta21/storybook-angular/blob/main/assets/storybook-dark-theme.jpg" />
</p>

## Run app

> Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 

<p align="center">
<img width="800" src="https://github.com/mcosta21/storybook-angular/blob/main/assets/homepage.jpg" />
</p>

## Run unit tests

> Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


# Stories

### Title - Component

```javacript
// title.component.ts

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  @Input() public size: Size = Size.normal;
  @Input() public title: string = '';
  
  constructor() { }
}
```

### Title - Stories

```javacript
// title.stories.ts

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
```


### Button - Component

```javacript
// button.component.ts

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() public text: string = '';
  @Input() public color: ButtonColor = 'primary';
  
  @Output() public onClick: EventEmitter<boolean> = new EventEmitter(); 

  constructor() { }

  public handleClick = () => {
    this.onClick.emit();
  }
}
```

### Button - Stories

```javacript
// button.stories.ts
export default {
    title: 'Group 1/Button',
    component: ButtonComponent,
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
  text: 'Secondary',
  color: 'secondary'
};
```

# Theming


## Add dependencies

> Run `yarn add --dev @storybook/addons @storybook/theming`. Reference: [Storybook/Theming](https://storybook.js.org/docs/react/configure/theming).

> Create a `manager.js` file inside `.storybook` folder

```javacript
// manager.js

import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: themes.dark,
});
```
