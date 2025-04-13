import Header from './index';

describe('<Header />', () => {
  it('should render and display expected content', () => {
    cy.mount(
      <Header>
        <h1>Header Children</h1>
      </Header>
    );
    cy.get('h1').contains('Header Children');
  });
});
