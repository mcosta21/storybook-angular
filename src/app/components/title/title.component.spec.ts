import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleComponent } from './title.component';
import { Size } from './title.model';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with size normal and text empty', () => {
    expect(component.size).toBe(Size.normal);
    expect(component.title).toBe('');
  });

  it('should change size to small', () => {
    component.size = Size.small;
    expect(component.size).toBe(Size.small);
  });

  it('should change size to large', () => {
    component.size = Size.large;
    expect(component.size).toBe(Size.large);
  });

  it('should change title', () => {
    component.title = 'hello';
    expect(component.title).toBe('hello');
  });

});
