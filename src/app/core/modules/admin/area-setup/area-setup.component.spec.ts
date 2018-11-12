import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaSetupComponent } from './area-setup.component';

describe('AreaSetupComponent', () => {
  let component: AreaSetupComponent;
  let fixture: ComponentFixture<AreaSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
