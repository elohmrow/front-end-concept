import { Angular4HeroesPage } from './app.po';

describe('angular4-heroes App', () => {
  let page: Angular4HeroesPage;

  beforeEach(() => {
    page = new Angular4HeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
