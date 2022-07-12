import useStore from '../hooks/useStore'
import {
  setCurrentUser,
  resetUserStore,
  setApiKey,
  cleanCurrentUser
} from './user'

describe('UserStore', () => {
  afterEach(() => {
    resetUserStore()
  })

  it('Deve setar o usuário atual', () => {
    const store = useStore()
    setCurrentUser({ name: 'João' })
    expect(store.User.currentUser.name).toBe('João')
  })

  it('Deve setar api_key no usuário atual', () => {
    const store = useStore()
    setApiKey('123')
    expect(store.User.currentUser.apiKey).toBe('123')
  })

  it('Deve limpar o usuário atual', () => {
    const store = useStore()
    setCurrentUser({ name: 'João' })
    expect(store.User.currentUser.name).toBe('João')
    cleanCurrentUser()
    expect(store.User.currentUser.name).toBeFalsy()
  })
})
