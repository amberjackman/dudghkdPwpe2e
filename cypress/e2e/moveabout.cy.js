describe('about 페이지', () => {
  it('메인 페이지 접근', () => {
    cy.visit('/')
    cy.get('header .nav-link.active')
      .contains('Search')
  })
  it('about 페이지로 이동', () => {
    cy.get('header .nav-link')
      .contains('About')
      .click()
    cy.url()
      .should('include', '/about')
    cy.wait(1000)
    cy.get('header .nav-link.active')
      .contains('About')
    cy.get('.name')
      .contains('HEROPY')
  })
  it('상세페이지 이동', () => {
    cy.get('header .nav-link')
      .contains('Movie')
      .click()
    cy.url()
      .should('include', '/movie')
  })
  it('About 페이지로 이동한다', () => {
    cy.get('header .user')
      .click()
    cy.url()
      .should('include', '/about')
    cy.get('header .nav-link.active')
      .contains('About')
    cy.get('.name')
      .contains('HEROPY')
  })
})