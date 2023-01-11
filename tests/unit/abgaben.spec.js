import { mount } from '@vue/test-utils'
import AbgabeView from '@/views/AbgabeView'
import AbgabenRender from '@/components/AbgabenRender'
import AbgabenHinzufuegen from '@/components/AbgabenHinzufuegen'

describe('Testing AbgabeView', () => {
  it('should show page title', () => {
    // when
    const wrapper = mount(AbgabeView)

    // then
    expect(wrapper.text()).toMatch('Termine')
  })

  it('renders generally', () => {
    const wrapper = mount(AbgabeView)

    expect(wrapper.exists()).toBe(true);
   })

  it('should have AbgabenHinzufuegen component', () => {
    // when
    const wrapper = mount(AbgabeView)

    // then
    const addAbgabe = wrapper.findComponent(AbgabenHinzufuegen)
    expect(addAbgabe.exists()).toBeTruthy()
  })

  it('should have AbgabenRender component', () => {
    // when
    const wrapper = mount(AbgabenRender)

    // then
    const renderAbgabe = wrapper.findComponent(AbgabenRender)
    expect(renderAbgabe.exists()).toBeTruthy()
  })



})
