import { SobujPataPage } from './app.po';

describe('sobuj-pata App', function() {
  let page: SobujPataPage;

  beforeEach(() => {
    page = new SobujPataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
