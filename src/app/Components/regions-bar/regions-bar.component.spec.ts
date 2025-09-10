import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsBarComponent } from './regions-bar.component';

describe('RegionsBarComponent', () => {
  let component: RegionsBarComponent;
  let fixture: ComponentFixture<RegionsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegionsBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
