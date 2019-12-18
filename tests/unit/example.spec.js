import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('Renders landing page msg when called', () => {
    const msg = 'Welcome to your one stop shop for the latest and greatest crypto coin prices Use the nav above to select your favorite coin of choice and see how it\'s trending the last few days Have a favorite? Click your favorites to get a quick view of everything you are interested in'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
