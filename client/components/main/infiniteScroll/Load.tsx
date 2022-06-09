import { memo } from 'react'
import ReactLoading from 'react-loading'
import styles from './load.module.css'

const Loader = () => {
  return (
    <div className={styles.LoaderWrap}>
      <ReactLoading type="spin" color="#A593E0" />
    </div>
  )
}

export default memo(Loader)
