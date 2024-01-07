import { render, screen } from '@testing-library/vue'
import HelloWorldVue from './HelloWorld.vue'

describe('Hello World Vue Component', () => {
  test('renders component', () => {
    render(HelloWorldVue, { props: { msg: 'potato' } })

    expect(screen.getByText(/potato/i)).toBeVisible()
  })
})
