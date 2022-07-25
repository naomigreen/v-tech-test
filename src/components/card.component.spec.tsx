import { h } from 'preact';
import { render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-preact-pure';
import CardComponent from './card.component';
configure({ adapter: new Adapter })

describe('CardComponent', () => {
  const props = {
    pricePerson: 3000.50,
    location: 'Foo Island',
    virginRating: '4+',
    board: ['Foo board'],
    hotel: 'Hotel Foo',
    img: [{ RESULTS_CAROUSEL: { url: 'img/src.png' } }],
    tripReview: '100',
    tripRating: 'img/src.png',
  }
  it('should display card details correctly', async () => {
    const cardComponent = render(<CardComponent {...props} />)
    expect(cardComponent.text()).toContain('Hotel Foo');
    expect(cardComponent.text()).toContain('Foo Island');
    expect(cardComponent.text()).toContain('Foo board');
    expect(cardComponent.text()).toContain('Based on 100 reviews');
    expect(cardComponent.text()).toContain('£3000pp');
  })
})