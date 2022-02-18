import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize text empty', () => {
    expect(component.text).toBe('');
  });

  it('should change text', () => {
    component.text = 'hello'
    expect(component.text).toBe('hello');
  });

  it('should send onClick event when button clicked', () => {
    spyOn(component.onClick, 'emit');
    component.handleClick();
    expect(component.onClick.emit).toHaveBeenCalled();
  });

  it('should set button color primary', () => {
    component.color = 'primary'
    expect(component.color).toBe('primary');
  });

  it('should set button color secondary', () => {
    component.color = 'secondary'
    expect(component.color).toBe('secondary');
  });
  
});
