import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeViewChipsComponent } from './change-view-chips.component';

describe('ChangeViewChipsComponent', () => {
  let component: ChangeViewChipsComponent;
  let fixture: ComponentFixture<ChangeViewChipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChangeViewChipsComponent]
    });
    fixture = TestBed.createComponent(ChangeViewChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
