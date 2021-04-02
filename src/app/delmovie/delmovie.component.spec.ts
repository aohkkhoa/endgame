import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelmovieComponent } from './delmovie.component';

describe('DelmovieComponent', () => {
  let component: DelmovieComponent;
  let fixture: ComponentFixture<DelmovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelmovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
