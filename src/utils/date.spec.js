import { getDiffTimeBetweenCurrentDate } from './date'

describe('Date utils', () => {
  it('Deve retornar uma data humanizada', async () => {
    const dataAtual = new Date()
    dataAtual.setDate(dataAtual.getDate() - 2)
    expect(getDiffTimeBetweenCurrentDate(dataAtual)).toBe('2 dias atrás')
  })

  it('Deve retornar a string passsada ao tentar humanizar a data', async () => {
    const dataInvalida = '1657635984'
    expect(getDiffTimeBetweenCurrentDate(dataInvalida)).toBe('1657635984')
  })

  it('Deve retornar vazio ao não passar parametros', async () => {
    expect(getDiffTimeBetweenCurrentDate()).toBe('')
  })
})
