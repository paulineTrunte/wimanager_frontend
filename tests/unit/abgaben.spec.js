import { shallowMount } from '@vue/test-utils'
import AbgabeView from '@/views/AbgabeView'
import AbgabenRender from '@/components/AbgabenRender'
import AbgabenHinzufuegen from '@/components/AbgabenHinzufuegen'
import AbgabeAendern from '@/components/AbgabeAendern'
import AbgabeLoeschen from '@/components/AbgabeLoeschen'
import RefreshButton from '@/components/RefreshButton'

describe('Testing AbgabeView', () => {
  it('should show page title', () => {
    // when
    const wrapper = shallowMount(AbgabeView)

    // then
    expect(wrapper.text()).toMatch('Termine')
  })

  it('renders generally', () => {
    const wrapper = shallowMount(AbgabeView)

    expect(wrapper.exists()).toBe(true);
  })

  it('should have AbgabenHinzufuegen component', () => {
    // when
    const wrapper = shallowMount(AbgabeView)

    // then
    const addAbgabe = wrapper.findComponent(AbgabenHinzufuegen)
    expect(addAbgabe.exists()).toBeTruthy()
  })

  it('should have AbgabenAendern component', () => {
    // when
    const wrapper = shallowMount(AbgabeAendern)

    // then
    const changeAbgabe = wrapper.findComponent(AbgabeAendern)
    expect(changeAbgabe.exists()).toBeTruthy()
  })

  it('should have AbgabeLoeschen component', () => {
    // when
    const wrapper = shallowMount(AbgabeLoeschen)

    // then
    const deleteAbgabe = wrapper.findComponent(AbgabeLoeschen)
    expect(deleteAbgabe.exists()).toBeTruthy()
  })

  it('should have AbgabenRender component', () => {
    // when
    const wrapper = shallowMount(AbgabenRender)

    // then
    const renderAbgabe = wrapper.findComponent(AbgabenRender)
    expect(renderAbgabe.exists()).toBeTruthy()
  })

  it('should have RefreshButton component', () => {
    // when
    const wrapper = shallowMount(RefreshButton)

    // then
    const buttonExists = wrapper.findComponent(RefreshButton)
    expect(buttonExists.exists()).toBeTruthy()
  })



})
