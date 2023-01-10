import { mount } from '@vue/test-utils'
import ModuleView from '@/views/ModuleView'



describe('Testing ModuleView', () => {
  it('should show page title', () => {
    // when
    const wrapper = mount(ModuleView)

    // then
    expect(wrapper.text()).toMatch('Module')
  })

  it('renders generally', () => {
    const wrapper = mount(ModuleView)
    
    expect(wrapper.exists()).toBe(true);
   })
})