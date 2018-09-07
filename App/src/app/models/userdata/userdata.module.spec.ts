import { UserdataModule } from './userdata.module';

describe('UserdataModule', () => {
  let userdataModule: UserdataModule;

  beforeEach(() => {
    userdataModule = new UserdataModule();
  });

  it('should create an instance', () => {
    expect(userdataModule).toBeTruthy();
  });
});
