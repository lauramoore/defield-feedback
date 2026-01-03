import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import WelcomeItem from '../WelcomeItem.vue'

describe('WelcomeItem', () => {
  it('renders the button element', () => {
    const wrapper = mount(WelcomeItem)
    expect(wrapper.find('button.item').exists()).toBe(true)
  })

  it('renders default slot content when no slot is provided', () => {
    const wrapper = mount(WelcomeItem)
    expect(wrapper.text()).toContain('Button Label')
  })

  it('renders provided named slot content', () => {
    const customLabel = 'Start Feedback'
    const wrapper = mount(WelcomeItem, {
      slots: {
        label: customLabel
      }
    })
    expect(wrapper.text()).toContain(customLabel)
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(WelcomeItem)
    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted()).toHaveProperty('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })
})
