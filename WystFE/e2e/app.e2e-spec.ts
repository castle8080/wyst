import { WystFEPage } from './app.po';

describe('wyst-fe App', function() {
  let page: WystFEPage;

  beforeEach(() => {
    page = new WystFEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
