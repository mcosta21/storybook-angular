import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonColor } from './button.model';

@Component({
  selector: 'k-custom-button',
  templateUrl: './k-custom-button.component.html',
  styleUrls: ['./k-custom-button.component.scss']
})
export class KCustomButtonComponent {

  @Input() public text: string = '';
  @Input() public color: ButtonColor = 'primary';
  
  @Output() public onClick: EventEmitter<any> = new EventEmitter(); 

  constructor() { }

  public handleClick = () => {
    this.onClick.emit();
  }
}

