import { TestBed } from '@angular/core/testing';

import { CardSerivceService } from './card.service';

describe('CardSerivceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardSerivceService = TestBed.get(CardSerivceService);
    expect(service).toBeTruthy();
  });
});
