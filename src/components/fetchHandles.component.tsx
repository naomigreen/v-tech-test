/** @jsx h */
import { h } from 'preact'
import icon from '../assets/images/search.svg';
import * as styles from './fetchHandles.module.less'

type FetchHandlesProps = {
  loading: boolean
  error: null | string
}

const FetchHandles = ({ loading, error }: FetchHandlesProps) => (
  <div className={styles['fetch-handles-component']}>
    {loading && <img src={icon} />}
    {error && (<p>{`Unable to complete search due to ${error}`} </p>)}
  </div>

)


export default FetchHandles