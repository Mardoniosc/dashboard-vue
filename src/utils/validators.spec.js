import {
  validateEmptyAndEmail,
  validateEmptyAndLength3
} from './validators'

describe('Validators utils', () => {
  it('deve ter um erro ao chamar função com valor vazio', () => {
    expect(validateEmptyAndLength3()).toBe('*Este campo é obrigatório')
  })

  it('deve ter um erro ao chamar função com valor menor que 3 caracteres', () => {
    expect(validateEmptyAndLength3('12')).toBe('*Este campo precisa ter no mínimo 3 caracteres')
  })

  it('Deve retorna valor verdadeiro ao passar um parametro correto', () => {
    expect(validateEmptyAndLength3('1234')).toBe(true)
  })

  it('deve ter um erro ao chamar função com valor vazio', () => {
    expect(validateEmptyAndEmail()).toBe('*Este campo é obrigatório')
  })

  it('Deve ter um erro ao não passar um e-mail válido', () => {
    expect(validateEmptyAndEmail('emailnaovalidao.com')).toBe('*Este campo precisa ser um e-mail')
  })

  it('Deve retorna valor verdadeiro ao passar um parametro correto', () => {
    expect(validateEmptyAndEmail('Mardonio@live.com')).toBe(true)
  })
})
