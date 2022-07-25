/** @jsx h */
import { h } from 'preact';
import * as styles from './card.module.less';
import { RATINGS } from '../consts/data';


type CardComponentProps = {
  pricePerson: number
  location: string
  virginRating: string
  board: string[]
  hotel: string
  img: any
  tripReview: string
  tripRating: string
}

const CardComponent = ({
  pricePerson,
  location,
  virginRating,
  board,
  hotel,
  img,
  tripReview,
  tripRating
}: CardComponentProps) => {

  const getRating = (value: string) => {
    const image = RATINGS.find(r => r.value === value)
    return image?.src;
  }
  return (
    <div className={styles['card-component']}>
      <img src={img[0].RESULTS_CAROUSEL.url} />
      <div className={styles['card-content']} >
        <h1>{hotel}</h1>
        <p>{location}</p>
        <div className={styles['ratings']}>
          {tripRating && tripReview &&
            <div className={styles['trip-rating']}>
              <img src={tripRating} />
              <p>{`Based on ${tripReview} reviews`}</p>
            </div>
          }
          {virginRating && <div className={styles['virgin-rating']}>
            <img src={getRating(virginRating)} />
            <p>Virgin rating</p>
          </div>}
        </div>
        <span>{board}</span>
        <h1>{`£${Math.trunc(pricePerson)}pp`}</h1>
      </div>
    </div>
  )
}

export default CardComponent