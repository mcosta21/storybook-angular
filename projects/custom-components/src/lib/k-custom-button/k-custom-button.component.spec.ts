import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KCustomButtonComponent } from './k-custom-button.component';

describe('KCustomButtonComponent', () => {
  let component: KCustomButtonComponent;
  let fixture: ComponentFixture<KCustomButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KCustomButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KCustomButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
