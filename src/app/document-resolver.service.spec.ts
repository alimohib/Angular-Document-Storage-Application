import { TestBed } from '@angular/core/testing';

import { DocumentResolver } from './document-resolver.service';

describe('DocumentResolverService', () => {
  let service: DocumentResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
