import { shallowMount } from '@vue/test-utils'
import Button from '@/lib-components/atoms/button/coa-button.vue'

describe('Button.vue', () => {
  it('Render button with children', () => {
    const button = shallowMount(Button, {
      slots: { default: 'Click Here' },
    })

    expect(button.element).toMatchSnapshot()
  })
})
