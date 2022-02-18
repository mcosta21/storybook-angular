import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonColor } from './button.model';

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
