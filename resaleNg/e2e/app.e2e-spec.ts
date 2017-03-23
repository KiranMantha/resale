import { ResaleEVPage } from './app.po';

describe('resale-ev App', () => {
  let page: ResaleEVPage;

  beforeEach(() => {
    page = new ResaleEVPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
