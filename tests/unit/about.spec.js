import { shallowMount } from '@vue/test-utils'
import AboutView from '@/views/AboutView'

describe('Testing AboutView', () => {  
  it('should show page title', () => {
    // when
    const wrapper = shallowMount(AboutView)

    // then
    expect(wrapper.text()).toMatch('About')
  })

  it('renders generally', async () => {
    //when
    const wrapper = shallowMount(AboutView)
    
    //then
    expect(wrapper.exists()).toBe(true);
   })

})