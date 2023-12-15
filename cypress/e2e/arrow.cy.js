
// Criar variavel
const url = 'https://www.bancointer.com.br'
const BtnCookies = '#onetrust-accept-btn-handler'
const BtnAcessarConta = '.styles__ButtonsWrapper-sc-1gbjc3e-9 > :nth-child(1)'
const CampoNome = '#nome'
const CampoCelular = '#celular'
const CampoEmail = '#email'
const CampoCpf = '#cpf'
const CampoDataNascimento = '#dataNascimento'
const BtnAutorizo = '.form-label-check'
const BtnContinuar = '.d-none > .btn'
const ValidarTextoDados = '.text-center > .fs-md-16'
const ValidarFrasetexto = '.text-center > .fs-md-16'



describe('Banco inter', () => {


    it('Acessar a pagina e validar o titulo', () => {
        cy.visit(url);

        //Validar titulo da pagina, precisa ser identico
        cy.title().should('be.equal', "Inter. Simplifica a vida.")
        cy.title().should('contains', 'vida')

        cy.get(BtnCookies).click()
        cy.get(BtnAcessarConta).click()
        cy.get(CampoNome).type('Amanda Souza')
        cy.get(CampoCelular).type('2198436-0966')
        cy.get(CampoEmail).type('stella.isabelle.moraes@ohms.com.br')
        cy.get(CampoCpf).type('18037366901')
        cy.get(CampoDataNascimento).type('06121999')
        cy.get(BtnAutorizo).click()
        cy.get(BtnContinuar).click()

        cy.get(ValidarTextoDados).should('contain','dados')
        cy.get(ValidarFrasetexto).should('have.text','Prontinho! Recebemos os seus dados.')
        cy.screenshot('Validação')
      





    });
    
});