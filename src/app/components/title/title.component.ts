import { Component, Input, OnInit } from '@angular/core';
import { Size } from './title.model';

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
