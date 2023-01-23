import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetryConnectionComponent } from './retry-connection.component';

describe('RetryConnectionComponent', () => {
  let component: RetryConnectionComponent;
  let fixture: ComponentFixture<RetryConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetryConnectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetryConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
