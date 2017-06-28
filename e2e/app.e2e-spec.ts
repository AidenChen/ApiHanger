import { ApiHangerPage } from './app.po';

describe('api-hanger App', () => {
  let page: ApiHangerPage;

  beforeEach(() => {
    page = new ApiHangerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
