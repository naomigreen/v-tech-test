/** @jsx h */
import { h } from 'preact';
import * as styles from './number.module.less'

type NumberProps = {
  label: string
  name: string
  id: string
  min: number
  max: number
  value?: number | string
  required?: boolean
}

export const NumberComponent = ({ id, label, name, min, max, value, required }: NumberProps) => {
  return (
    <div className={styles['number-component']}>
      <label for={id}>
        {label}
      </label>
      <input type="number" name={name} id={id} min={min} max={max} value={value} required={required} />
    </div>
  );
};
