import Home from '.'
import { mount } from '@vue/test-utils'
import { routes } from '../../router'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

describe('<Home />', () => {
  it('Deve renderizar home corretamente', async () => {
    router.push('/')
    await router.isReady()
    const wrapper = mount(Home, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
