import { EasyAppPage } from './app.po';

describe('easy-app App', () => {
  let page: EasyAppPage;

  beforeEach(() => {
    page = new EasyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
