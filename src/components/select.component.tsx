/** @jsx h */
import { h, options } from 'preact';
import * as styles from './select.module.less'

export type Option = {
  value: string
  description: string
}

type SelectProps = {
  label: string
  name: string
  id: string
  options: Option[]
  value: string
  required?: boolean
}

export const SelectComponent = ({ id, label, name, required, value, options }: SelectProps) => (
  <div className={styles['select-component']}>
    <label for={id}>
      {label}
    </label>
    <select name={name} id={id} required={required}>
      <option value="">Please select</option>
      {
        options.map((option: Option) => <option value={option?.value} selected={option.value === value}>{option?.description}</option>)
      }
    </select>
  </div>
);