import { NgrxTasksPage } from './app.po';

describe('ngrx-tasks App', () => {
  let page: NgrxTasksPage;

  beforeEach(() => {
    page = new NgrxTasksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
