import { h } from 'preact';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-preact-pure';
import CheckboxComponent from './checkbox.component';

configure({ adapter: new Adapter })

describe('CheckboxComponent', () => {
  const props = {
    handleChange: jest.fn(),
    label: 'Foo',
    value: 'bar'
  }

  it('should display the checkbox correctly', () => {
    const checkboxComponent = mount(<CheckboxComponent {...props} />)
    expect(checkboxComponent.find('input[type="checkbox"]').is('[name="bar"]')).toBe(true)
    expect(checkboxComponent.text()).toContain('Foo');
  })
})