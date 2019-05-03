import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteAcknowledgementComponent } from './vote-acknowledgement.component';

describe('VoteAcknowledgementComponent', () => {
  let component: VoteAcknowledgementComponent;
  let fixture: ComponentFixture<VoteAcknowledgementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteAcknowledgementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteAcknowledgementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
