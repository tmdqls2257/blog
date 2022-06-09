import { memo } from 'react'
import styles from './item.module.css'

type typeOfItem = {
  number: number
}

const Item = ({ number }: typeOfItem) => {
  return (
    <div>
      <div className={styles.ItemWrap}>
        <div className={styles.ItemWrapTop}>{number}</div>
        <div className={styles.ItemWrapBody}>
          <div className={styles.ItemWrapBodyTitle} />
          <div className={styles.ItemWrapBodyTitle} />
          <div className={styles.ItemWrapBodyTitle} />
        </div>
      </div>
    </div>
  )
}

export default memo(Item)
