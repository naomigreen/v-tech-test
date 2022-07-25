import { h } from 'preact';
import { render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-preact-pure';
import CardListComponent from './cardList.component';

configure({ adapter: new Adapter })

describe('cardListComponent', () => {
  const props = {
    data: [
      {
        pricePerson: 3000.50,
        hotel: {
          name: 'Hotel Foo',
          boardBasis: ['Half board'],
          tripAdvisor: {
            numReviews: '100',
            ratingImageUrl: 'img/src.png'
          },
          content: {
            images: [{ RESULTS_CAROUSEL: { url: 'img/src.png' } }],
            parentLocation: 'Foo Island',
            vRating: '4+',
          },
        }
      }
    ]
  }
  it('should display card details correctly', async () => {
    const cardListComponent = render(<CardListComponent {...props} />)
    expect(cardListComponent.find('li').length).toBe(1);
  })
})