import { MyNgAPage } from './app.po';

describe('my-ng-a App', () => {
  let page: MyNgAPage;

  beforeEach(() => {
    page = new MyNgAPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
