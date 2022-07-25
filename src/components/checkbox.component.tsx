/** @jsx h */
import { h } from 'preact'
import * as styles from './checkbox.module.less'

type CheckboxComponentProps = {
  handleChange: (e: any) => void
  value: any
  label?: string
  src?: string

}

const CheckboxComponent = ({ value, label, src, handleChange }: CheckboxComponentProps) => {
  return (
    <div className={styles['checkbox-component']} >
      <label for={value} ><input type="checkbox" name={value} onChange={handleChange} />{src ? <img src={src} alt='' /> : label}</label>
    </div>

  )
}

export default CheckboxComponent