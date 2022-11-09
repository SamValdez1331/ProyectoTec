import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlandeestudioComponent } from './plandeestudio.component';

describe('PlandeestudioComponent', () => {
  let component: PlandeestudioComponent;
  let fixture: ComponentFixture<PlandeestudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlandeestudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlandeestudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
