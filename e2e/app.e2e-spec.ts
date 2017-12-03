import { OrganizadorEscuelaServerPage } from './app.po';

describe('organizador-escuela-server App', function() {
  let page: OrganizadorEscuelaServerPage;

  beforeEach(() => {
    page = new OrganizadorEscuelaServerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
