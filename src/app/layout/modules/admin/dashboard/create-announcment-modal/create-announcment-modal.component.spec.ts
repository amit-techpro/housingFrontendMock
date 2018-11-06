import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnnouncmentModalComponent } from './create-announcment-modal.component';

describe('CreateAnnouncmentModalComponent', () => {
  let component: CreateAnnouncmentModalComponent;
  let fixture: ComponentFixture<CreateAnnouncmentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAnnouncmentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAnnouncmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
