import { TestBed } from '@angular/core/testing';

import { ModalShareService } from './modal-share.service';

describe('ModalShareService', () => {
  let service: ModalShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
