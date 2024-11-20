import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingSectionComponent } from './standing-section.component';

describe('StandingSectionComponent', () => {
  let component: StandingSectionComponent;
  let fixture: ComponentFixture<StandingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandingSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
