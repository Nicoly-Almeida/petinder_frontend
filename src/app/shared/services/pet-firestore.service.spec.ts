import { TestBed } from '@angular/core/testing';

import { PetFirestoreService } from './pet-firestore.service';

describe('PetFirestoreService', () => {
  let service: PetFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
