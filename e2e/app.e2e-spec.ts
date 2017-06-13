import { TestcliPage } from './app.po';

describe('testcli App', () => {
  let page: TestcliPage;

  beforeEach(() => {
    page = new TestcliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
