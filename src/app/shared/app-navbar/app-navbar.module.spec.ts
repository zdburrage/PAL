import { NavbarModuleModule } from './app-navbar.module';

describe('NavbarModuleModule', () => {
  let navbarModuleModule: NavbarModuleModule;

  beforeEach(() => {
    navbarModuleModule = new NavbarModuleModule();
  });

  it('should create an instance', () => {
    expect(navbarModuleModule).toBeTruthy();
  });
});
