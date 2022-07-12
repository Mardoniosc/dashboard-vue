import mockAxios from 'axios'
import AuthService from './auth'

jest.mock('axios')

describe('AuthService', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Deve retornar um token quando usuário logar', async () => {
    const token = '654.654.654'
    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ data: { token } })
    })

    const response = await AuthService(mockAxios).login({ email: 'algo@live.com', password: '123321' })
    expect(response.data).toHaveProperty('token')
    expect(response).toMatchSnapshot()
  })

  it('Deve retornar um usuário quando o usuário se registrar', async () => {
    const user = {
      name: 'Joao',
      password: '147258',
      email: 'joao@gmail.com'
    }

    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ data: user })
    })

    const response = await AuthService(mockAxios).register(user)
    expect(response.data).toHaveProperty('name')
    expect(response.data).toHaveProperty('password')
    expect(response.data).toHaveProperty('email')
    expect(response.data).toMatchSnapshot()
  })

  it('Deve retornar um erro de não encontrado', async () => {
    const errors = { status: 404, statusText: 'Not Found' }

    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ request: errors })
    })

    const response = await AuthService(mockAxios).login({ email: 'algo@live.com', password: '123321' })
    expect(response.errors).toHaveProperty('status')
    expect(response.errors).toHaveProperty('statusText')
  })
})
