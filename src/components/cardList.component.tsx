/** @jsx h */
import { h } from 'preact'
import Card from '../components/card.component';
import * as styles from './cardList.module.less'

type CardListComponentProps = {
  data: any
}

const CardListComponent = ({ data }: CardListComponentProps) => (
  <ul className={styles['card-list-component']}>
    {data?.map((d) => (
      <li>
        <Card
          hotel={d.hotel.name}
          pricePerson={d.pricePerPerson}
          location={d.hotel.content.parentLocation}
          board={d.hotel.boardBasis}
          virginRating={d.hotel.content.vRating}
          img={d.hotel.content.images}
          tripReview={d.hotel?.tripAdvisor?.numReviews}
          tripRating={d.hotel?.tripAdvisor?.ratingImageUrl}
        />
      </li>
    ))}
  </ul>
)

export default CardListComponent;