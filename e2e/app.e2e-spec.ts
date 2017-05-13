import { CandyPage } from './app.po';

describe('candy App', () => {
  let page: CandyPage;

  beforeEach(() => {
    page = new CandyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
