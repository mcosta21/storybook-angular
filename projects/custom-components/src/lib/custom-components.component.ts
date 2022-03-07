import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-custom-components',
  template: `
    <p>
      custom-components works!
    </p>
  `,
  styles: [
  ]
})
export class CustomComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
