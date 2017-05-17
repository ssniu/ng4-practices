import { Ps1Page } from './app.po';

describe('ps1 App', function() {
  let page: Ps1Page;

  beforeEach(() => {
    page = new Ps1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
