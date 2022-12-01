describe('영화검색 frozen2', () => {
  it('검색페이지 접근', () => {
    cy.visit('/')
    cy.get('header .nav-link.active')
    .contains('Search')
  })

  it('영화 검색', () => {
    cy.get('input.form-control')
      .type('frozen')
    cy.get('select.form-select:nth-child(2)')
      .select('30')
    cy.get('button.btn ')
      .contains('Apply')
      .click()
    cy.wait(2000)
    cy.get('.movie')
      .should('have.length', 30)
  })
  it('겨울왕국 2 선택', () => {
    cy.get('.movie .title')
      .contains('Frozen II')
      .click()
  })
  it ('상세정보 확인', () => {
    cy.url() //tt4520988 
      .should('include','/movie/tt4520988')
      cy.wait(1000)
      cy.get('header .nav-link.active')
        .contains('Movie')
      cy.get('.title')
        .contains('Frozen II')
  })
})
