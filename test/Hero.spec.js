import { mount } from '@vue/test-utils'
import Hero from '@/components/Hero.vue'

describe('Testing Slot in Hero component', () => {
  const SLOT_CONTENT = '<p>Titulo de pruebas</p>'
  const wrapper = mount(Hero, {
    slots: {
      header: SLOT_CONTENT
    }
  })

  test('is render inside slot ', () => {
    expect(wrapper.html()).toContain(SLOT_CONTENT)
  })

})
