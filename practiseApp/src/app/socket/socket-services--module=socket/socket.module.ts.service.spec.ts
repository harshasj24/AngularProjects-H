import { TestBed } from '@angular/core/testing';

import { Socket.Module.TsService } from './socket.module.ts.service';

describe('Socket.Module.TsService', () => {
  let service: Socket.Module.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Socket.Module.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
