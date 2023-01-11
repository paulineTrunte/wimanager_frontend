import { shallowMount } from '@vue/test-utils'
import ModuleView from '@/views/ModuleView'



describe('Testing ModuleView.vue', () => {
  it('should show page title', () => {
    // when
    const wrapper = shallowMount(ModuleView)

    // then
    expect(wrapper.text()).toMatch('Module')
  })

  it('renders generally', () => {
    const wrapper = shallowMount(ModuleView)

    expect(wrapper.exists()).toBe(true);
  })

})
