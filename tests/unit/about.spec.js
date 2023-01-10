import { mount } from '@vue/test-utils'
import AboutView from '@/views/AboutView'

describe('Testing AboutView', () => {  
  it('should show page title', () => {
    // when
    const wrapper = mount(AboutView)

    // then
    expect(wrapper.text()).toMatch('About')
  })

  it('renders generally', () => {
    //when
    const wrapper = mount(AboutView)
    
    //then
    expect(wrapper.exists()).toBe(true);
   })

})