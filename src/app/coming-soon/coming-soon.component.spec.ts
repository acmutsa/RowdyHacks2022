import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingsoonComponent } from './coming-soon.component';

describe('ComingSoonComponent', () => {
  let component: ComingsoonComponent;
  let fixture: ComponentFixture<ComingsoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComingsoonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingsoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
