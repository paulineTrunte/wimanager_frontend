import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView'



describe('Testing HomeView', () => {
  it('should show page title', () => {
    // when
    const wrapper = mount(HomeView)

    // then
    expect(wrapper.text()).toMatch('by students for studentsHier habt Ihr die Möglichkeit euer Wirtschaftsinformatik-Studium ein wenig zu managen, eure Mitstudenten  über Fristen zu informieren und euch eigene Tasks aufzuschreiben!(◕‿◕) Quasi ein Online-Uni-Notizbuch (◕‿◕)')
  })

  it('renders generally', () => {
    const wrapper = mount(HomeView)

    expect(wrapper.exists()).toBe(true);
   })

})
