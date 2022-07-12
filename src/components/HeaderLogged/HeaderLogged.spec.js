import { mount } from '@vue/test-utils'
import HeaderLogged from '.'
import { routes } from '../../router'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

const mockStore = { currentUser: {} }

jest.mock('../../hooks/useStore', () => {
  return () => {
    return mockStore
  }
})

describe('<HeaderLogged />', () => {
  it('Deve renderizar o Header logged corretamente', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = mount(HeaderLogged, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Deve renderizar 3 pontos para usuário não logado', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = mount(HeaderLogged, {
      global: {
        plugins: [router]
      }
    })

    const buttonLogout = wrapper.find('#logout-button')
    expect(buttonLogout.text()).toBe('...')
  })

  it('Deve renderizar o nome do usuário logado', async () => {
    router.push('/')
    await router.isReady()

    mockStore.currentUser.name = 'João'

    const wrapper = mount(HeaderLogged, {
      global: {
        plugins: [router]
      }
    })

    const buttonLogout = wrapper.find('#logout-button')
    expect(buttonLogout.text()).toBe('João (sair)')
  })
})
