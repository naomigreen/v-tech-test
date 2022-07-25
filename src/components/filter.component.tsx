/** @jsx h */
import { h, JSX } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import * as styles from './filter.module.less';
import CheckboxComponent from '../components/checkbox.component';
import { FACILITIES, PRICE, RATING } from '../consts/filter'

type FilterComponentProps = {
  setData: (value: any) => void
  setNoResults: (value: boolean) => void
  defaultResults: any
  data: any
}

type FilterType = {
  type: string,
  value: string[] | { min: number, max: number }[]
}

const FilterComponent = ({ data, setData, setNoResults, defaultResults }: FilterComponentProps): JSX.Element => {
  const [filterList, setFilterList] = useState([] as FilterType[]);

  const handleChange = (e, type, value) => {
    const checked = e.target.checked;
    const index = filterList?.findIndex(d => d.type === type);
    const existingCondition = filterList?.find(d => d.type == type)
    const filterListClone = JSON.parse(JSON.stringify(filterList));

    if (checked) {
      if (existingCondition) {
        filterListClone[index].value = [...filterList[index].value, value]
        return setFilterList(filterListClone)
      } else {
        return setFilterList(filterListClone.concat({ type, value: [value] }))
      }
    } else {
      filterListClone[index].value.length > 1 ?
        filterListClone[index].value = filterListClone[index]?.value.filter(d => JSON.stringify(d) !== JSON.stringify(value)) :
        filterListClone.splice(index, 1)
      setFilterList(filterListClone)
      console.log(filterListClone);

      // If all filter conditions have been removed, display unfiltered search results
      if (!filterListClone.length) {
        setData(defaultResults)
        setNoResults(false)
      }
    }
  }

  useEffect(() => {
    if (filterList.length) {

      const filteredData = defaultResults.filter((d: any) => {
        return filterList.every((t) => {
          if (t.type === 'rating') {
            return t?.value?.includes(d.hotel?.content?.vRating)
          } else if (t.type === 'facilities') {
            return t.value?.every(g => d.hotel.content.hotelFacilities.includes(g))
          } else if (t.type === 'price') {
            return t.value.some(r => d.pricePerPerson >= r.min && d.pricePerPerson <= r.max)
          }
        })
      })
      setNoResults(filterList.length && filteredData.length ? false : true)
      setData(filteredData)
    }

  }, [filterList]);

  return (
    <div className={styles['filter-component']}>
      <h1>Filter by...</h1>
      <span>RATING</span>
      <form>
        {RATING.map(({ label, value }) => (
          <CheckboxComponent handleChange={e => handleChange(e, 'rating', value)} src={label} value={value} />
        ))}
        <span>HOTEL FACILITIES</span>
        {FACILITIES.map(item => (
          <CheckboxComponent handleChange={e => handleChange(e, 'facilities', item)} label={item} value={item} />
        ))}
        <span>PRICE (PP)</span>
        {PRICE.map(({ label, value }) => (
          <CheckboxComponent handleChange={e => handleChange(e, 'price', value)} label={label} value={label} />
        ))}
      </form>
    </div>
  )
}

export default FilterComponent;