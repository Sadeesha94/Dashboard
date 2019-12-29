import { TestBed } from '@angular/core/testing';

import { SideMenuItemsService } from './side-menu-items.service';

describe('SideMenuItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SideMenuItemsService = TestBed.get(SideMenuItemsService);
    expect(service).toBeTruthy();
  });
});
