import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView'



describe('Testing HomeView', () => {
  it('should show page title', () => {
    // when
    const wrapper = shallowMount(HomeView)
    
    // then
    expect(wrapper.text()).toMatch('by students for studentsHier habt Ihr die Möglichkeit euer Wirtschaftsinformatik-Studium zu managen, eure Kommillitonen  über allgemein geltende Fristen eurer Module zu informieren und eigene Tasks anzulegen!(◕‿◕) Quasi ein Online-Uni-Notizbuch (◕‿◕)')
  })

  it('renders generally', async () => {
    const wrapper = shallowMount(HomeView)

    expect(wrapper.exists()).toBe(true);
   })

})
